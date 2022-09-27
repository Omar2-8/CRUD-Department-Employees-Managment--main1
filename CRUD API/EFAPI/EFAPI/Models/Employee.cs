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
        public string EmployeeRole { get; set; }
        [Required]
        [Remote("IsAlreadySignedUp", "Validation", ErrorMessage = "EmailId already exists in database.")]
        public string EmployeeEmail { get; set; }
        [Required]
        public int Salary { get; set; }
        public string EmployeePhoto { get; set; }
        public string EmployeeCV { get; set; }
        [ForeignKey("SubUnit")]
        public int? SubUnitId { get; set; }
        public SubUnit SubUnit { get; set; }
       
    }
}
