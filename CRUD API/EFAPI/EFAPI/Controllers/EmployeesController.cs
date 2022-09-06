using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EFAPI.Data;
using EFAPI.Models;
using Microsoft.AspNetCore.Authorization;
using AutoMapper;
using EFAPI.Models.DTO;

namespace EFAPI.Controllers
{
    [Route("api/[controller]/[action]")]
   // [Authorize]
    
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly CRUDDBContext _context;
        private IMapper _mapper;
        public EmployeesController(CRUDDBContext context,IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET
        [HttpGet]
        public async Task<ActionResult> GetEmoloyees()
        {
            if (_context.Emoloyees == null)
            {
                return NotFound();
            }
            try
            {
                IEnumerable<Employee> employees = _context.Emoloyees.Include(x=>x.Department);
                IEnumerable<EmployeesDTO> emplopyeeDTO = _mapper.Map<IEnumerable<EmployeesDTO>>(employees);

                List<EmployeesDTO> employeesDTOs = new List<EmployeesDTO>();
                foreach (var item in employees)
                {
                    employeesDTOs.Add(new EmployeesDTO
                    {
                        DepartmentName = item.Department.DepartmentName,
                        EmployeeID = item.ID,
                        EmpoloyeeName = item.EmployeeName,
                    });
                }

                return Ok(emplopyeeDTO);

            }
            catch (Exception)
            {

                throw;
            }

          
        
            
        }
      
      

        // GET by id
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

        // edit
       
        [HttpPost]
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

        // add
        [HttpPost]
        public async Task<ActionResult> AddEmployee(Employee employee)
        {
            
            var DublicateEmployeeEmail = (_context.Emoloyees?.Any(e => e.EmployeeEmail == employee.EmployeeEmail)).GetValueOrDefault();
            if (DublicateEmployeeEmail)
            {
                return BadRequest("Email already Exist");
            }


            try
            {
             _context.Emoloyees.Add(employee);
             await _context.SaveChangesAsync();
                return Ok();

            }
            catch (Exception)
            {

                throw;
            }
          }
        

        // DELETE: api/Employees/5
        [HttpDelete]
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

        private bool EmployeeExists(int id)
        {
            return (_context.Emoloyees?.Any(e => e.ID == id)).GetValueOrDefault();
        }

        
    }
}
