import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "dotenv/config";
import {Logger} from '@nestjs/common';

const port = process.env.PORT || 8080;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  Logger.log(`Server Running At : http://localhost:${port}`, 'Bootstrap');
}
bootstrap();
