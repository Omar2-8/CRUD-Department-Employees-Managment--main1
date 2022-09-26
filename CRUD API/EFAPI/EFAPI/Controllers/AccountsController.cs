using EFAPI.Data;
using EFAPI.Models;
using EFAPI.Models.DTO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Web.Services3.Security.Utility;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace EFAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    
    public class AccountsController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly IConfiguration _configuration;
        private readonly CRUDDBContext _context;
        public AccountsController(UserManager<IdentityUser> userManager,
            SignInManager<IdentityUser> signInManager,
            IConfiguration configuration,
            CRUDDBContext context)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> RegisterUser(UserRegistrationDTO UserRegistrationDTO)
        {
            try
            {

                var user = new ApplicationUser
                {
                    Email = UserRegistrationDTO.Email,
                    UserName = UserRegistrationDTO.UserName,
                    PhoneNumber = UserRegistrationDTO.PhoneNumber.ToString(),
                    
                };
               // await _userManager.AddToRoleAsync(user, "User");

               var result = await  _userManager.CreateAsync(user, UserRegistrationDTO.Password);

                if (result.Succeeded)
                {
                    await _signInManager.SignInAsync(user,isPersistent: false);
                    return Ok();
                    
                }
                
                return BadRequest(result);
            }
            catch (Exception)
            {

                throw;
            }
        }
        
        [HttpPost]
        //[AllowAnonymous]
        
        public async Task<IActionResult> LoginUser([FromBody]UserLoginDTO userLogin)
        {
            try
            {
                var user = await _userManager.FindByEmailAsync(userLogin.Email);
                var employee = _context.Emoloyees.Include(x => x.Department).SingleOrDefault(x => x.EmployeeEmail == userLogin.Email);

                var result = await _signInManager.PasswordSignInAsync(user, userLogin.Password,false,false);

                

                if (result.Succeeded)
                { 
                    var userRoles = await _userManager.GetRolesAsync(user);

                    var issuer = _configuration["Jwt:Issuer"];
                    var audience = _configuration["Jwt:Audience"];
                    var key = Encoding.ASCII.GetBytes(_configuration["Jwt:Key"]);
                    var tokenDescriptor = new SecurityTokenDescriptor {
                        Subject = new ClaimsIdentity(new[]
                             {
                                new Claim(ClaimTypes.Role, userRoles[0]),
                                new Claim(ClaimTypes.Email,userLogin.Email),
                                new Claim(ClaimTypes.Actor,employee.Department.DepartmentName),
                                 

                               // new Claim(ClaimTypes.Actor,employee.employeeRole),

                                new Claim(JwtRegisteredClaimNames.Aud,audience),
                                new Claim(JwtRegisteredClaimNames.Iss,issuer)
 }),
                            Expires = DateTime.UtcNow.AddMinutes(60),
                             Issuer = issuer,
                             Audience = audience,
                        SigningCredentials = new SigningCredentials
                         (new SymmetricSecurityKey(key),
                         SecurityAlgorithms.HmacSha512Signature)
                    };
                    var tokenHandler = new JwtSecurityTokenHandler();
                    var token = tokenHandler.CreateToken(tokenDescriptor);
                    var jwtToken = tokenHandler.WriteToken(token);
                    var stringToken = tokenHandler.WriteToken(token);

                    return Ok(new AuthenticatedResponse { Token = stringToken });
                }
                else
                { 
                    return Unauthorized(); 
                }


            }
            catch (Exception e)
            {

                throw e;
            }
        }

    }

}
