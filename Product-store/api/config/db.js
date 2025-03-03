import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

// creates a SQL connection using our env variables
export const sql = neon(
  `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
);
// this sql function we export is used as a tagged template literal, which allows us to write SQL queries safely

// postgresql://neondb_owner:npg_SB3nvfk2Tmjl@ep-cold-rice-a8z3gpso-pooler.eastus2.azure.neon.tech/storeDb?sslmode=require
