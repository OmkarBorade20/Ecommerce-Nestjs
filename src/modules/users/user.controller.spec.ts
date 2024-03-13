import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UsersController', () => {

  const mockProductService = {
    register: jest.fn((dto) => {
      return {
      id:1,
      ...dto
      };
    })
  };
  let controller: UserController;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    })
      .overrideProvider(UserService)
      .useValue(mockProductService)
      .compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a user', () => {
    const dto={
        "name": "Omkar Borade",
        "age": 25,
        "gender": "Male",
        "city": "Pune",
        "phone": "8446920098",
        "email": "omkar.borade@gmail.com",
        "password": "Omkar123",
        "role": "Admin",
        "address": "86/A Wanwadi SalunkheVihar Road Near Borade Nagar Pune 40",
        "state": "Maharashtra",
        "country": "India",
        "pincode": 411040
      }
    expect(
      controller.register(dto),
    ).toEqual({
    id:expect.any(Number),
    ...dto
    });

    expect (mockProductService.register).toHaveBeenCalledWith(dto);
   });
});
