import { Module } from '@nestjs/common';

import {
  ConfigService,
  ConfigModule as NestConfigModule,
} from '@nestjs/config';

//声明导入，导出的情况问题
@Module({
  imports: [NestConfigModule.forRoot()],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
