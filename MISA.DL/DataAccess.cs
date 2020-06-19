using Entities;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace MISA.DL
{
     public class DataAccess : IDisposable
    {

        /// <summary>
        /// filed dùng chung
        /// </summary>
        #region declare
        private string _sqlconnectionString = @"Data Source=.;Initial Catalog=MISA.CukCuk_Web11_HTHIEU;Integrated Security=True";
        private SqlConnection _sqlConnection;
        private SqlCommand _sqlCommand;
        #endregion

        
        /// <summary>
        /// tạo contructor cho class
        /// </summary>
        #region Contructer
        public DataAccess()
        {
            _sqlConnection = new SqlConnection(_sqlconnectionString);
            _sqlCommand = _sqlConnection.CreateCommand();
            _sqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
            _sqlConnection.Open();
        }
        #endregion



        /// <summary>
        /// Lấy danh sách khách hàng có phân trang
        /// createdby: HTHIEU (16/12/2019)
        /// </summary>
        /// <returns></returns>
        public List<T> GetCustomers<T>(int PageNumber , int PageSize, string storeName)
        {
            List<T> customers = new List<T>();
           
            _sqlCommand.CommandText = storeName;
            SqlCommandBuilder.DeriveParameters(_sqlCommand);
            var sqlParameters = _sqlCommand.Parameters;
            sqlParameters[1].Value = PageNumber;
            sqlParameters[2].Value = PageSize;
            SqlDataReader sqlDataReader = _sqlCommand.ExecuteReader();

            while (sqlDataReader.Read())
            {
                var customer = Activator.CreateInstance<T>(); /*new Customer();*/
                for (int i = 0; i < sqlDataReader.FieldCount; i++)
                {
                    var fieldName = sqlDataReader.GetName(i);
                    var fieldValue = sqlDataReader.GetValue(i);
                    var property = customer.GetType().GetProperty(fieldName);
                    if (property != null && fieldValue != DBNull.Value)
                    {
                        property.SetValue(customer, fieldValue);
                    }
                }
                customers.Add(customer);
            }
            //_sqlConnection.Close();
            return customers;

        }

        /// <summary>
        /// Tìm kiếm theo tên khách hàng
        /// createdby: HTHIEU (16/12/2019)
        /// </summary>
        /// <returns></returns>
        public IEnumerable<T> Search<T>(string CustomerName, string storeName)
        {
            List<T> customers = new List<T>();
            _sqlCommand.CommandText = storeName;
            SqlCommandBuilder.DeriveParameters(_sqlCommand);
            var sqlParameters = _sqlCommand.Parameters;
            sqlParameters[1].Value = CustomerName;
            SqlDataReader sqlDataReader = _sqlCommand.ExecuteReader();
            while (sqlDataReader.Read())
            {
                var customer = Activator.CreateInstance<T>(); /*new Customer();*/
                for (int i = 0; i < sqlDataReader.FieldCount; i++)
                {
                    var fieldName = sqlDataReader.GetName(i);
                    var fieldValue = sqlDataReader.GetValue(i);
                    var property = customer.GetType().GetProperty(fieldName);
                    if (property != null && fieldValue != DBNull.Value)
                    {
                        property.SetValue(customer, fieldValue);
                    }
                }
                customers.Add(customer);
            }
            //_sqlConnection.Close();
            return customers;
        }

        /// <summary>
        /// Hàm lấy ra thông tin khách hàng từ MÃ khách hàng
        /// createdby: HTHIEU (16/12/2019)
        /// </summary>
        /// <param name="CustomerCode">Mã khách hàng </param>
        /// <returns></returns>
        public T GetCustomersByCode<T>(string CustomerCode, string storeName)
        {
            T customer =  Activator.CreateInstance<T>();
            _sqlCommand.CommandText = storeName;
            SqlCommandBuilder.DeriveParameters(_sqlCommand);
            var sqlParameters = _sqlCommand.Parameters;
            sqlParameters[1].Value = CustomerCode;
            SqlDataReader sqlDataReader = _sqlCommand.ExecuteReader();
            while (sqlDataReader.Read())
            {

                for (int i = 0; i < sqlDataReader.FieldCount; i++)
                {
                    var fieldName = sqlDataReader.GetName(i);
                    var fieldValue = sqlDataReader.GetValue(i);
                    var property = customer.GetType().GetProperty(fieldName);
                    if (property != null && fieldValue != DBNull.Value)
                    {
                        property.SetValue(customer, fieldValue);
                    }
                }
            }
            return customer;
        }

        /// <summary>
        /// Hàm lấy ra thông tin tổng số khách hàng trong hệ thống
        /// createdby: HTHIEU (16/12/2019)
        /// </summary>
        /// <param name="rangeTime">khoảng thời gian</param>
        /// <returns></returns >
        public T GetCustomersRunTime<T>(int rangeTime, string storeName)
        {
            T customer = Activator.CreateInstance<T>();
            _sqlCommand.CommandText = storeName;
            SqlCommandBuilder.DeriveParameters(_sqlCommand);
            var sqlParameters = _sqlCommand.Parameters;
            sqlParameters[1].Value = rangeTime;
            SqlDataReader sqlDataReader = _sqlCommand.ExecuteReader();
            while (sqlDataReader.Read())
            {

                for (int i = 0; i < sqlDataReader.FieldCount; i++)
                {
                    var fieldName = sqlDataReader.GetName(i);
                    var fieldValue = sqlDataReader.GetValue(i);
                    var property = customer.GetType().GetProperty(fieldName);
                    if (property != null && fieldValue != DBNull.Value)
                    {
                        property.SetValue(customer, fieldValue);
                    }
                }
               
            }
            return customer;
        }

        /// <summary>
        /// Hàm lấy ra thông tin khách hàng cho biểu đồ chart
        /// createdby: HTHIEU (16/12/2019)
        /// </summary>
        /// <param name="rangeTime">Khoảng thời gian</param>
        /// <returns></returns >
        public List<DataChart> GetDataChartRunTime(int rangeTime, string storeName)
        {

            List<DataChart> dataCharts = new List<DataChart>();
            _sqlCommand.CommandText = storeName;
            SqlCommandBuilder.DeriveParameters(_sqlCommand);
            var sqlParameters = _sqlCommand.Parameters;
            sqlParameters[1].Value = rangeTime;
            SqlDataReader sqlDataReader = _sqlCommand.ExecuteReader();
            while (sqlDataReader.Read())
            {
                DataChart customer = new DataChart();
                
                for (int i = 0; i < sqlDataReader.FieldCount; i++)
                {
                    var fieldName = sqlDataReader.GetName(i);
                    var fieldValue = sqlDataReader.GetValue(i);
                    var property = customer.GetType().GetProperty(fieldName);
                    if (property != null && fieldValue != DBNull.Value)
                    {
                        property.SetValue(customer, fieldValue);
                    }
                }
                dataCharts.Add(customer);
            }
            return dataCharts;
        }

        /// <summary>
        /// Hàm thêm mới khách hàng vào DB
        /// createdby: HTHIEU (16/12/2019)
        /// </summary>
        /// <param name="customer"></param>
        /// <returns></returns>

        public int InsertCustomer<T>(T customer , string storeName)
        {

            _sqlCommand.CommandText = storeName;
            SqlCommandBuilder.DeriveParameters(_sqlCommand);
            var sqlParameters = _sqlCommand.Parameters;
            foreach (SqlParameter param in sqlParameters)
            {
                var paraName = param.ParameterName;
                // Lấy giá trị của property tương ứng có tên giống tên của tham số trong store 

                var propertyInfo = customer.GetType().GetProperty(paraName.Replace("@", string.Empty));

                if (propertyInfo != null)
                {
                    // gán giá trị lấy vào cho tham số
                    var propertyValue = propertyInfo.GetValue(customer);
                    param.Value = propertyValue != null ? propertyValue : string.Empty;
                }

            }
            var result = _sqlCommand.ExecuteNonQuery();
            _sqlConnection.Close();
            return result;
        }

        /// <summary>
        /// Hàm xóa thông tin khách hàng theo mã ID 
        /// createdby: HTHIEU (16/12/2019)
        /// </summary>
        /// <param name="customerID"></param>
        /// <returns></returns>
        public int DeleteCustomer(string customerID , string storeName)
        {
            _sqlCommand.CommandText = storeName;
            SqlCommandBuilder.DeriveParameters(_sqlCommand);
            var sqlParameters = _sqlCommand.Parameters;
            sqlParameters[1].Value = Guid.Parse(customerID);
            var result = _sqlCommand.ExecuteNonQuery();
            //_sqlConnection.Close();
            return result;
        }

        /// <summary>
        /// Hàm thực hiện sửa thông tin khách hàng theo ID
        /// createdby: HTHIEU (16/12/2019)
        /// </summary>
        /// <param name="customer"></param>
        /// <returns></returns>
        public int UpdateCustomer<T>(T customer ,string storeName)
        {
            _sqlCommand.CommandText =storeName;
            SqlCommandBuilder.DeriveParameters(_sqlCommand);
            var sqlParameters = _sqlCommand.Parameters;
            foreach (SqlParameter param in sqlParameters)
            {
                var paraName = param.ParameterName;
                // Lấy giá trị của property tương ứng có tên giống tên của tham số trong store 
                var propertyInfo = customer.GetType().GetProperty(paraName.Replace("@", string.Empty));
                if (propertyInfo != null)
                {

                    // gán giá trị lấy vào cho tham số
                    var propertyValue = propertyInfo.GetValue(customer);
                    param.Value = propertyValue != null ? propertyValue : string.Empty;
                }
            }
            var result = _sqlCommand.ExecuteNonQuery();
            //_sqlConnection.Close();
            return result;
        }


        /// <summary>
        /// khởi đăng nhập login cho admin
        /// createdby HTHIEU(18/12/2019)
        /// </summary>
        public int LoginAdmin<T>(string UserName, string PassWord,string storeName)
        {
            _sqlCommand.CommandText = storeName;
            SqlCommandBuilder.DeriveParameters(_sqlCommand);
            var sqlParameters = _sqlCommand.Parameters;
            sqlParameters[1].Value = UserName;
            sqlParameters[2].Value = PassWord;
            var result = _sqlCommand.ExecuteScalar();
            //_sqlConnection.Close();
            return Convert.ToInt32(result);
        }

        /// <summary>
        /// khởi tạo hàm Dispose sử dụng để đóng kết nối Dbconnection
        /// createdby HTHIEU(18/12/2019)
        /// </summary>
        public void Dispose()
        {
            _sqlConnection.Close();
        }
    }
}
