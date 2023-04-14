-- CreateTable
CREATE TABLE "RecommendedProduct" (
    "recommendedProductId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "RecommendedProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("productId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "RecommendedProduct_productId_key" ON "RecommendedProduct"("productId");
