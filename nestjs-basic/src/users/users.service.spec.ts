import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  /* it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('Should return user name', async () => {
    const result = await service.getUser(100);
    expect(result).toBe('User 100');
  }); */
  it('Should return lee,gjwoo,20', () => {
    const result = service.getUserDto({
      name: 'lee',
      id: 'gjwoo',
      age: 20,
    });
    expect(result).toBe('lee,gjwoo,20');
  });
});
