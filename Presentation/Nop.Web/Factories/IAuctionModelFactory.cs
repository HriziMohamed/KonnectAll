using Nop.Web.Models.Auction;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Nop.Web.Factories
{
    public partial interface IAuctionModelFactory
    {
        Task<List<AuctionModel>> PrepareAuctionAllModelsAsync(int? pageNumber);
    }
}
