# Migration `20200908052610-migration`

This migration has been generated at 9/8/2020, 12:26:10 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200821114023-migration..20200908052610-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource DS {
-  provider = "sqlite"
-  url = "***"
+  provider = ["sqlite", "postgresql"]
+  url = "***"
 }
 generator client {
   provider      = "prisma-client-js"
```


