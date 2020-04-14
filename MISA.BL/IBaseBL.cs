using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.BL
{
    public interface IBaseBL<T>
    {
        /// <summary>
        /// HÀm lấy dữ liệu khách hàng
        /// </summary>
        /// createdby : HTHIEU (20/12/2019)
        /// <returns></returns>
        List<T> GetCustomers();

        /// <summary>
        /// hàm lấy dữ liệu khách hàng theo mã khách hàng
        /// </summary>
        /// createdby : HTHIEU (20/12/2019)
        /// <param name="CustomerCode"></param>
        /// <returns></returns>
        T GetCustomersByCode(string CustomerCode);

        /// <summary>
        /// hàm thêm dữ liệu khách hàng
        /// </summary>
        /// createdby : HTHIEU (20/12/2019)
        /// <param name="customer"></param>
        /// <returns></returns>
        int InsertCustomer(T customer);

        /// <summary>
        /// hàm xóa thông tin khách hàng theo mã ID
        /// </summary>
        /// createdby : HTHIEU (20/12/2019)
        /// <param name="CustomerID"></param>
        /// <returns></returns>
        int DeleteCustomer(string CustomerID);

        /// <summary>
        /// Hàm sửa thông tin khách hàng
        /// </summary>
        /// createdby : HTHIEU (20/12/2019)
        /// <param name="customer"></param>
        /// <returns></returns>
        int UpdateCustomer(T customer);


        IEnumerable<T> Search(string CustomerName);

        
    }
}
