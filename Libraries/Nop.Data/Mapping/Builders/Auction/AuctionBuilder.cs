using FluentMigrator.Builders.Create.Table;
using Nop.Core.Domain.Catalog;
using Nop.Data.Extensions;

namespace Nop.Data.Mapping.Builders.Auction
{
    public partial class AuctionBuilder : NopEntityBuilder<Core.Domain.Auctions.Auction>
    {
        #region Methods

        /// <summary>
        /// Apply entity configuration
        /// </summary>
        /// <param name="table">Create table expression builder</param>
        public override void MapEntity(CreateTableExpressionBuilder table)
        {
            table
                .WithColumn(nameof(Core.Domain.Auctions.Auction.CategoryId)).AsInt32().NotNullable().ForeignKey<Category>()
                .WithColumn(nameof(Core.Domain.Auctions.Auction.ProductId)).AsInt32().NotNullable().ForeignKey<Product>()
                .WithColumn(nameof(Core.Domain.Auctions.Auction.Title)).AsString(255).NotNullable()
                .WithColumn(nameof(Core.Domain.Auctions.Auction.Description)).AsString(int.MaxValue).NotNullable()
                .WithColumn(nameof(Core.Domain.Auctions.Auction.StartDate)).AsDateTime().NotNullable()
                .WithColumn(nameof(Core.Domain.Auctions.Auction.EndtDate)).AsDateTime().NotNullable()
                .WithColumn(nameof(Core.Domain.Auctions.Auction.Banner)).AsBinary(int.MaxValue).NotNullable();
        }

        #endregion Methods
    }
}