import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./configs/schema.js",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_JuXvLVd1so6i@ep-little-sun-a80uw937-pooler.eastus2.azure.neon.tech/newdb?sslmode=require",
  },
});