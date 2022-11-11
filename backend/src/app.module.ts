import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { AuthModule } from './auth/auth.module';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'uploads') }),
    UserModule,
    BookModule,
    AuthModule,
    MulterModule.register({ dest: './uploads' }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
