using Entities;
using MISA.DL;
using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.BL
{
    public class AdminBL 
    {
        BaseDL<Admin> customerDL = new BaseDL<Admin>();
        public  int LoginAdmin(Admin admin)
        {
            return customerDL.LoginAdmin(admin);
        }
    }
}
