const config = {
  env: process.env.NODE_ENV || "development",
  port: Number(process.env.PORT || 3000),
  jwtSecret: process.env.JWT_SECRET || "D3v3lopm3nT_s3cr3t",
  databaseUrl: process.env.DATABASE_URL || "",
};

export default config;
