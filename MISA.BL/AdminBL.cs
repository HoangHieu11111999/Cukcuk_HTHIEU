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
        public  int LoginAdmin(string UserName, string PassWord)
        {
            return customerDL.LoginAdmin(UserName,PassWord);
        }
    }
}
