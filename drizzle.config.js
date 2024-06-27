/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://mockprepai_owner:rzw4ILRCUJi7@ep-polished-scene-a14m9oda.ap-southeast-1.aws.neon.tech/mockprepai?sslmode=require',
    }
  };