using EFAPI.Models;
using EFAPI.Models.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace EFAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;

        public AccountsController(UserManager<IdentityUser> userManager,
            SignInManager<IdentityUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
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
        public async Task<IActionResult> LoginUser([FromBody]UserLoginDTO userLogin)
        {
            try
            {
                var x = await _userManager.FindByEmailAsync(userLogin.Email);

                var result = await _signInManager.PasswordSignInAsync(x, userLogin.Password,false,false);   

                
                if (!result.Succeeded)
                {
                    return BadRequest(result);
                       
                }
                 return Ok();
              // return BadRequest(result);

            }
            catch (Exception e)
            {

                throw e;
            }
        }

    }

}
