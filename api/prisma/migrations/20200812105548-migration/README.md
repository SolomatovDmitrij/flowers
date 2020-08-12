# Migration `20200812105548-migration`

This migration has been generated by dmitrij at 8/12/2020, 10:55:48 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

ALTER TABLE "Image" ADD COLUMN "itemId" INTEGER ;

PRAGMA foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200810124819-migration..20200812105548-migration
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
@@ -17,13 +17,16 @@
 model Image {
     id          Int     @id @default(autoincrement())
     title       String
     url         String
+    item        Item? @relation (fields: [itemId], references: [id])
+    itemId      Int?
 }
 model Item {
     id          Int     @id @default(autoincrement())
     name        String
     category    Category @relation( fields: [categoryId], references: [id] )
     categoryId  Int
+    images      Image[] 
     createAt    DateTime @default(now())
 }
```

