START TRANSACTION;

CREATE TABLE "category_merks" (
  "id" serial NOT NULL,
  "name" varchar(25) DEFAULT NULL,
  "slug" varchar(25) DEFAULT NULL,
  "description" varchar(100) DEFAULT NULL,
  "status" smallint DEFAULT NULL,
  "updated_by" integer DEFAULT NULL,
  "updated_on" timestamp DEFAULT NULL,
  PRIMARY KEY ("id")
);

INSERT INTO "category_merks" ("id", "name", "slug", "description", "status", "updated_by", "updated_on") VALUES
(1, 'Samsung', 'samsung', 'merk samsung', 1, NULL, NULL),
(2, 'Apple', 'apple', 'merk Apple', 1, NULL, NULL);

ALTER TABLE "category_merks"
  ALTER COLUMN "id" SET DEFAULT nextval(pg_get_serial_sequence('"category_merks"', 'id'));

COMMIT;