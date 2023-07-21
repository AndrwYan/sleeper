import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { ValidationPipe } from '@nestjs/common';

import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  // 1.Controller层做验证
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  // 2.请求日志关联
  app.useLogger(app.get(Logger));
  await app.listen(3001);
}
bootstrap();
