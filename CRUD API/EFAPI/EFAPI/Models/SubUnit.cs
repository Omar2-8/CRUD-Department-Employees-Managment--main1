using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EFAPI.Models
{
    public class SubUnit
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [ForeignKey("Department")]
        public int? DepartmentSubUnitId { get; set; }
        public Department Department { get; set; }
        public string SubUintName { get; set; }
        public ICollection<Employee> Employees { get; set; }
    }

}
