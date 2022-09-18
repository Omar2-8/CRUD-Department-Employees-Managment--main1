using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EFAPI.Models
{
    public class Employee
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Display(Name = "Employee Id")]
        public int ID { get; set; }

        [Required]
        public string EmployeeName { get; set; }
        
        [Required]
        [Remote("IsAlreadySignedUp", "Validation", ErrorMessage = "EmailId already exists in database.")]
        public string EmployeeEmail { get; set; }
        [Required]
        public int Salary { get; set; } 

        public string employeePhoto { get; set; }
        public string employeeCV { get; set; }

        [Required]
        [ForeignKey("Department")]
        public int DepartmentEmployeeId { get; set; }
        public Department Department { get; set; }
    }


}
