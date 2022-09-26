using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EFAPI.Data;
using EFAPI.Models;
using AutoMapper;
using IHostingEnvironment = Microsoft.AspNetCore.Hosting.IHostingEnvironment;
using Microsoft.AspNetCore.Identity;
using System.Text;
using MimeKit;

using MailKit.Security;
using MailKit.Net.Smtp;
using MimeKit.Text;
using Microsoft.AspNetCore.Authorization;

namespace EFAPI.Controllers
{
    [Route("api/[controller]/[action]")]
   // [Authorize]
    
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private IHostingEnvironment _hostingEnvironment;
        private readonly CRUDDBContext _context;
        private IMapper _mapper;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly IConfiguration _config;
        public EmployeesController(IHostingEnvironment hostingEnvironment,CRUDDBContext context,IMapper mapper, UserManager<IdentityUser> userManager, IConfiguration config)
        {
            
            _hostingEnvironment = hostingEnvironment;
            _context = context;
            _mapper = mapper;
            _userManager = userManager;
            _config = config;
        }

        // GET
        //[HttpGet]
        //public async Task<ActionResult> GetEmoloyees()
        //{
        //    if (_context.Emoloyees == null)
        //    {
        //        return NotFound();
        //    }
        //    try
        //    {
        //        IEnumerable<Employee> employees = _context.Emoloyees.Include(x=>x.Department);
        //        IEnumerable<EmployeesDTO> emplopyeeDTO = _mapper.Map<IEnumerable<EmployeesDTO>>(employees);

        //        List<EmployeesDTO> employeesDTOs = new List<EmployeesDTO>();
        //        foreach (var item in employees)
        //        {
        //            employeesDTOs.Add(new EmployeesDTO
        //            {
        //                DepartmentName = item.Department.DepartmentName,
        //                EmployeeID = item.ID,
        //                EmployeeName = item.EmployeeName,
        //                EmployeeEmail = item.EmployeeEmail,
        //                DepartmentID= item.Department.ID,
        //            });
        //        }

        //        return Ok(emplopyeeDTO);

        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }       
            
        //}

        [HttpGet, Authorize(Roles = "Admin")]
        public async Task<ActionResult> GetEmoloyees()
        {
            if (_context.Emoloyees == null)
            {
                return NotFound();
            }
            try
            {
                IEnumerable<Employee> employees = _context.Emoloyees;
                return Ok(employees);

            }
            catch (Exception)
            {

                throw;
            }




        }

        // GET by id, Authorize(Roles = "Admin")
        [HttpGet]
        public async Task<ActionResult> GetEmployeesById(int id)
        {
           

            try
            {
                var employee = _context.Emoloyees.Find(id);
                return Ok(employee);   
            }
            catch (Exception)
            {

                throw;
            }
      
        }
        //, Authorize(Roles = "Admin")

        [HttpGet]
        public async Task<ActionResult> GetEmployeesByEmail(string email)
        {


            try
            {
                var employee = _context.Emoloyees.SingleOrDefault(x =>x.EmployeeEmail == email);
                if (employee != null)
                {
                    return Ok(employee);
                }
                return NotFound();
                
            }
            catch (Exception)
            {

                throw;
            }

        }

        // edit

        [HttpPost, Authorize(Roles = "Admin")]
        public async Task<IActionResult> EditEmoloyee(Employee employee,int id )
        {

            try
            {
               
                _context.Entry(employee).State = EntityState.Modified;
                _context.SaveChanges();
                return Ok();
            }
            catch (Exception)
            {

                throw;
            }
        }

        // add, Authorize(Roles = "Admin")
        [HttpPost]
        public async Task<ActionResult> AddEmployee( Employee employee)
        {

            var DublicateEmployeeEmail = (_context.Emoloyees?.Any(e => e.EmployeeEmail == employee.EmployeeEmail)).GetValueOrDefault();
            if (DublicateEmployeeEmail)
            {
                return BadRequest("Email already Exist");
            }


            try
            {
                
                string Password = CreatePassword(8);
                // sendEmail(employee.EmployeeEmail, Password);

                //add to employee model
                _context.Emoloyees.Add(employee);
                await _context.SaveChangesAsync();

                //add application user
                var user = new ApplicationUser
                {
                    
                    Email = employee.EmployeeEmail,
                    UserName = employee.EmployeeName,
                    
                };
                

                var result = await _userManager.CreateAsync(user, employee.EmployeeName+1);
                await _userManager.AddToRoleAsync(user, "Employee");


                return Ok();
            }
            catch (Exception)
            {
                throw;
            }
          }

        [HttpPost]
        public async Task<ActionResult> AddToApplicationUseer(string email,string username,string role)
        {
            try
            {
               // string Password = CreatePassword(8);
                var user = new ApplicationUser
                {

                    Email = email,
                    UserName = username,

                };


                var result = await _userManager.CreateAsync(user, username+1);
                await _userManager.AddToRoleAsync(user, role);


                return Ok();
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpPost]
        public async Task<IActionResult> uploadimg(int id , IFormFile img)
        {
            try
            {
                var employee = _context.Emoloyees.Find(id);

                if (img!=null)
                employee.employeePhoto =  saveImg(employee.EmployeeName,img);

                return Ok();

            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpPost]
        public async Task<IActionResult> uploadCv(int id, IFormFile CV)
        {
            try
            {
                var employee = _context.Emoloyees.Find(id);

               if(CV != null) 
               employee.employeeCV = saveCV(employee.EmployeeName, CV);

                return Ok();

            }
            catch (Exception)
            {

                throw;
            }
        }

        private string saveCV(string name, IFormFile CV)
        {
            string webRootPath = _hostingEnvironment.WebRootPath;
            string cvFileName = name + " CV";
            string cvFilePath = Path.Combine(webRootPath, "CVs/", cvFileName);
            using (FileStream stream = new FileStream(cvFilePath, FileMode.Create))
            {
                 CV.CopyToAsync(stream);
                stream.Close();
            }
            return cvFileName;
        }

        private  string saveImg(string name, IFormFile img)
        {
            //creating path for image and CV 
            string webRootPath = _hostingEnvironment.WebRootPath;
            string imgFileName = name + " Photo";
            string imgFilePath = Path.Combine(webRootPath, "Images/", imgFileName);
            using (FileStream stream = new FileStream(imgFilePath, FileMode.Create))
            {
                img.CopyToAsync(stream);
                stream.Close();
            }
            return imgFilePath;
        }

       

        private void sendEmail(string employeeEmail, string password)
        {
            var email = new MimeMessage();
            email.From.Add(MailboxAddress.Parse(_config.GetSection("EmailConfiguration:From").Value));
            email.To.Add(MailboxAddress.Parse(employeeEmail));
            email.Subject = "Employee Password ";
            email.Body = new TextPart(TextFormat.Html) { Text = "This is your Password,Do Not Share It!    " + password }; 
            var smtp = new SmtpClient();
            smtp.Connect(_config.GetSection("EmailConfiguration:SmtpServer").Value, 587, SecureSocketOptions.StartTls);
            smtp.Authenticate(_config.GetSection("EmailConfiguration:Username").Value, _config.GetSection("EmailConfiguration:Password").Value);
            smtp.Send(email);
            smtp.Disconnect(true);
        }

        private string CreatePassword(int length)
        {
            const string valid = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
            StringBuilder res = new StringBuilder();
            Random rnd = new Random();
            while (0 < length--)
            {
                res.Append(valid[rnd.Next(valid.Length)]);
            }
            return res.ToString();
        }

        // DELETE: api/Employees/5
        [HttpDelete, Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteEmployee(int id)
        {
            try
            {

                var employee = await _context.Emoloyees.FindAsync(id);
                _context.Emoloyees.Remove(employee);
                _context.SaveChanges();
               
                return Ok();


            }
            catch (Exception)
            {

                throw;
            }
           
        }

        

        
    }
}
