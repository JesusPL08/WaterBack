/*
  Warnings:

  - You are about to drop the column `branchId` on the `Commission` table. All the data in the column will be lost.
  - You are about to drop the column `commissionSale` on the `Commission` table. All the data in the column will be lost.
  - You are about to drop the column `dateCreation` on the `Commission` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Commission` table. All the data in the column will be lost.
  - You are about to drop the column `volume` on the `Commission` table. All the data in the column will be lost.
  - You are about to drop the column `folio` on the `Sale` table. All the data in the column will be lost.
  - You are about to drop the column `invoiceDate` on the `Sale` table. All the data in the column will be lost.
  - You are about to drop the column `invoiced` on the `Sale` table. All the data in the column will be lost.
  - You are about to drop the column `payType` on the `Sale` table. All the data in the column will be lost.
  - You are about to drop the column `uuid` on the `Sale` table. All the data in the column will be lost.
  - You are about to drop the `Route` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `comission_sale` to the `Commission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_creation` to the `Commission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_Branch` to the `Commission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_user` to the `Commission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productSaleId` to the `Sale` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Commission" DROP CONSTRAINT "Commission_branchId_fkey";

-- DropForeignKey
ALTER TABLE "Commission" DROP CONSTRAINT "Commission_userId_fkey";

-- DropForeignKey
ALTER TABLE "Route" DROP CONSTRAINT "Route_branchId_fkey";

-- AlterTable
ALTER TABLE "Commission" DROP COLUMN "branchId",
DROP COLUMN "commissionSale",
DROP COLUMN "dateCreation",
DROP COLUMN "userId",
DROP COLUMN "volume",
ADD COLUMN     "comission_sale" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "date_creation" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "id_Branch" INTEGER NOT NULL,
ADD COLUMN     "id_user" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Sale" DROP COLUMN "folio",
DROP COLUMN "invoiceDate",
DROP COLUMN "invoiced",
DROP COLUMN "payType",
DROP COLUMN "uuid",
ADD COLUMN     "productSaleId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Route";

-- CreateTable
CREATE TABLE "TicketSale" (
    "id" SERIAL NOT NULL,
    "ticketId" INTEGER NOT NULL,
    "saleId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "TicketSale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Price" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "tax" DOUBLE PRECISION NOT NULL,
    "productSaleId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Price_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductSale" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "ProductSale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "id" SERIAL NOT NULL,
    "branchId" INTEGER NOT NULL,
    "payType" INTEGER NOT NULL,
    "invoiced" BOOLEAN NOT NULL,
    "uuid" TEXT NOT NULL,
    "invoiceDate" TIMESTAMP(3) NOT NULL,
    "folio" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeliveryBranch" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "branchId" INTEGER NOT NULL,
    "priority" INTEGER NOT NULL,
    "ticketId" INTEGER NOT NULL,
    "status" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "DeliveryBranch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoutesDay" (
    "id" SERIAL NOT NULL,
    "status" BOOLEAN NOT NULL,
    "routeDay" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "RoutesDay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoutesDelivery" (
    "id" SERIAL NOT NULL,
    "deliveryBranchId" INTEGER NOT NULL,
    "routesDayId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "RoutesDelivery_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Commission" ADD CONSTRAINT "Commission_id_Branch_fkey" FOREIGN KEY ("id_Branch") REFERENCES "Branch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commission" ADD CONSTRAINT "Commission_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_productSaleId_fkey" FOREIGN KEY ("productSaleId") REFERENCES "ProductSale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TicketSale" ADD CONSTRAINT "TicketSale_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TicketSale" ADD CONSTRAINT "TicketSale_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "Sale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Price" ADD CONSTRAINT "Price_productSaleId_fkey" FOREIGN KEY ("productSaleId") REFERENCES "ProductSale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "Branch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeliveryBranch" ADD CONSTRAINT "DeliveryBranch_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeliveryBranch" ADD CONSTRAINT "DeliveryBranch_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "Branch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeliveryBranch" ADD CONSTRAINT "DeliveryBranch_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoutesDelivery" ADD CONSTRAINT "RoutesDelivery_deliveryBranchId_fkey" FOREIGN KEY ("deliveryBranchId") REFERENCES "DeliveryBranch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoutesDelivery" ADD CONSTRAINT "RoutesDelivery_routesDayId_fkey" FOREIGN KEY ("routesDayId") REFERENCES "RoutesDay"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
