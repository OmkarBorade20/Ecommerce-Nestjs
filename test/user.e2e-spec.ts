import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

import { UserModule } from '../src/modules/users/user.module';

describe('User Controller (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UserModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

//   it('/Users/Register (GET)', () => {
//     return request(app.getHttpServer())
//       .post('/users/register')
//       .expect(200)
//   });


  it('/Users/fetch (GET)', () => {
    return request(app.getHttpServer())
      .get('/users/fetch')
      .expect(200)
     
  });

  it('/Users/remove/:id (GET)', () => {
    return request(app.getHttpServer())
      .get('/users/fetch/:id')
      .expect(200)
      
  });
});
