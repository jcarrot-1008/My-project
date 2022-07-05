import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '146.56.150.153',
  port: 5432,
  username: 'june',
  password: 'june',
  database: 'june',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
