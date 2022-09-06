using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EFAPI.Migrations
{
    public partial class initMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Departments",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DepartmentName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Departments", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Emoloyees",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EmployeeName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EmployeeEmail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Salary = table.Column<int>(type: "int", nullable: false),
                    DepartmentEmployeeId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Emoloyees", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Emoloyees_Departments_DepartmentEmployeeId",
                        column: x => x.DepartmentEmployeeId,
                        principalTable: "Departments",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Emoloyees_DepartmentEmployeeId",
                table: "Emoloyees",
                column: "DepartmentEmployeeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Emoloyees");

            migrationBuilder.DropTable(
                name: "Departments");
        }
    }
}
