using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EFAPI.Migrations
{
    public partial class addingForms : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "EmployeeRole",
                table: "Emoloyees",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateTable(
                name: "CreateEmployee",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RequestEmployeeId = table.Column<int>(type: "int", nullable: false),
                    Salary = table.Column<int>(type: "int", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    InsuranceNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    JoiningDay = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DepartmentID = table.Column<int>(type: "int", nullable: true),
                    SubUnitId = table.Column<int>(type: "int", nullable: true),
                    ManagerID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CreateEmployee", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CreateEmployee_Departments_DepartmentID",
                        column: x => x.DepartmentID,
                        principalTable: "Departments",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_CreateEmployee_Emoloyees_ManagerID",
                        column: x => x.ManagerID,
                        principalTable: "Emoloyees",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_CreateEmployee_SubUnit_SubUnitId",
                        column: x => x.SubUnitId,
                        principalTable: "SubUnit",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_CreateEmployee_DepartmentID",
                table: "CreateEmployee",
                column: "DepartmentID");

            migrationBuilder.CreateIndex(
                name: "IX_CreateEmployee_ManagerID",
                table: "CreateEmployee",
                column: "ManagerID");

            migrationBuilder.CreateIndex(
                name: "IX_CreateEmployee_SubUnitId",
                table: "CreateEmployee",
                column: "SubUnitId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CreateEmployee");

            migrationBuilder.DropColumn(
                name: "EmployeeRole",
                table: "Emoloyees");
        }
    }
}
