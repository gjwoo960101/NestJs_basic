import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('/call')
  callFunction(@Body() body: { name: string; arguments: any }) {
    const { name } = body;
    console.log('name : ', name);
    switch (name) {
      case 'get_current_time':
        return { result: new Date().toISOString() };
      case 'get_hello':
        return { result: 'Hello, MCP Server' };
      default:
        throw new Error(`Unknown function: ${name}`);
    }
  }
}
