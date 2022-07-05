import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'local',
  port: 5432,
  username: 'june',
  password: '1234',
  database: 'june',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
