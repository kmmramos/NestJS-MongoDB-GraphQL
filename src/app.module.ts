import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { CatModule } from './cat/cat.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CategoryModule } from './category/category.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://username:password@cluster0.rsugnbh.mongodb.net/?retryWrites=true&w=majority'), 
    GraphQLModule.forRoot<ApolloDriverConfig>({
    autoSchemaFile: true,
    driver: ApolloDriver,
  }), CatModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
