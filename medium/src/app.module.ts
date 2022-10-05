import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'process';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configType from './orm.config';
import { Tag } from './tags/entities/tag.entity';
import { TagsModule } from './tags/tags.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(configType),
    TagsModule,
    UsersModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
