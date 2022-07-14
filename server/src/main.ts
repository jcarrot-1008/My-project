import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //   app.enableCors({
  //   origin: 'http://127.0.0.1:3030',
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  //   credentials: true,
  // });
  app.enableCors();
  const serverConfig = config.get('server');
  const port = serverConfig.port;
  await app.listen(port);
  Logger.log(`Application running on port ${port}`);
}
bootstrap();
