using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EFAPI.Models
{
    public class CreateEmployee
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public int RequestEmployeeId { get; set; }
        public int Salary { get; set; }

        public string Email { get; set; }

        public string UserName { get; set; }
        public string InsuranceNumber { get; set; }


        public DateTime JoiningDay { get; set; }



        [ForeignKey("Department")]
        public int DepartmeentID { get; set; }
   
        public Department Department { get; set; }

        [ForeignKey("SubUnit")]
        public int SubUnitID { get; set; }
        
        public SubUnit SubUnit { get; set; }

        [NotMapped]
        [ForeignKey("Employee")]
        public Employee Manager { get; set; }

        
        public int TaskId { get; set; }
    }
}
