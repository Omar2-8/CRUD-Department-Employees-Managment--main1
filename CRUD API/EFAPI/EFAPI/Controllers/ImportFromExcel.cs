using EFAPI.Data;
using EFAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;
using IHostingEnvironment = Microsoft.AspNetCore.Hosting.IHostingEnvironment;

namespace EFAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImportFromExce : ControllerBase
    {

        private IHostingEnvironment _hostingEnvironment;
        private readonly CRUDDBContext _context;
        public ImportFromExce(IHostingEnvironment hostingEnvironment, CRUDDBContext context)
        {
            _hostingEnvironment = hostingEnvironment;
            _context = context;
        }

        [HttpPost, Authorize(Roles = "Admin")]

        public async Task<IActionResult> ImportFromExcel( IFormFile file)
        {
            try
            {
                
                string folderName = "Upload";
                string newPath = Path.Combine(Guid.NewGuid().ToString() + '_' + folderName);
                if (!Directory.Exists(newPath))
                {
                    Directory.CreateDirectory(newPath);

                }
                string webRootPath = _hostingEnvironment.WebRootPath;
                string filePath = Path.Combine(webRootPath, file.FileName);

                ISheet sheet;


                
                var list = new List<Employee>();
                
                List<Department> departments = _context.Departments.ToList();
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    file.CopyTo(stream);
                    stream.Position = 0;

                    XSSFWorkbook hssfwb = new XSSFWorkbook(stream);
                    sheet = hssfwb.GetSheetAt(0);

                    IRow headerRow = sheet.GetRow(0);
                    int cellCount = headerRow.LastCellNum;

                    for (int i = (sheet.FirstRowNum + 1); i <= sheet.LastRowNum; i++) 
                    {
                        var obj = new Employee();
                        IRow row = sheet.GetRow(i);

                        obj.EmployeeName = row.GetCell(0).ToString();
                        obj.EmployeeEmail = row.GetCell(1).ToString();
                        obj.Salary = int.Parse(row.GetCell(2).ToString()); 
                        //obj.DepartmentEmployeeId = departments.First(item => item.DepartmentName == row.GetCell(3).ToString()).ID;
                        list.Add(obj);
                    }


                    _context.AddRange(list);
                    _context.SaveChanges();
                }



                    return Ok(list);
            }
            catch (Exception)
            {

                throw;
            }

        }
    }
}
