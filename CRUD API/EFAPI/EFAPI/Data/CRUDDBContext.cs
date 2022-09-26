using EFAPI.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace EFAPI.Data
{
    public class CRUDDBContext : IdentityDbContext
    {
        public CRUDDBContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Employee> Emoloyees { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<SubUnit> SubUnit { get; set; }

        public DbSet<Models.Task> Task { get; set; }
        public DbSet<RequestEmployeeForm> RequestEmployeeForm { get; set; }
        public DbSet<CreateEmployee> CreateEmployee { get; set; }





    }
}
