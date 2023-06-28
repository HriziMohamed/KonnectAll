using System.Collections.Generic;
using Nop.Web.Framework.Models;
using Nop.Web.Models.Media;
using Nop.Core.Domain.Discounts;
using Nop.Web.Models.Catalog;

namespace Nop.Web.Models.Discounts
{
    public partial record ProductsDealModel : BaseNopEntityModel
    {
        public ProductsDealModel()
        {
            Discount = new Discount();
            Products = new List<ProductOverviewModel>();

        }

        public Discount Discount { get; set; }
        public IEnumerable<ProductOverviewModel> Products { get; set; }

  
    }
}