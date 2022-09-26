using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EFAPI.Models
{
    public class Task
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }


        [Required]
        public string Action { get; set; }
     
        public string Comments { get; set; }
        [Required]
        public status Status { get; set; }

        [Required]
        [ForeignKey("Employee")]
        public int TaskEmployeeId { get; set; }
        public Employee Employee { get; set; }
   public enum status
    {
        Under_Approvel,
        Approve,
        Reject,
        New,
        Pending,
        Compleated
    } 
    
    }
    
}
