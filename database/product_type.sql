START TRANSACTION;

CREATE TABLE "product_types" (
  "id" serial NOT NULL,
  "name" varchar(25) DEFAULT NULL,
  "slug" varchar(25) DEFAULT NULL,
  "description" varchar(100) DEFAULT NULL,
  "status" smallint DEFAULT NULL,
  "updated_by" integer DEFAULT NULL,
  "updated_on" timestamp DEFAULT NULL,
  PRIMARY KEY ("id")
);

INSERT INTO "product_types" ("id", "name", "slug", "description", "status", "updated_by", "updated_on") VALUES
(1, 'Audio', 'audio', 'Product audio', 1, NULL, NULL),
(2, 'Smartphone', 'smartphone', 'Product Smartphone', 1, NULL, NULL),
(3, 'Gadget', 'gadget', 'Product Gadget', 1, NULL, NULL),
(4, 'Accessories', 'accessories', 'Product Accessories', 1, NULL, NULL);

ALTER TABLE "product_types"
  ALTER COLUMN "id" SET DEFAULT nextval(pg_get_serial_sequence('"product_types"', 'id'));

COMMIT;