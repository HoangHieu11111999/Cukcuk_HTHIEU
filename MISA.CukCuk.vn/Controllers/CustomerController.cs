using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MISA.BL;

namespace MISA.CukCuk.Controllers
{
    [Route("/[controller]")]
    [ApiController]
    public class CustomerController
    {
        /// <summary>
        /// prop dùng chung trong class CustomerController
        /// createdby: HTHIEU (17/12/2019)
        /// </summary>
        BaseBL<Customer> baseBL = new BaseBL<Customer>();

        /// <summary>
        /// Lấy ra thông tin của toàn bộ khách hàng trong DB
        /// createdby: HTHIEU (17/12/2019)
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public virtual List<Customer> GetCustomer()
        {
            return baseBL.GetCustomers();
        }

        /// <summary>
        /// Lấy ra thông tin khách hàng theo mã khách hàng
        /// createdby: HTHIEU (17/12/2019)
        /// </summary>
        /// <param name="CustomerCode">Mã khách hàng cần được lấy ra thông tin</param>
        /// <returns></returns>
        // GET:/Base/5
        [HttpGet("{customerCode}")]
        public virtual Customer GetCustomerByCode(string CustomerCode)
        {
            return baseBL.GetCustomersByCode(CustomerCode);
        }

        /// <summary>
        /// Lấy ra thông tin khách hàng theo mã khách hàng
        /// createdby: HTHIEU (17/12/2019)
        /// </summary>
        /// <param name="rangeTime">thời gian khách hàng cần được lấy ra thông tin</param>
        /// <returns></returns>
        // GET:/Base/5
        [HttpGet("{customerRunTime}")]
        public virtual Customer GetCustomerRunTime(string rangeTime)
        {
            return baseBL.GetCustomersRunTime(rangeTime);
        }

        // POST: /Base
        /// <summary>
        /// Hàm thực hiện thêm mới khách hàng
        /// createdby: HTHIEU (17/12/2019)
        /// </summary>
        /// <param name="customer">Đối tượng khách hàng cần thêm mới</param>
        /// <returns></returns>
        [HttpPost]
        public virtual int AddCustomer(Customer customer)
        {
            return baseBL.InsertCustomer(customer);

        }

        [HttpPost("SearchCustomerName/{CustomerName}")]
        public virtual IEnumerable<Customer> Search(string CustomerName)
        {

            return baseBL.Search(CustomerName);

        }

        /// <summary>
        /// Hàm xóa thông tin 1 khách hàng 
        /// createdby: HTHIEU (17/12/2019)
        /// </summary>
        /// <param name="id">Đối tượng khách hàng cần xóa</param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public virtual int DeleteCustomer(string id)
        {
            return baseBL.DeleteCustomer(id);

        }

        /// <summary>
        /// hàm sửa dữ liệu khách hàng
        /// createdby: HTHIEU (17/12/2019)
        /// </summary>
        /// <param name="customer"> đối tượng khách hàng cần chỉnh sửa</param>
        /// <returns></returns>
        [HttpPut]
        public virtual int UpdateCustomer(Customer customer)
        {
            return baseBL.UpdateCustomer(customer);

        }

        AdminBL adminBL = new AdminBL();

        [HttpPost("loginAdmin")]
        public int LoginAdmin(Admin admin)
        {

            return adminBL.LoginAdmin(admin);
        }

    }

}
