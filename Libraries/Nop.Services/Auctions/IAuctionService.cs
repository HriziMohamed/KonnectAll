using Nop.Core.Domain.Auctions;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Nop.Services.Auctions
{
    public partial interface IAuctionService
    {
        /// <summary>
        /// Marks auction as deleted
        /// </summary>
        /// <param name="auction">Auction</param>
        /// <returns>A task that represents the asynchronous operation</returns>
        Task DeleteAuctionAsync(Auction auction);

        Task<IList<Auction>> GetAllAuctionsAsync(int storeId = 0, bool showHidden = false);

        /// <summary>
        /// Gets an auction by auction identifier
        /// </summary>
        /// <param name="AuctionId">Auction identifier</param>
        /// <returns>
        /// A task that represents the asynchronous operation
        /// The task result contains the auction
        /// </returns>
        Task<Auction> GetAuctionByIdAsync(int auctionId);

        /// <summary>
        /// Inserts an auction
        /// </summary>
        /// <param name="auction">Auction</param>
        /// <returns>A task that represents the asynchronous operation</returns>
        Task InsertAuctionAsync(Auction auction);

        /// <summary>
        /// Updates the auction
        /// </summary>
        /// <param name="auction">Auction</param>
        /// <returns>A task that represents the asynchronous operation</returns>
        Task UpdateAuctionAsync(Auction auction);
    }
}