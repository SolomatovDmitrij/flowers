# Migration `20200814112906-migration`

This migration has been generated by dmitrij at 8/14/2020, 11:29:06 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200813082608-migration..20200814112906-migration
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
@@ -26,7 +26,6 @@
     id          Int     @id @default(autoincrement())
     name        String
     category    Category @relation( fields: [categoryId], references: [id] )
     categoryId  Int
-    images      Image[] 
     createAt    DateTime @default(now())
 }
```

