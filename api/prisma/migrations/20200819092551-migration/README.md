# Migration `20200819092551-migration`

This migration has been generated by dmitrij at 8/19/2020, 9:25:51 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "new_Item" (
"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
"name" TEXT NOT NULL,
"categoryId" INTEGER NOT NULL,
"size_h" INTEGER NOT NULL DEFAULT 0,
"size_w" INTEGER NOT NULL DEFAULT 0,
"price" INTEGER NOT NULL DEFAULT 0,
"description" TEXT ,
"createAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE
)

INSERT INTO "new_Item" ("id", "name", "categoryId", "createAt", "size_h", "size_w", "description") SELECT "id", "name", "categoryId", "createAt", "size_h", "size_w", "description" FROM "Item"

PRAGMA foreign_keys=off;
DROP TABLE "Item";;
PRAGMA foreign_keys=on

ALTER TABLE "new_Item" RENAME TO "Item";

PRAGMA foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200818124333-migration..20200819092551-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource DS {
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider      = "prisma-client-js"
@@ -28,8 +28,9 @@
     category    Category @relation( fields: [categoryId], references: [id] )
     categoryId  Int
     size_h      Int @default(0)
     size_w      Int @default(0)
+    price       Int @default(0)
     description String?
     images      Image[] 
     createAt    DateTime @default(now())
 }
```

