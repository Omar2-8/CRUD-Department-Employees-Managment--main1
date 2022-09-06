using AutoMapper;
using EFAPI.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Net.Http;
using System.Net.Http.Headers;

namespace EFAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IntegrationController : ControllerBase
    {

        private readonly CRUDDBContext _context;
        
        public IntegrationController(CRUDDBContext context)
        {
            _context = context;
           
        }

        [HttpGet]
        public async Task<ActionResult> Index()
        {
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("https://localhost:44317/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
              
                HttpResponseMessage response = await client.GetAsync("api/namesControllers/returnName/returnName"); //API controller name
                if (response.IsSuccessStatusCode)
                {
                    var result = await response.Content.ReadAsStringAsync();
                    if (result != null)
                    {
                        var output = result;
                        return Ok(output);
                    }
                }
                return BadRequest();
                
            }

           
        }
   

    [HttpPost]
    public async  Task<IActionResult> send(string x)
    {
        
            using(var client = new HttpClient())
            {
                client.BaseAddress = new Uri("https://localhost:44317/");
                client.DefaultRequestHeaders.Accept.Clear();
               client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                
           
                   // var json = JsonConvert.SerializeObject(x, Formatting.Indented);          
              //      var stringContent = new StringContent(json);


              HttpResponseMessage response = await client.PostAsync("api/namesControllers/ramo/ramo?x=", new StringContent(x));
            if (response.IsSuccessStatusCode)
            {
                var result = await response.Content.ReadAsStringAsync();
                if (result != null)
                {
                    var output = result;
                    return Ok(output);
                }
            }
            return BadRequest();


        }
           
            
        
    }
 }


}
