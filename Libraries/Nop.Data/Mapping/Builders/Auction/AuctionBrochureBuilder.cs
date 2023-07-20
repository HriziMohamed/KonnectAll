using FluentMigrator.Builders.Create.Table;
using Nop.Core.Domain.Auctions;
using Nop.Data.Extensions;

namespace Nop.Data.Mapping.Builders.Auction
{
    public partial class AuctionBrochureBuilder : NopEntityBuilder<Core.Domain.Auctions.AuctionBrochure>
    {
        #region Methods

        /// <summary>
        /// Apply entity configuration
        /// </summary>
        /// <param name="table">Create table expression builder</param>
        public override void MapEntity(CreateTableExpressionBuilder table)
        {
            table

                .WithColumn(nameof(AuctionBrochure.AuctionId)).AsInt32().ForeignKey<Core.Domain.Auctions.Auction>()
                .WithColumn(nameof(AuctionBrochure.Name)).AsString(255).NotNullable()
                .WithColumn(nameof(AuctionBrochure.Size)).AsString(255).NotNullable()
                .WithColumn(nameof(AuctionBrochure.File)).AsBinary(int.MaxValue).NotNullable();
        }

        #endregion Methods
    }
}