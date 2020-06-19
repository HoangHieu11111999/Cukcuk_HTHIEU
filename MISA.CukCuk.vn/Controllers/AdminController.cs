using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Entities;
using EO.Internal;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Rewrite;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using MISA.BL;
using MISA.DL;

namespace MISA.CukCuk.Controllers
{
    [Route("/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        BaseBL<Admin> baseBL = new BaseBL<Admin>();
        private readonly IUserService _userService;

        public AdminController(IUserService userService)
        {
            _userService = userService;
        }
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


        [HttpGet("loginAdmin")]
        [AllowAnonymous]
        public object LoginAdmin([FromQuery]string UserName,[FromQuery]string PassWord)
        {
            string resultToken =  _userService.Authenticate(UserName, PassWord);
            if (resultToken == null)
            {
                return null;
            }
            return Ok(new { token = resultToken });
        }
    }
}
