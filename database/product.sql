START TRANSACTION;

CREATE TABLE "products" (
  "id" serial NOT NULL,
  "name" varchar(100) DEFAULT NULL,
  "id_category" integer DEFAULT NULL,
  "id_category_brand" integer DEFAULT NULL,
  "warna" varchar(100) NOT NULL,
  "variant" varchar(50) DEFAULT NULL,
  "tipe_produk" integer DEFAULT NULL,
  "description" varchar(255) DEFAULT NULL,
  "description2" text DEFAULT NULL,
  "slug" varchar(100) DEFAULT NULL,
  "image" varchar(100) DEFAULT NULL,
  "status" smallint DEFAULT NULL,
  "price" integer DEFAULT NULL,
  "stock" integer NOT NULL DEFAULT 0,
  "weight" real NOT NULL DEFAULT 0,
  "created_by" integer DEFAULT NULL,
  "created_on" timestamp DEFAULT NULL,
  "view" integer NOT NULL,
  PRIMARY KEY ("id")
);

INSERT INTO "products" ("id", "name", "id_category", "id_category_brand", "warna", "variant", "tipe_produk", "description", "description2", "slug", "image", "status", "price", "stock", "weight", "created_by", "created_on", "view") VALUES
(1, 'Samsung s21', 3, 1, 'Black', NULL, 2, 'test', 'test', 'samsung-s21', NULL, 1, 16000000, 100, 1, NULL, NULL, 0),
(2, 'Samsung s21 plus', 3, 1, 'Black', NULL, 2, 'test', 'test', 'samsung-s21-plus', NULL, 1, 18000000, 100, 1, NULL, NULL, 0);

ALTER TABLE "products"
  ALTER COLUMN "id" SET DEFAULT nextval(pg_get_serial_sequence('"products"', 'id'));

COMMIT;