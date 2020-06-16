using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MISA.CukCuk.Controllers
{
    public interface IUserService
    {
        string Authenticate(Admin admin);

    }
}
