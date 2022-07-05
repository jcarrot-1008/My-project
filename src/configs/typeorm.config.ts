import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { envVars } from 'src/util/envVars';
console.log(envVars);
export const typeORMConfig: TypeOrmModuleOptions =
  envVars.NODE_ENV !== 'production'
    ? {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: envVars.DBUSER,
        password: envVars.DBPASSWORD,
        database: envVars.DATABASE,
        entities: [__dirname + '/../**/*.entity.{js,ts}'],
        synchronize: true,
      }
    : {
        type: 'postgres',
        host: envVars.DBIP,
        port: 5432,
        username: envVars.DBUSER,
        password: envVars.DBPASSWORD,
        database: envVars.DATABASE,
        entities: [__dirname + '/../**/*.entity.{js,ts}'],
        synchronize: true,
      };
