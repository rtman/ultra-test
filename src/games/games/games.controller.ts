import { Controller, Get } from '@nestjs/common';

@Controller('games')
export class GamesController {
  @Get()
  index(): string {
    return 'Returns Games Data';
  }
}
