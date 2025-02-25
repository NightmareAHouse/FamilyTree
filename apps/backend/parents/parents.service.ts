import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Parent, ParentDocument} from './parents.schema';

@Injectable()
export class ParentsService {
    constructor(@InjectModel(Parent.name) private parentModel: Model<ParentDocument>) {
        console.log(`Using collection: ${this.parentModel.collection.name}`);
    }

    async getAllParents(): Promise<Parent[]> {
        console.log(await this.parentModel.find().exec())
        return await this.parentModel.find().exec(); // Возвращаем все документы коллекции
    }
}
