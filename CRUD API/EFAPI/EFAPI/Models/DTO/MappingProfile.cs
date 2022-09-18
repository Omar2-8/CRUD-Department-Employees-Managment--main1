using AutoMapper;

namespace EFAPI.Models.DTO
{
    public class MappingProfile:Profile 
    {
        public MappingProfile()
        {
            CreateMap<Employee, EmployeesDTO>()
                .ForMember(dest => dest.DepartmentName, src => src.MapFrom(opt => opt.Department.DepartmentName))
                .ForMember(dest => dest.EmployeeID, src => src.MapFrom(opt => opt.ID))
                .ForMember(dest => dest.EmployeeName, src => src.MapFrom(opt => opt.EmployeeName))
                .ForMember(dest => dest.EmployeeEmail, src => src.MapFrom(opt => opt.EmployeeEmail))
                .ForMember(dest => dest.EmployeeSalary, src => src.MapFrom(opt => opt.Salary))
                .ForMember(dest => dest.DepartmentID, src => src.MapFrom(opt => opt.DepartmentEmployeeId))
                .ReverseMap();
        }

    }
}
