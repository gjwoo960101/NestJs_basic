import { Controller, Get, Req } from '@nestjs/common';

@Controller('test')
export class TestController {
  @Get('getTest')
  testReturnString(@Req() request: Request): string {
    console.log(request);
    return 'getTest Ok';
  }
}
