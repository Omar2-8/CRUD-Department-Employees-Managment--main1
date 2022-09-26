using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EFAPI.Migrations
{
    public partial class addingTaskId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TaskId",
                table: "RequestEmployeeForm",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TaskId",
                table: "CreateEmployee",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TaskId",
                table: "RequestEmployeeForm");

            migrationBuilder.DropColumn(
                name: "TaskId",
                table: "CreateEmployee");
        }
    }
}
