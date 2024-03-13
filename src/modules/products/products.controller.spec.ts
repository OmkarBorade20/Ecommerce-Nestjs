import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { CacheInterceptor } from '@nestjs/cache-manager';

describe('ProductsController', () => {
  const mockcacheManager = {};

  const mockProductService = {
    create: jest.fn((dto) => {
      return {
        id: Date.now(),
        ...dto,
      };
    }),
    findAll: jest.fn(() => []),
    findOne: jest.fn((id) => {
      return {
        id: id,
        title: 'GTA 5 PS 5',
        price: 2800,
        description: 'Sony Ps5 Gta 5.',
        imgurl:
          'https://m.media-amazon.com/images/I/81kAitW5qAL._AC_UY218_.jpg',
      
      };
    }),
    update: jest.fn(() => {}),
    remove: jest.fn((id) => {}),
  };
  let controller: ProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService],
    })
      .overrideProvider(ProductsService)
      .useValue(mockProductService)

      .overrideInterceptor(CacheInterceptor)
      .useValue(mockcacheManager)
      .compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  const dto = {
    title: 'title',
    description: 'description',
    imgurl: 'imgurl',
    price: 100,
  };
  it('should create a produt', () => {
    expect(controller.create(dto)).toEqual({
      id: expect.any(Number),
      ...dto,
    });

    expect(mockProductService.create).toHaveBeenCalledWith(dto);
  });

  it('should give all the products list ', () => {
    expect(controller.findAll()).toEqual([]);

    expect(mockProductService.findAll).toHaveBeenCalled();
  });

  it('should give the products object.', () => {
    const id :string= "2";
    expect(controller.findOne(id)).toEqual({
      id:expect.any(Number),
      title: expect.any(String),
      price: expect.any(Number),
      description: expect.any(String),
      imgurl: expect.any(String)
     
    });
  

    //expect(mockProductService.findOne).toHaveBeenCalledWith(id);
  });

  // it('should give all the products list ', () => {
  //   expect(controller.findAll()).toEqual([]);

  //   expect(mockProductService.findAll).toHaveBeenCalled();
  // });
});
