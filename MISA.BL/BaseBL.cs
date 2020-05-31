using Entities;
using MISA.DL;
using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.BL
{
    public class BaseBL<T> :IBaseBL<T>
    {
        /// <summary>
        /// Khởi tạo pro dùng chung
        /// </summary>
        BaseDL<T> customerDL = new BaseDL<T>();

        /// <summary>
        /// Hàm lấy dữ liệu khách hàng
        /// createdby : HTHIEU (17/12/2019)
        /// </summary>
        /// <returns></returns>
        public List<T> GetCustomers()
        {
            return customerDL.GetCustomers();
        }

        /// <summary>
        /// Lấy ra thông tin khách hàng từ mã khách hàng
        /// createdby : HTHIEU(17/12/2019)
        /// </summary>
        /// <param name="CustomerCode"></param>
        /// <returns></returns>
        public T GetCustomersByCode(string CustomerCode)
        {
            return customerDL.GetCustomersByCode(CustomerCode);
        }

        /// <summary>
        /// Lấy ra thông tin khách hàng từ mã khách hàng
        /// createdby : HTHIEU(17/12/2019)
        /// </summary>
        /// <param name="CustomerCode"></param>
        /// <returns></returns>
        public T GetCustomersRunTime(int rangeTime)
        {
            return customerDL.GetCustomersRunTime(rangeTime);
        }

        /// <summary>
        /// Hàm thực hiện thêm dữ liệu khách hàng
        /// createdby : HTHIEU (17/12/2019)
        /// </summary>
        /// <param name="customer"></param>
        /// <returns></returns>
        public int InsertCustomer(T customer )
        {
            return customerDL.InsertCustomer(customer);
        }

        /// <summary>
        /// Hàm thực hiện xóa dữ liệu thông tin khách hàng theo mã ID
        /// createdby : HTHIEU (17/12/2019)
        /// </summary>
        /// <param name="CustomerID">Mã ID khách hàng</param>
        /// <returns></returns>
        public int DeleteCustomer(string CustomerID)
        {

            return customerDL.DeleteCustomer(CustomerID);
        }

        /// <summary>
        /// Hàm thực hiện update lại thông tin khách hàng 
        /// </summary>
        /// <param name="customer">Đối tượng khách hàng đã chỉnh sửa</param>
        /// <returns></returns>
        public int UpdateCustomer(T customer)
        {
            return customerDL.UpdateCustomer(customer);
        }

        public IEnumerable<T> Search(string CustomerName)
        {
            return customerDL.Search(CustomerName);
        }

       
     
    }
}
