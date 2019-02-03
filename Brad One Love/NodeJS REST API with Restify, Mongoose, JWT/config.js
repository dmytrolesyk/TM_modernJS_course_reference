module.exports = {
  ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3005,
  URL: process.env.BASE_URL || 'http://localhost:3005',
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://dmytro:database123@ds119795.mlab.com:19795/customer_api',
  JWT_SECRET: process.env.JWT_SECRET || 'secret_shit'
}