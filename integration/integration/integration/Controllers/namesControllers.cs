using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace integration.Controllers
{
    [Route("api/[controller]/[Action]/[action]")]
    [ApiController]
    [Serializable]
    public class namesControllers : ControllerBase
    {
        public namesControllers()
        {
        }

        [HttpGet]
       
        public async Task<IActionResult> returnName()
        {

            try
            {

                var x = " Omar ";
                return Ok(x);
            }
            catch (Exception)
            {

                throw;
            }
           
        }

        [HttpPost]
        public async Task<IActionResult> ramo(String x)
        {
            return Ok(x); 

        }
        
            
    }
}
