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
        [Required]
        public string Comments { get; set; }
        [Required]
        public Status Status { get; set; }

        [Required]
        [ForeignKey("Department")]
        public int TaskEmployeeId { get; set; }
        public Employee Employee { get; set; }
    }
    public enum Status
    { 
        Under_Approvel,
        Approve,
        Reject,
        New,
        Pending,
        Compleated
    }
}
