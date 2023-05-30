START TRANSACTION;

CREATE TABLE "t_categories" (
  "id" serial NOT NULL,
  "id_parent" integer DEFAULT 0,
  "level" smallint DEFAULT NULL,
  "name" varchar(100) DEFAULT NULL,
  "image" varchar(100) DEFAULT NULL,
  "description" varchar(255) DEFAULT NULL,
  "slug" varchar(100) DEFAULT NULL,
  "href" varchar(250) DEFAULT NULL,
  "status" smallint DEFAULT NULL,
  "display_order" smallint DEFAULT 0,
  "created_on" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "updated_on" timestamp DEFAULT NULL,
  "updated_by" integer DEFAULT NULL,
  PRIMARY KEY ("id")
);

INSERT INTO "t_categories" ("id", "id_parent", "level", "name", "image", "description", "slug", "href", "status", "display_order", "created_on", "created_by", "updated_on", "updated_by") VALUES
(1, 1, 1, 'Promo Bank', NULL, 'Promo Bank', 'Promo-Bank', NULL, 1, 0, NULL, NULL, NULL, NULL),
(2, 1, 1, 'Promo Bank BCA', NULL, 'Promo Bank BCA', 'Promo-Bank-BCA', NULL, 1, 0, NULL, NULL, NULL, NULL),
(3, 3, 1, 'Samsung S Series', NULL, 'Product Samsung S Series', 'Samsung-S-Series', NULL, 1, 0, NULL, NULL, NULL, NULL);

ALTER TABLE "t_categories"
  ALTER COLUMN "id" SET DEFAULT nextval(pg_get_serial_sequence('"t_categories"', 'id'));

COMMIT;