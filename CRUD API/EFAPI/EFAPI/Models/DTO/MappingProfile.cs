using AutoMapper;

namespace EFAPI.Models.DTO
{
    public class MappingProfile:Profile 
    {
        public MappingProfile()
        {
            CreateMap< Employee,EmployeesDTO > ()
                .ForMember(dest => dest.DepartmentName,src => src.MapFrom(opt =>opt.Department.DepartmentName))
                .ForMember(dest => dest.EmployeeID,src => src.MapFrom(opt =>opt.ID))
                .ForMember(dest => dest.EmpoloyeeName,src => src.MapFrom(opt =>opt.EmployeeName))
                .ReverseMap();
        }

    }
}
