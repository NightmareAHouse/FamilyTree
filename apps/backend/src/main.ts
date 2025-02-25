import {NestFactory} from '@nestjs/core';
import {BackendModule} from './backend.module';

async function bootstrap() {
    const app = await NestFactory.create(BackendModule);
    await app.listen(3001);
    console.log(`Application is running on: http://localhost:3001`);
}

bootstrap();
