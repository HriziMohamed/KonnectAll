using Nop.Core;
using Nop.Core.Caching;
using Nop.Core.Domain.Auctions;
using Nop.Core.Domain.Catalog;
using Nop.Core.Domain.Seo;
using Nop.Data;
using Nop.Services.Catalog;
using Nop.Services.Customers;
using Nop.Services.Seo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nop.Services.Auctions
{
    public partial class AuctionService : IAuctionService
    {
        #region Fields

        private readonly IRepository<Category> _categoryRepository;
        private readonly IRepository<Product> _productRepository;
        private readonly IRepository<Auction> _auctionRepository;
        private readonly IUrlRecordService _urlRecordService;
        private readonly IWebHelper _webHelper;
        private readonly SeoSettings _seoSettings;
        private readonly IStaticCacheManager _staticCacheManager;
        private readonly ICustomerService _customerService;
        private readonly IWorkContext _workContext;

        #endregion Fields

        #region Ctor

        public AuctionService(IRepository<Auction> auctionRepository,
            IRepository<Category> cateforyRepository,
            IRepository<Product> productRepository,
            IUrlRecordService urlRecordService,
            IWebHelper webHelper,
            SeoSettings seoSettings,
            IStaticCacheManager staticCacheManager,
            ICustomerService customerService,
            IWorkContext workContext)
        {
            _auctionRepository = auctionRepository;
            _categoryRepository = cateforyRepository;
            _productRepository = productRepository;
            _urlRecordService = urlRecordService;
            _webHelper = webHelper;
            _seoSettings = seoSettings;
            _staticCacheManager = staticCacheManager;
            _customerService = customerService;
            _workContext = workContext;
        }

        #endregion Ctor

        #region Methods

        public Task DeleteAuctionAsync(Auction auction)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Gets all categories
        /// </summary>
        /// <param name="storeId">Store identifier; 0 if you want to get all records</param>
        /// <param name="showHidden">A value indicating whether to show hidden records</param>
        /// <returns>
        /// A task that represents the asynchronous operation
        /// The task result contains the categories
        /// </returns>
        public virtual async Task<IList<Auction>> GetAllAuctionsAsync(int storeId = 0, bool showHidden = false)
        {
            return await _auctionRepository.GetAllAsync(query =>
            {
                return from fg in query
                       orderby fg.StartDate, fg.Id
                       select fg;
            }, cache => default);
        }

        public Task<Auction> GetAuctionByIdAsync(int auctionId)
        {
            throw new NotImplementedException();
        }

        public Task InsertAuctionAsync(Auction auction)
        {
            throw new NotImplementedException();
        }

        public Task UpdateAuctionAsync(Auction auction)
        {
            throw new NotImplementedException();
        }

        #endregion Methods
    }
}