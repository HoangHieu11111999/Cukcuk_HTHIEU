using System;
using System.Collections.Generic;
using System.Text;

namespace Entities
{
    public class GroupCustomer
    {
        public string GroupCustomerName { get; set; }

        public Guid GroupCustomerID { get; set; }

        public string Description { get; set; }
         
        public DateTime CreatedDate { get; set; }

        public string CreatedBy { get; set; }

        public string GroupCustomerCode { get; set; }
        
        public DateTime ModifiedDate { get; set; }

        public string ModifiedBy { get; set; }
    }
}
