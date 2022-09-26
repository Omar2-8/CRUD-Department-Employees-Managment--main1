using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EFAPI.Migrations
{
    public partial class addingRequestForm : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "RequestEmployeeForm",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ReuqusterId = table.Column<int>(type: "int", nullable: false),
                    EmployeeJob = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EmployeeExperince = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Comments = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SubUnitRequestId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RequestEmployeeForm", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RequestEmployeeForm_SubUnit_SubUnitRequestId",
                        column: x => x.SubUnitRequestId,
                        principalTable: "SubUnit",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_RequestEmployeeForm_SubUnitRequestId",
                table: "RequestEmployeeForm",
                column: "SubUnitRequestId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RequestEmployeeForm");
        }
    }
}
