using EFAPI.Data;
using EFAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace EFAPI.Controllers
{
    [Route("api/[controller]")]
  
    [ApiController]
    public class DashBoardController : ControllerBase
    {
        private readonly CRUDDBContext _context;
       // private readonly UserManager<>
        public DashBoardController(CRUDDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult DashboardData()
        {
            try
            {
                IEnumerable<Department> departments = _context.Departments;

                List<DashboardDTO> dashboardDTOs = new List<DashboardDTO>();
                foreach(var department in departments)
                {
                    dashboardDTOs.Add(new DashboardDTO
                    {
                        DepartmentName = department.DepartmentName,
                        EmployeeCount = _context.Emoloyees.Where(x => x.DepartmentEmployeeId == department.ID).Count()
                    });
                }

                return Ok(dashboardDTOs);
            }
            catch (Exception)
            {

                throw;
            }
        }

    }

    public class DashboardDTO
    {
        public String DepartmentName { get; set; }
        public int EmployeeCount { get; set; }
    }
}
