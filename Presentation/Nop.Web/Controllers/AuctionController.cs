using Microsoft.AspNetCore.Mvc;
using Nop.Core;
using Nop.Core.Domain.Catalog;
using Nop.Core.Domain.Media;
using Nop.Core.Domain.Vendors;
using Nop.Data.Mapping.Builders.Forums;
using Nop.Services.Auctions;
using Nop.Services.Catalog;
using Nop.Services.Common;
using Nop.Services.Localization;
using Nop.Services.Logging;
using Nop.Services.Security;
using Nop.Services.Stores;
using Nop.Services.Vendors;
using Nop.Web.Factories;
using System.Threading.Tasks;

namespace Nop.Web.Controllers
{
    //[AutoValidateAntiforgeryToken]
    public class AuctionController : BasePublicController
    {
        #region Fields


        private readonly IAuctionModelFactory _auctionModelFactory;

        #endregion Fields

        #region Ctor

        public AuctionController(IAuctionModelFactory auctionModelFactory)
        {

            _auctionModelFactory = auctionModelFactory;
        }

        #endregion Ctor

        public virtual async Task<IActionResult> Index(int? pageNumber)
        {
            var model = await _auctionModelFactory.PrepareAuctionAllModelsAsync(pageNumber);

            return View(model);
        }
    }
}