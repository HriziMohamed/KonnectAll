using System;

namespace Nop.Core.Domain.Auctions
{
    public partial class Auction : BaseEntity
    {
        public Guid AuctionGuid { get; set; }
        public byte[] Banner { get; set; }
        public int CategoryId { get; set; }
        public string Description { get; set; }
        public DateTime EndtDate { get; set; }
        public int ProductId { get; set; }
        public DateTime StartDate { get; set; }
        public string Title { get; set; }
    }
}