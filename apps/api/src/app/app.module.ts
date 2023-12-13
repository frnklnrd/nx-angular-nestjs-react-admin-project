import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

import { ConfigModule } from './config/config.module';
import { AuthModule } from './core/auth/auth.module';
import { CatsModule } from './resource/cats/cats.module';
import { TasksModule } from './resource/tasks/tasks.module';
import { UsersModule } from './resource/users/users.module';
import { join } from 'path';

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
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'assets'),
      exclude: [
        'api/*',
      ],
    })
  ],
  controllers: [
    // AppController
  ],
  providers: [
    // AppService
  ],
})
export class AppModule {}
