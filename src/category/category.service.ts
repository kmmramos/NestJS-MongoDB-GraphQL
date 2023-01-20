import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Category } from './category.schema';
import { CategoryInput, FindCategoryInput, UpdateCategoryInput } from './input/category.input';

@Injectable()
export class CategoryService {
    constructor(@InjectModel(Category.name) private categoryModel: Model<Category>) {}

    async findAll(): Promise<Category[]> {
        return this.categoryModel.find().exec();
    }

    async create(createCat: CategoryInput): Promise<Category> {
        const cat = new this.categoryModel(createCat);
        return cat.save();
    }

    async findOne(cat: FindCategoryInput): Promise<Category> {
        return this.categoryModel.findById(cat._id);
    }

    async update(updateCat: UpdateCategoryInput): Promise<Category> {
        const cat = await this.categoryModel.findOne(new Types.ObjectId(updateCat._id));
        cat.name = updateCat.name;
        cat.updatedAt = new Date();
        return cat.save();
    }

    async delete(_id: string): Promise<any> {
        return await this.categoryModel.deleteOne({_id: new Types.ObjectId(_id)});
    }
}
