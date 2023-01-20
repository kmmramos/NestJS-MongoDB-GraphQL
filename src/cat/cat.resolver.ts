import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class CatResolver {

    @Query(() => String)
    hello() {
        return "Hello world";
    }
}
