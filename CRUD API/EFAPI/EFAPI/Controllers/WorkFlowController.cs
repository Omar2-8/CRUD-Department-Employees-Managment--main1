using EFAPI.Data;
using EFAPI.Models;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MimeKit;
using MimeKit.Text;
using System.Text;

namespace EFAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class WorkFlowController : ControllerBase
    {
        private readonly CRUDDBContext _context;
        private readonly IConfiguration _config;
        public WorkFlowController(CRUDDBContext context, IConfiguration config)
        {
            _context = context;
            _config = config;
        }


        [HttpPost]
        public async Task<IActionResult> addEmployeeRequest(RequestEmployeeForm requestEmployeeForm)
        {
            try
            {
                
                var task = new Models.Task();
                task.Status = (Models.Task.status)3;
                task.Action = "Needs IT Department Director Approval";
                task.TaskEmployeeId = requestEmployeeForm.ReuqusterId;
                _context.Task.Add(task);
                _context.SaveChanges();
                requestEmployeeForm.TaskId = task.Id;

                _context.RequestEmployeeForm.Add(requestEmployeeForm);
                _context.SaveChanges();



                return Ok();
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetTasks()
        {
            try
            {//.Include(x => x.Employee.SubUnit.Department)
                IEnumerable<Models.Task> Tasks = _context.Task.Include(x => x.Employee);

                return Ok(Tasks);
            }
            catch (Exception)
            {

                throw;
            }

        }
        [HttpGet]
        public async Task<IActionResult> GetHRTasks()
        {
            try
            {//.Include(x => x.Employee.SubUnit.Department).
                IEnumerable<Models.Task> Tasks = _context.Task.Include(x => x.Employee).
                    Where(x=>x.Employee.SubUnit.Department.DepartmentName == "IT" && x.Employee.EmployeeRole== "Director");

                return Ok(Tasks);
            }
            catch (Exception)
            {

                throw;
            }

        }
        [HttpGet]
        public async Task<IActionResult> GetITTasks()
        {
            try
            {//.Include(x => x.Employee.SubUnit.Department)
                IEnumerable<Models.Task> Tasks = _context.Task.Include(x => x.Employee).
                    Where(x => x.Employee.SubUnit.Department.DepartmentName == "Finance");

                return Ok(Tasks);
            }
            catch (Exception)
            {

                throw;
            }

        }
        [HttpGet]
        public async Task<IActionResult> GetFinanceTasks()
        {
            try
            {//.Include(x => x.Employee.SubUnit.Department)
                IEnumerable<Models.Task> Tasks = _context.Task.Include(x => x.Employee).
                    Where(x => x.Employee.SubUnit.Department.DepartmentName == "HR" && x.Employee.EmployeeRole == "Manager");

                return Ok(Tasks);
            }
            catch (Exception)
            {

                throw;
            }

        }
        [HttpGet]
        public async Task<IActionResult> GetHrManagerTasks()
        {
            try
            {//.Include(x => x.Employee.SubUnit.Department)
                IEnumerable<Models.Task> Tasks = _context.Task.Include(x => x.Employee).
                    Where(x => x.Employee.SubUnit.Department.DepartmentName == "HR");

                return Ok(Tasks);
            }
            catch (Exception)
            {

                throw;
            }

        }
        [HttpGet]
        public async Task<IActionResult> GetNewTasks()
        {
            try
            {
                IEnumerable<Models.Task> Tasks = _context.Task.
                    Where(x=>x.Status == (Models.Task.status)3);

                return Ok(Tasks);
            }
            catch (Exception)
            {

                throw;
            }

        }
        [HttpGet]
        public async Task<IActionResult> getTask(int id)
        {
            try
            {
                var employeeRequest = _context.Task.Find(id);

                return Ok(employeeRequest);

            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpGet]
        public async Task<IActionResult> getEmployeeRequest(int id)
        {
            try
            {//.Include(x => x.SubUnit.Department)
                var employeeRequest = _context.RequestEmployeeForm.Include(x => x.SubUnit).First(x=>x.TaskId == id);

                return Ok(employeeRequest);

            }
            catch (Exception)
            {

                throw;
            }
        }


        [HttpPost]
        public async Task<IActionResult> createNewEmployeeRequest(RequestEmployeeForm requestEmployeeForm)
        {
            try
            {

                var task = new Models.Task();
                task.Status = (Models.Task.status)3;
                task.Action = "Needs HR To Hire New Candidate";
                task.TaskEmployeeId = requestEmployeeForm.ReuqusterId;
                _context.Task.Add(task);
                _context.SaveChanges();
                requestEmployeeForm.TaskId = task.Id;
                requestEmployeeForm.Id = 0;
                requestEmployeeForm.SubUnit.Id = 0;

                _context.RequestEmployeeForm.Add(requestEmployeeForm);
                _context.SaveChanges();



                return Ok();
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpPost]
        public async Task<IActionResult> rejectRequest(Models.Task task)
        {
            try
            {

               
                task.Status = (Models.Task.status)2;
                task.Action = "The Task is Rejected";
                 
                _context.Task.Add(task);
                _context.SaveChanges();
                


                return Ok();
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpGet]
        public async Task<IActionResult> getCreateEmployee(int id)
        {
            try
            {
                var employeeRequest = _context.CreateEmployee.Include(x => x.SubUnit).First(x => x.TaskId == id);
                return Ok(employeeRequest);

            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPost]
        public async Task<IActionResult> createEmployee(CreateEmployee createEmployee)
        {
            try
            {

                var task = new Models.Task();
                task.Status = (Models.Task.status)3;
                task.Action = "Needs HR Manager approval To Hire New Candidate";
                task.TaskEmployeeId = createEmployee.RequestEmployeeId;
                _context.Task.Add(task);
                _context.SaveChanges();
                createEmployee.TaskId = task.Id;
                createEmployee.Id = 0;
                //createEmployee.SubUnit.Id = 0;

                _context.CreateEmployee.Add(createEmployee);
                _context.SaveChanges();



                return Ok();
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpPost]
        public async Task<IActionResult> hrManagerApprove(CreateEmployee createEmployee)
        {
            try
            {

                var task = new Models.Task();
                task.Status = (Models.Task.status)3;
                task.Action = "Needs Finance approval To Hire New Candidate";
                task.TaskEmployeeId = createEmployee.RequestEmployeeId;
                _context.Task.Add(task);
                _context.SaveChanges();
                createEmployee.TaskId = task.Id;
                createEmployee.Id = 0;
                createEmployee.SubUnit.Id = 0;
                _context.CreateEmployee.Add(createEmployee);
                _context.SaveChanges();



                return Ok();
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPost]
        public async Task<IActionResult> financeApprove(CreateEmployee createEmployee)
        {
            try
            {

                var task = new Models.Task();
                task.Status = (Models.Task.status)3;
                task.Action = "Needs IT Departmeent To make a new Email for the new hire";
                task.TaskEmployeeId = createEmployee.RequestEmployeeId;
                _context.Task.Add(task);
                _context.SaveChanges();
                createEmployee.TaskId = task.Id;
                createEmployee.Id = 0;
                createEmployee.SubUnit.Id = 0;
                _context.CreateEmployee.Add(createEmployee);
                _context.SaveChanges();



                return Ok();
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpPost]
        public async Task<IActionResult> createEmail(CreateEmployee createEmployee)
        {
            try
            {
                var employee = new Employee();

                employee.EmployeeName = createEmployee.UserName;
                employee.EmployeeEmail= createEmployee.Email;
                employee.EmployeeRole = "Proggrammer";
                employee.Salary = createEmployee.Salary;
                employee.SubUnitId = createEmployee.SubUnitID;
                //employee.SubUnit.DepartmentSubUnitId = createEmployee.SubUnit.DepartmentSubUnitId;

                var manager = _context.Emoloyees.Include(x => x.SubUnit).Include(x => x.SubUnit.Department)
                    .Where(x => x.EmployeeRole == "Manager" && x.SubUnit.DepartmentSubUnitId == createEmployee.SubUnit.DepartmentSubUnitId).FirstOrDefault();

               // sendEmail(employee.EmployeeEmail, manager.EmployeeEmail);
                _context.Emoloyees.Add(employee);
                var task = new Models.Task();
                task.Status = (Models.Task.status)3;
                task.Action = "Needs IT Departmeent To make a new Email for the new hire";
                task.TaskEmployeeId = createEmployee.RequestEmployeeId;
                _context.Task.Add(task);
                _context.SaveChanges();
                createEmployee.TaskId = task.Id;
                _context.CreateEmployee.Add(createEmployee);
                _context.SaveChanges();



                return Ok();
            }
            catch (Exception)
            {

                throw;
            }
        }

        private void sendEmail(string employeeEmail,string managerEmail)
        {
             string password=CreatePassword(8);

            var email = new MimeMessage();
            email.From.Add(MailboxAddress.Parse(_config.GetSection("EmailConfiguration:From").Value));
            email.To.Add(MailboxAddress.Parse(managerEmail));
            email.Subject = "Employee Password ";
            email.Body = new TextPart(TextFormat.Html) { Text = "This is the new Employee Email \n"+ employeeEmail
                                                                    + "and this is the password \n" + password };
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

    }
}
