using System;
using System.Collections.Generic;
using System.Text;

namespace Entities
{
    ///summary
    /// tạo các trường thông tin của khách hàng
    ///summary
    public class Customer
    {

        
        /// <summary>
        /// mã ID khách hàng
        /// </summary>
        public Guid CustomerID { get; set; }

        /// <summary>
        /// MÃ khách hàng
        /// </summary>
        public string CustomerCode { get; set; }

        /// <summary>
        /// Tên khách hàng
        /// </summary>
        public string CustomerName { get; set; }

        /// <summary>
        /// Ngày sinh
        /// </summary>
        public DateTime Birthday { get; set; }

        /// <summary>
        /// Tên công ty
        /// </summary>
        public string CompanyName { get; set; }

        /// <summary>
        /// MÃ số thuế
        /// </summary>
        public string CompanyTaxCode { get; set; }

        /// <summary>
        /// Địa chỉ
        /// </summary>
        public string Address { get; set; }

        /// <summary>
        /// Số điện thoại
        /// </summary>
        public string Tel { get; set; }

        /// <summary>
        /// Email
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// Số tiền nợ
        /// </summary>
        public int Amount { get; set; }

        /// <summary>
        /// Ghi chú
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// Thành viên  Is5FoodMember
        /// </summary>
        public int Is5FoodMember { get; set; }

        /// <summary>
        /// có đang theo dõi hay k
        /// </summary>
        public int IsGenerate { get; set; }

        /// <summary>
        /// Người tạo
        /// </summary>
        public string CreatedBy { get;  set; }
        
        /// <summary>
        /// mã nhóm khách hàng
        /// </summary>
        public Guid? GroupCustomerID { get; set; }

        /// <summary>
        /// ngày sửa
        /// </summary>
        public DateTime? ModifiedDate { get; set; }

        /// <summary>
        /// Người sửa
        /// </summary>
        public string ModifiedBy { get; set; }

        public int Toltal { get; set; }
        /// <summary>
        /// ngày sửa
        /// </summary>
        public DateTime? CreatedDate { get; set; }

        public int totalrow { get; set; }
    }
}
