﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MISA.BL;

namespace MISA.CukCuk.Controllers
{
    [Route("/[controller]")]
    [ApiController]
    [Authorize]
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
        public virtual List<Customer> GetCustomer(int PageNumber , int PageSize)
        {
            return baseBL.GetCustomers(PageNumber, PageSize);
        }

        /// <summary>
        /// Lấy ra thông tin khách hàng theo mã khách hàng
        /// createdby: HTHIEU (17/12/2019)
        /// </summary>
        /// <param name="CustomerCode">Mã khách hàng cần được lấy ra thông tin</param>
        /// <returns></returns>
        // GET:/Base/5
        [HttpGet("customerCode")]
        public virtual Customer GetCustomerByCode(string CustomerCode)
        {
            return baseBL.GetCustomersByCode(CustomerCode);
        }

        /// <summary>
        /// Lấy ra tổng số Khách hàng trong hệ thống theo từng mốc thời gian theo mã khách hàng
        /// createdby: HTHIEU (17/12/2019)
        /// </summary>
        /// <param name="rangeTime">thời gian khách hàng cần được lấy ra thông tin</param>
        /// <returns></returns>
        // GET:/Base/5
        [HttpPost("AllTime")]
        public  Customer AllTime()
        {
            int rangeTime = 1;
            return baseBL.GetCustomersRunTime(rangeTime);
        }
        /// <summary>
        /// Lấy ra tổng số Khách hàng trong hệ thống theo từng mốc thời gian theo mã khách hàng
        /// createdby: HTHIEU (17/12/2019)
        /// </summary>
        /// <param name="rangeTime">thời gian khách hàng cần được lấy ra thông tin</param>
        /// <returns></returns>
        // GET:/Base/5
        [HttpPost("OneWeek")]
        public  Customer OneWeek()
        {
            int rangeTime = 5;
            return baseBL.GetCustomersRunTime(rangeTime);
        }
        /// <summary>
        /// Lấy ra tổng số Khách hàng trong hệ thống theo từng mốc thời gian theo mã khách hàng
        /// createdby: HTHIEU (17/12/2019)
        /// </summary>
        /// <param name="rangeTime">thời gian khách hàng cần được lấy ra thông tin</param>
        /// <returns></returns>
        // GET:/Base/5
        [HttpPost("OneMonth")]
        public  Customer OneMonth()
        {
            int rangeTime = 2;
            return baseBL.GetCustomersRunTime(rangeTime);
        }

        /// <summary>
        /// Lấy ra tổng số Khách hàng trong hệ thống theo từng mốc thời gian theo mã khách hàng
        /// createdby: HTHIEU (17/12/2019)
        /// </summary>
        /// <param name="rangeTime">thời gian khách hàng cần được lấy ra thông tin</param>
        /// <returns></returns>
        // GET:/Base/5
        [HttpPost("SixMonth")]
        public  Customer SixMonth()
        {
            int rangeTime = 4;
            return baseBL.GetCustomersRunTime(rangeTime);
        }

        /// <summary>
        /// Lấy ra tổng số Khách hàng trong hệ thống theo từng mốc thời gian theo mã khách hàng
        /// createdby: HTHIEU (17/12/2019)
        /// </summary>
        /// <param name="rangeTime">thời gian khách hàng cần được lấy ra thông tin</param>
        /// <returns></returns>
        // GET:/Base/5
        [HttpPost("OneYear")]
        public Customer OneYear()
        {
            int rangeTime = 3;
            return baseBL.GetCustomersRunTime(rangeTime);
        }

        /// <summary>
        /// Lấy ra tổng số Khách hàng trong hệ thống theo từng mốc thời gian theo mã khách hàng
        /// createdby: HTHIEU (17/12/2019)
        /// </summary>
        /// <param name="rangeTime">thời gian khách hàng cần được lấy ra thông tin</param>
        /// <returns></returns>
        // GET:/Base/5
        [HttpPost("DataChartAllTime")]
        public List<DataChart>  DataChartAllTime()
        {
            int rangeTime = 1;
            return baseBL.GetDataChartRunTime(rangeTime);
        }
        /// <summary>
        /// Lấy ra tổng số Khách hàng trong hệ thống theo từng mốc thời gian theo mã khách hàng
        /// createdby: HTHIEU (17/12/2019)
        /// </summary>
        /// <param name="rangeTime">thời gian khách hàng cần được lấy ra thông tin</param>
        /// <returns></returns>
        // GET:/Base/5
        [HttpPost("DataChartOneWeek")]
        public List<DataChart> DataChartOneWeek()
        {
            int rangeTime = 5;
            return baseBL.GetDataChartRunTime(rangeTime);
        }
        /// <summary>
        /// Lấy ra tổng số Khách hàng trong hệ thống theo từng mốc thời gian theo mã khách hàng
        /// createdby: HTHIEU (17/12/2019)
        /// </summary>
        /// <param name="rangeTime">thời gian khách hàng cần được lấy ra thông tin</param>
        /// <returns></returns>
        // GET:/Base/5
        [HttpPost("DataChartOneMonth")] 
        public List<DataChart> DataChartOneMonth()
        {
            int rangeTime = 2;
            return baseBL.GetDataChartRunTime(rangeTime);
        }

        /// <summary>
        /// Lấy ra tổng số Khách hàng trong hệ thống theo từng mốc thời gian theo mã khách hàng
        /// createdby: HTHIEU (17/12/2019)
        /// </summary>
        /// <param name="rangeTime">thời gian khách hàng cần được lấy ra thông tin</param>
        /// <returns></returns>
        // GET:/Base/5
        [HttpPost("DataChartSixMonth")]
        public List<DataChart> DataChartSixMonth()
        {
            int rangeTime = 4;
            return baseBL.GetDataChartRunTime(rangeTime);
        }

        /// <summary>
        /// Lấy ra tổng số Khách hàng trong hệ thống theo từng mốc thời gian theo mã khách hàng
        /// createdby: HTHIEU (17/12/2019)
        /// </summary>
        /// <param name="rangeTime">thời gian khách hàng cần được lấy ra thông tin</param>
        /// <returns></returns>
        // GET:/Base/5
        [HttpPost("DataChartOneYear")]
        public List<DataChart> DataCharOneYear()
        {
            int rangeTime = 3;
            return baseBL.GetDataChartRunTime(rangeTime);
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

      

    }

}
