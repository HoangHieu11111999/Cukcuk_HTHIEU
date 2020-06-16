using Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.DL
{
     public class BaseDL<T> : IBaseDL<T>
    {
        T entity;
        string name;
        /// <summary>
        /// Taoj contructor khởi tạo tên proc dùng chung
        /// </summary>
        public BaseDL()
        {
             entity = Activator.CreateInstance<T>();
             name = entity.GetType().Name;
        }

        /// <summary>
        /// Hàm lấy dữ liệu
        /// </summary>
        /// createdby : HTHIEU (20/12/2019)
        /// <returns></returns>
        public List<T> GetCustomers(int PageNumber,int PageSize)
        {
            using (DataAccess dataAccess = new DataAccess())
            {
                
                return dataAccess.GetCustomers<T>(PageNumber, PageSize, string.Format("[dbo].[Proc_GetPagani{0}]",name));
            }

        }

        /// <summary>
        /// Hàm lấy dữ liệu theo mã khách hàng
        /// </summary>
        /// createdby : HTHIEU (20/12/2019)
        /// <param name="CustomerCode">MÃ Khách Hàng</param>
        /// <returns></returns>
        public T GetCustomersByCode(string CustomerCode)
        {
            using ( DataAccess dataAccess = new DataAccess())
            {
                return dataAccess.GetCustomersByCode<T>(CustomerCode, string.Format("[dbo].[Proc_Get{0}ByCode]",name));
            }
        }
        /// <summary>
        /// Hàm lấy dữ liệu tổng số khách hàng theo mốc thời gian
        /// </summary>
        /// createdby : HTHIEU (20/12/2019)
        /// <param name="rangeTime">Mốc thời gian tương đương  : </param>
        /// <returns></returns>
        public T GetCustomersRunTime(int rangeTime)
        {
            using (DataAccess dataAccess = new DataAccess())
            {
                return dataAccess.GetCustomersRunTime<T>(rangeTime, "[dbo].[Proc_GetUserRunTime]");
            }
        }

        /// <summary>
        /// Hàm lấy dữ liệu theo mã khách hàng
        /// </summary>
        /// createdby : HTHIEU (31/05/2020)
        /// <param name="rangeTime">Mốc thời gian tương đương  : </param>
        /// <returns></returns>
        public List<DataChart> GetDataChartRunTime(int rangeTime)
        {
            using (DataAccess dataAccess = new DataAccess())
            {
                return dataAccess.GetDataChartRunTime(rangeTime, "[dbo].[Proc_GetDataChartRunTime]");
            }
        }

        public IEnumerable<T> Search(string CustomerName)
        {
            using (DataAccess dataAccess = new DataAccess())
            {
                return dataAccess.Search<T>(CustomerName, string.Format("[dbo].[Proc_Search{0}Name]", name));
            }
        }
        /// <summary>
        /// Hàm thêm dữ liệu khách hàng
        /// </summary>
        /// createdby : HTHIEU (20/12/2019)
        /// <param name="customer">Đối tượng thêm</param>
        /// <returns></returns>
        public int InsertCustomer(T customer)
        {
            using (DataAccess dataAccess = new DataAccess())
            {
               
                return dataAccess.InsertCustomer<T>(customer, string.Format("[dbo].[Proc_Insert{0}]",name));
            }
        }

        /// <summary>
        /// hàm xóa dữ liệu khách hàng theo mã ID
        /// </summary>
        /// createdby : HTHIEU (20/12/2019)
        /// <param name="CustomerID">MÃ ID khách hàng cần xóa</param>
        /// <returns></returns>
        public int DeleteCustomer(string CustomerID)
        {
            using (DataAccess dataAccess = new DataAccess())
            {
                return dataAccess.DeleteCustomer(CustomerID, string.Format("[dbo].[Proc_Delete{0}]",name));
            }
        }

        /// <summary>
        /// Hàm sửa thông tin khách hàng
        /// </summary>
        /// createdby : HTHIEU (20/12/2019)
        /// <param name="customer">đối tượng cần sửa</param>
        /// <returns></returns>
        public int UpdateCustomer(T customer)
        {
            using (DataAccess dataAccess = new DataAccess())
            {
                return dataAccess.UpdateCustomer<T>(customer, string.Format("[dbo].[Proc_Update{0}]",name));
            }
        }


        /// <summary>
        /// Hàm đăng nhập 
        /// </summary>
        /// createdby : HTHIEU (20/12/2019)
        /// <param name="customer">đối tượng cần sửa</param>
        /// <returns></returns>
        public int  LoginAdmin(T admin)
        {
            using (DataAccess dataAccess = new DataAccess())
            {
                return dataAccess.LoginAdmin<T>(admin,string.Format("[dbo].[Proc_Login{0}]", name));
            }
        }

    }
}
