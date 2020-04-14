using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MISA.CukCuk.Controllers
{
    public interface IBaseController<T>

    {
        List<T> GetCustomer();
        T GetCustomerByCode(string CustomerCode);
        int AddCustomer(T customer);
        int DeleteCustomer(string id);
        int UpdateCustomer(T customer);
    }
}
