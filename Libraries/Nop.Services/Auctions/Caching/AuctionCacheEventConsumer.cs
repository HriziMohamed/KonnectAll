using Nop.Core.Domain.Auctions;
using Nop.Services.Caching;

namespace Nop.Services.Auctions.Caching
{
    /// <summary>
    /// Represents an auction cache event consumer
    /// </summary>
    public partial class AuctionCacheEventConsumer : CacheEventConsumer<Auction>
    {
    }
}