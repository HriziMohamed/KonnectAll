using Microsoft.AspNetCore.Mvc;

namespace Nop.Web.Controllers
{
    public class ShopController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
