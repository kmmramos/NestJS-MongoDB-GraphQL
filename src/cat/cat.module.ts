import { Module } from '@nestjs/common';
import { CatResolver } from './cat.resolver';

@Module({
  providers: [CatResolver]
})
export class CatModule {}
