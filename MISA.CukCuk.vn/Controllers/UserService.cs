using Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.Azure.ActiveDirectory.GraphClient;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using MISA.BL;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace MISA.CukCuk.Controllers
{
    public class UserService : IUserService
    {
        private readonly IConfiguration _config;
          
         public UserService(IConfiguration config)
        {
            _config = config;

        }
        AdminBL adminBL = new AdminBL();
        public string Authenticate(Admin admin)
        {
            var result =  adminBL.LoginAdmin(admin);
            if (result == 0)
            {
                return "0";
            }
            var claims = new[]
            {
                new Claim(ClaimTypes.Name ,admin.UserName)
            };
            var key =  new SymmetricSecurityKey(Encoding.UTF8.GetBytes("YourKey-2374-OFFKDI940NG7:56753253-tyuw-5769-0921-kfirox29zoxv"));
            var creds = new SigningCredentials(key,SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(_config["Tokens:Issuer"],
                _config["Tokens:Issuer"],
                claims,
                expires: DateTime.Now.AddHours(3),
                signingCredentials: creds);
            var resultDisp = new JwtSecurityTokenHandler().WriteToken(token);
            return resultDisp;
        }
    }
}
