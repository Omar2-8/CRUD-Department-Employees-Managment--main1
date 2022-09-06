using EFAPI.Data;
using EFAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MimeKit;
using NPOI.HSSF.Util;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;
using NPOI.XWPF.UserModel;
using System.Collections.Generic;
using System.IO;
using IHostingEnvironment = Microsoft.AspNetCore.Hosting.IHostingEnvironment;

namespace EFAPI.Controllers
{
    [Route("api/[controller]")]
    
    [ApiController]
    public class ExportToExcel : ControllerBase
    {
        private IHostingEnvironment _hostingEnvironment;
        private readonly CRUDDBContext _context;
        public ExportToExcel(IHostingEnvironment hostingEnvironment, CRUDDBContext context)
        {
            _hostingEnvironment = hostingEnvironment;
            _context = context; 
        }
        [HttpGet]   
        public async Task<IActionResult> ExporttoExcel()
        {

            try
            {
                List<Employee> employee = _context.Emoloyees.Include(dep => dep.Department).ToList();
                

                

                string webRootPath = _hostingEnvironment.WebRootPath;
                string fileName = "Employee data.xlsx";
                string filePath = Path.Combine(webRootPath, fileName);
                FileInfo file = new FileInfo(filePath);
                var memoryStream = new MemoryStream();
                int count = 1;
                
                using (var fs = new FileStream(filePath, FileMode.Create, FileAccess.Write))
                {
                    IWorkbook workbook = new XSSFWorkbook();
                    ISheet excelSheet = workbook.CreateSheet("EmployeesData");
                    ICellStyle style = workbook.CreateCellStyle();
                    style.WrapText = true;
                    style.Alignment = HorizontalAlignment.Center;
                    style.FillBackgroundColor= HSSFColor.LightGreen.Index;

                    style.BorderBottom = BorderStyle.Double;
                    
                     style.BottomBorderColor = HSSFColor.Yellow.Index;
                           
                      IFont font = workbook.CreateFont();                  
                     font.Color = HSSFColor.Red.Index;                    
                     font.FontName = "Arial";                    
                     font.FontHeight = 13;               
                     font.IsItalic = true;  
                     style.SetFont(font);
                    
                    IRow row = excelSheet.CreateRow(0);
                    row.CreateCell(0).SetCellValue("Name");
                    row.CreateCell(1).SetCellValue("Email");
                    row.CreateCell(2).SetCellValue("Salary");
                    row.CreateCell(3).SetCellValue("Department");
                    

                    excelSheet.SetColumnWidth(0, 15 * 256);
                    excelSheet.SetColumnWidth(1, 35 * 256);
                    excelSheet.SetColumnWidth(2, 15 * 256);
                    excelSheet.SetColumnWidth(3, 10 * 256);

                    foreach (var emp in employee)
                    {

                        IRow row1 = excelSheet.CreateRow(count);
                        row1.CreateCell(0).SetCellValue(emp.EmployeeName);
                        row1.CreateCell(1).SetCellValue(emp.EmployeeEmail);
                        row1.CreateCell(2).SetCellValue(emp.Salary);
                        row1.CreateCell(3).SetCellValue(emp.Department.DepartmentName);
                        row1.GetCell(0).CellStyle = style;
                        row1.GetCell(1).CellStyle = style;
                        row1.GetCell(2).CellStyle = style;
                        row1.GetCell(3).CellStyle = style;

                        count++;

                    }
                                 
            


                    workbook.Write(fs);
                }
                using (var fileStream = new FileStream(filePath, FileMode.Open))
                {
                    await fileStream.CopyToAsync(memoryStream);
                }

                memoryStream.Position = 0;
                return File(memoryStream, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", fileName);
            }
            catch (Exception)
            {

                throw;
            }

        }
        public static byte[] ReadFully(Stream input)
                {
                    using (MemoryStream ms = new MemoryStream())
                    {
                        input.CopyTo(ms);
                        return ms.ToArray();
                    }
                }

    }
}
