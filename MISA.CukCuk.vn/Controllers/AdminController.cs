using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MISA.BL;
using MISA.DL;

namespace MISA.CukCuk.Controllers
{
    [Route("/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        BaseBL<Admin> baseBL = new BaseBL<Admin>();

    
        

        // PUT: api/Admin/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        AdminBL adminBL = new AdminBL();

        [HttpPost("loginAdmin")]
        public int LoginAdmin(Admin admin)
        {

            return adminBL.LoginAdmin(admin);
        }
    }
}
