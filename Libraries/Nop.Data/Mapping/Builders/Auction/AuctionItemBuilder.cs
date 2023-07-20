using FluentMigrator.Builders.Create.Table;
using Nop.Core.Domain.Auctions;
using Nop.Data.Extensions;

namespace Nop.Data.Mapping.Builders.Auction
{
    public partial class AuctionItemBuilder : NopEntityBuilder<AuctionItem>
    {
        #region Methods

        /// <summary>
        /// Apply entity configuration
        /// </summary>
        /// <param name="table">Create table expression builder</param>
        public override void MapEntity(CreateTableExpressionBuilder table)
        {
            table
                .WithColumn(nameof(AuctionItem.AuctionId)).AsInt32().ForeignKey<Core.Domain.Auctions.Auction>()
                .WithColumn(nameof(AuctionItem.Title)).AsString(255).NotNullable()
                .WithColumn(nameof(AuctionItem.Description)).AsString(int.MaxValue).NotNullable()
                .WithColumn(nameof(AuctionItem.Order)).AsInt32().Nullable();
        }

        #endregion Methods
    }
}