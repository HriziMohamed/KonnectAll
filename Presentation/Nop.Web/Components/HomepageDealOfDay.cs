﻿using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Nop.Core;
using Nop.Core.Caching;
using Nop.Core.Domain.Catalog;
using Nop.Services.Catalog;
using Nop.Services.Discounts;
using Nop.Services.Orders;
using Nop.Services.Security;
using Nop.Services.Stores;
using Nop.Web.Factories;
using Nop.Web.Framework.Components;
using Nop.Web.Infrastructure.Cache;
using Nop.Core.Domain.Discounts;
using SkiaSharp;

namespace Nop.Web.Components
{
    public class HomepageDealOfDayViewComponent : NopViewComponent
    {
        private readonly CatalogSettings _catalogSettings;
        private readonly IAclService _aclService;
        private readonly IOrderReportService _orderReportService;
        private readonly IProductModelFactory _productModelFactory;
        private readonly IProductService _productService;
        private readonly IStaticCacheManager _staticCacheManager;
        private readonly IStoreContext _storeContext;
        private readonly IStoreMappingService _storeMappingService;
        private readonly IDiscountService _discountService;

        public HomepageDealOfDayViewComponent(CatalogSettings catalogSettings,
            IAclService aclService,
            IOrderReportService orderReportService,
            IProductModelFactory productModelFactory,
            IProductService productService,
            IStaticCacheManager staticCacheManager,
            IStoreContext storeContext,
            IDiscountService discountService,
            IStoreMappingService storeMappingService)
        {
            _catalogSettings = catalogSettings;
            _aclService = aclService;
            _orderReportService = orderReportService;
            _productModelFactory = productModelFactory;
            _productService = productService;
            _staticCacheManager = staticCacheManager;
            _storeContext = storeContext;
            _storeMappingService = storeMappingService;
            _discountService = discountService;
        }

        public async Task<IViewComponentResult> InvokeAsync(int? productThumbPictureSize)
        {
            var allDiscounts = await _discountService.GetAllDiscountsAsync(DiscountType.AssignedToSkus, showHidden: true);

            if (allDiscounts == null || !allDiscounts.Any())
                return Content("");

            var productDiscout = allDiscounts.FirstOrDefault();
            var products = await _productService.GetProductsWithAppliedDiscountAsync(productDiscout.Id);


            if (products == null || !products.Any())
                return Content("");



            var model = (await _productModelFactory.PrepareProductOverviewModelsAsync(products, true, true)).ToList();

            var resultModel = new Nop.Web.Models.Discounts.ProductsDealModel
            {
                Discount = productDiscout,
                Products = model
            };


            return View(resultModel);
        }
    }
}