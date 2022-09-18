using EFAPI.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace EFAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdministrationController : ControllerBase
    {
        private readonly RoleManager<IdentityRole> _roleManager;
       

        public AdministrationController(RoleManager<IdentityRole> roleManager)
        {
            _roleManager = roleManager;
            
        }

        [HttpPost, Authorize(Roles = "Admin")]
        public async Task<IActionResult> createeRole(string roleName)
        {
            try
            {
                IdentityRole identityRole = new IdentityRole
                {
                    Name = roleName
                };

                IdentityResult result = await _roleManager.CreateAsync(identityRole);
                 
                return Ok();
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpGet]
        public async Task<IActionResult> getRole()
        {
            try
            {
                var roles = _roleManager.Roles;

                return Ok(roles);
            }
            catch (Exception)
            {

                throw;
            }

        }
    }
}
