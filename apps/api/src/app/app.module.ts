import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

import { join } from 'path';
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
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../../../vercel-static'),
      // rootPath: join(__dirname, '../../../..', 'dist', 'apps', 'admin'),
      exclude: ['/api/*'],
    }),
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
