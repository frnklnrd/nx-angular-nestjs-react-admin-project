import { Module } from '@nestjs/common';

import { ConfigModule } from './config/config.module';
import { AuthModule } from './core/auth/auth.module';
import { CatsModule } from './resource/cats/cats.module';
import { TasksModule } from './resource/tasks/tasks.module';
import { UsersModule } from './resource/users/users.module';

@Module({
  imports: [
    // ---------------
    ConfigModule,
    // ---------------
    AuthModule,
    UsersModule,
    // ---------------
    CatsModule,
    TasksModule,
    // ---------------
  ],
  controllers: [
    // AppController
  ],
  providers: [
    // AppService
  ],
})
export class AppModule {}