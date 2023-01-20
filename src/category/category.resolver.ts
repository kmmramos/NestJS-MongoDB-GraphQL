import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';
import { CategoryInput, UpdateCategoryInput, FindCategoryInput } from './input/category.input';

@Resolver()
export class CategoryResolver {
    constructor(
        private categoryService: CategoryService,
    ) {}

    @Query(() => [CategoryDto])
    async categories() {
        return this.categoryService.findAll()
    }

    @Query(() => CategoryDto)
    async createCategory(@Args('input') input: CategoryInput) {
        return this.categoryService.create(input);
    }

    @Query(() => CategoryDto)
    async findCategory(@Args('input') input: FindCategoryInput) {
        return this.categoryService.findOne(input);
    }

    @Mutation(() => CategoryDto)
    async updateCategory(@Args('input') input: UpdateCategoryInput) {
        return this.categoryService.update(input);
    }

    @Mutation(() => String)
    async deleteCategory(@Args('input') input: FindCategoryInput): Promise<any> {
        await this.categoryService.delete(input._id);
        return "Category Removed."
    }
}
