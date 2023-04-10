-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "userId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "dateOfBirth" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL DEFAULT '00-000',
    "city" TEXT NOT NULL DEFAULT 'Warsaw',
    "country" TEXT NOT NULL DEFAULT 'Poland',
    "phone" TEXT NOT NULL DEFAULT '000000000',
    "gender" TEXT NOT NULL
);
INSERT INTO "new_User" ("address", "dateOfBirth", "email", "firstName", "gender", "lastName", "userId") SELECT "address", "dateOfBirth", "email", "firstName", "gender", "lastName", "userId" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
