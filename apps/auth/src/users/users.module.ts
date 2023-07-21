import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDocument, UserSchema } from './models/user.schema';
import { DatabaseModule } from '@app/common';
import { LoggerModule } from 'nestjs-pino';
import { UserRepository } from './users.repository';
import { UsersController } from './users.controller';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: UserDocument.name, schema: UserSchema },
    ]),
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            singleLine: true,
          },
        },
      },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, UserRepository],
})
export class UsersModule {}
