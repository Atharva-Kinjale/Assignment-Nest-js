import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log("Request.........12");
    console.log(`Request... Method: ${req.method}, `);
    next();
  }
}
