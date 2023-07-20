namespace Nop.Core.Domain.Auctions
{
    public class AuctionBrochure : BaseEntity
    {
        public int AuctionId { get; set; }
        public byte[] File { get; set; }
        public string Name { get; set; }
        public string Size { get; set; }
    }
}