import {Controller, Get} from '@nestjs/common';
import {ParentsService} from './parents.service';
import {Parent} from './parents.schema';

@Controller('parents')
export class ParentsController {
    constructor(private readonly parentsService: ParentsService) {
    }

    @Get()
    async getAllParents(): Promise<Parent[]> {
        return this.parentsService.getAllParents();
    }
}
