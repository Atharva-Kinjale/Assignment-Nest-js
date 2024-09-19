import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformResponceInterceptor } from './transform-responce/transform-responce.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new TransformResponceInterceptor());
  await app.listen(3000);
}
bootstrap();
