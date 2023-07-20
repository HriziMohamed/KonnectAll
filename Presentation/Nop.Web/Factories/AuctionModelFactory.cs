using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.Mvc.Routing;
using Nop.Core;
using Nop.Core.Caching;
using Nop.Core.Domain.Blogs;
using Nop.Core.Domain.Catalog;
using Nop.Core.Domain.Common;
using Nop.Core.Domain.Forums;
using Nop.Core.Domain.Media;
using Nop.Core.Domain.Vendors;
using Nop.Core.Events;
using Nop.Services.Auctions;
using Nop.Services.Catalog;
using Nop.Services.Common;
using Nop.Services.Customers;
using Nop.Services.Directory;
using Nop.Services.Localization;
using Nop.Services.Media;
using Nop.Services.Seo;
using Nop.Services.Topics;
using Nop.Services.Vendors;
using Nop.Web.Models.Auction;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Nop.Web.Factories
{
    public partial class AuctionModelFactory : IAuctionModelFactory
    {
        #region Fields

        private readonly IStoreContext _storeContext;
        private readonly IAuctionService _auctionService;

        #endregion Fields

        #region Ctor

        public AuctionModelFactory(IStoreContext storeContext,
            IAuctionService auctionService)
        {

            _storeContext = storeContext;

            _auctionService = auctionService;
        }

        #endregion Ctor

        public async Task<List<AuctionModel>> PrepareAuctionAllModelsAsync(int? pageNumber)
        {
            var model = new List<AuctionModel>();

            var currentStore = await _storeContext.GetCurrentStoreAsync();
            var auctions = await _auctionService.GetAllAuctionsAsync(storeId: currentStore.Id);
            foreach (var auction in auctions)
            {
                var modelauc = new AuctionModel
                {
                    CategoryId = auction.CategoryId,
                    Description = auction.Description,
                    Title = auction.Title,
                    ProductId = auction.ProductId,
                    Banner64Src = AuctionModel.ConvertByteToImage(auction.Banner),
                    EndtDate = auction.EndtDate,
                    StartDate = auction.StartDate,
                };

                model.Add(modelauc);
            }

            return model;
        }
    }
}