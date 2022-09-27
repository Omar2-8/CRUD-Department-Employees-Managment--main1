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

namespace EFAPI.Controllers
{
    [Route("api/[controller]/[action]")]
   // [Authorize]
    
    [ApiController]
    public class DepartmentsController : ControllerBase
    {
        private readonly CRUDDBContext _context;

        public DepartmentsController(CRUDDBContext context)
        {
            _context = context;
        }

        //get list

        [HttpGet, Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetDepartmentList()
        {
            if (_context.Departments == null)
            {
                return NotFound();
            }

            try
            {
                IEnumerable<Department> departments = _context.Departments;

                return Ok(departments);

            }
            catch (Exception e)
            {

                throw;
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetDepartmen(Models.Task t)
        {
            if (_context.Departments == null)
            {
                return NotFound();
            }

            try
            {
                IEnumerable<Department> departments = _context.Departments;

                return Ok(departments);

            }
            catch (Exception e)
            {

                throw;
            }
        }
        //get by id 
        [HttpGet, Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetDepartmentById(int id)
        {
            try
            {
                var department = _context.Departments.Find(id);

                return Ok(department);
            }
            catch (Exception)
            {

                throw;
            }

        }

        //add , Authorize(Roles = "Admin")
        [HttpPost]
        public async Task<IActionResult> AddDepartment(Department department)
        {
            try
            {
                _context.Departments.Add(department);
                _context.SaveChanges();
                return Ok();
            }
            catch(Exception e)
            {
                throw;
            }

        }


        // delete
        [HttpDelete, Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteDepartment(int id)
        {
            try
            {
                var department = _context.Departments.Find(id); 
                _context.Departments.Remove(department);
                _context.SaveChanges();

                return Ok();
          
            }
            catch (Exception e)
            {

                throw;
            }
        }



        //edit
        [HttpPost, Authorize(Roles = "Admin")]
        public async Task<IActionResult> UpdateDepartment(int id,Department department)
        {
            try
            {
                // var _context.Departments.Find(id);
 
                _context.Entry(department).State = EntityState.Modified;
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
