import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CategoryInput {
    @Field()
    readonly name: string;
}

@InputType()
export class UpdateCategoryInput {
    @Field()
    readonly _id: string;

    @Field()
    readonly name: string;
}

@InputType()
export class FindCategoryInput {
    @Field()
    readonly _id: string;
}