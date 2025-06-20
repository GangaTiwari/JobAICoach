/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_gS9n7aUWPBmM@ep-summer-butterfly-a867t4pt-pooler.eastus2.azure.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };