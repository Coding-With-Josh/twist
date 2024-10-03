/*
  Warnings:

  - Made the column `agencyLogo` on table `Agency` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Agency" ALTER COLUMN "agencyLogo" SET NOT NULL;
