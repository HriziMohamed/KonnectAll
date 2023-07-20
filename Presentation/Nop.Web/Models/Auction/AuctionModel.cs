using System;

namespace Nop.Web.Models.Auction
{
    public class AuctionModel
    {
        public AuctionModel()
        {
            
        }

        public string AuctionGuid { get; set; }
        public int CategoryId { get; set; }
        public int ProductId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndtDate { get; set; }

        public string Banner64Src { get; set; }

        public static string ConvertByteToImage(byte[] bytes)
        {
            var base64 = bytes != null ? Convert.ToBase64String(bytes) : string.Empty;
            return !string.IsNullOrEmpty(base64) ? string.Format("data:image/gif;base64,{0}", base64) : "/images/default-image.png";
        }
    }
}
