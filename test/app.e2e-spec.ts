import { Test, TestingModule } from '@nestjs/testing'
import * as request from 'supertest'
import { AppModule } from '../src/app.module'
import { INestApplication } from '@nestjs/common'
import { FilmsService } from '../src/services/films/films.service'
import { sort } from '../src/common/functions'
import * as testArrays from './testArrays'

describe('AppController (e2e)', () => {
  let app: INestApplication
  const filmsService = {
    getFilms: () => testArrays.fullArr,
    getSortedFilms: (param?: string, direction?: string, limit?: number) => {
      let resp = filmsService.getFilms()
      if (param) {
        resp = sort(resp, param, direction)
      }
      if (limit) {
        resp = resp.slice(0, limit)
      }
      return resp
    }
  }

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    })
      .overrideProvider(FilmsService)
      .useValue(filmsService)
      .compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect(filmsService.getFilms())
  })
  it('should return the full response', async () => {
    const res = await request(app.getHttpServer())
      .get('/')
    expect(res.body.length).toBe(testArrays.fullArr.length)
  })

  it('should limit response when limit is supplied', async () => {
    const res = await request(app.getHttpServer())
      .get('/2')
    expect(res.body.length).toBe(2)
  })
})
