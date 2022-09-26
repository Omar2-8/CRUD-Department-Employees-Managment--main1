using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EFAPI.Models
{
    public class RequestEmployeeForm
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public int ReuqusterId { get; set; }

        public string EmployeeJob { get; set; }

        public string EmployeeExperince { get; set; }

        
        public string Comments { get; set; }

  
        [ForeignKey("SubUnit")]
        public int SubUnitRequestId { get; set; }
        public SubUnit SubUnit { get; set; }


      
        public int TaskId { get; set; }

    }
}
