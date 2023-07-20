namespace Nop.Core.Domain.Auctions
{
    public class AuctionItem : BaseEntity
    {
        public int AuctionId { get; set; }
        public string Description { get; set; }
        public int Order { get; set; }
        public string Title { get; set; }
    }
}