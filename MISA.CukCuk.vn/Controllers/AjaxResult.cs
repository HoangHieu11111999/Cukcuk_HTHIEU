using System.Collections.Generic;

namespace MISA.CukCuk.Controllers
{
    public class AjaxResult
    {
        public object Data { get; set; }
        public bool Success { get; set; }
        public string Message { get; set; }

        public AjaxResult()
        {
            Success = true;
        }
    }
}