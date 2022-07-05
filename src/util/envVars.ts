import dotenv from 'dotenv';

dotenv.config();

// 환경 변수
const envVars = {
  NODE_ENV: process.env.NODE_ENV || '',
  DBIP: process.env.DBIP || '',
  DBPASSWORD: process.env.DBPASSWORD || '',
  DBUSER: process.env.DBUSER || '',
  DATABASE: process.env.DATABASE || '',
};

export { envVars };
