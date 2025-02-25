import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {ParentsController} from './parents.controller';
import {ParentsService} from './parents.service';
import {Parent, ParentSchema} from './parents.schema';

@Module({
    imports: [MongooseModule.forFeature([{name: Parent.name, schema: ParentSchema}])],
    controllers: [ParentsController],
    providers: [ParentsService],
})
export class ParentsModule {
}
