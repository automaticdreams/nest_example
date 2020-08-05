import { Test, TestingModule } from '@nestjs/testing'
import { FilmsService } from './films.service'
import { HttpService, HttpModule, INestApplication } from '@nestjs/common'
import { of, throwError } from 'rxjs'
import { AxiosResponse } from 'axios'
import { AppModule } from '../../app.module'
import * as testArrays from '../../../test/testArrays'

const data1 = testArrays.fullArr
const result: AxiosResponse = {
  data: {results: data1},
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {}
}
const badresult: AxiosResponse = {
  data: 'Oops',
  status: 404,
  statusText: 'Not Found',
  headers: {},
  config: {}
}
const incorrectresult: AxiosResponse = {
  data: data1,
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {}
}


const externalURL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=dfbb6e71b4b1eb0d75c86a4504871cea'

describe('FilmsService', () => {
  let app: INestApplication
  let httpService: HttpService
  let service: FilmsService
  //
  beforeAll(async () => {
    const testAppModule: TestingModule = await Test.createTestingModule({
      imports: [AppModule, HttpModule],
      providers: [FilmsService]
    }).compile()

    app = testAppModule.createNestApplication()
    httpService = testAppModule.get<HttpService>(HttpService)
    service = testAppModule.get<FilmsService>(FilmsService)
    await app.init()
  })
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('should call api', async () => {
    const spy = jest.spyOn(httpService, 'get').mockImplementation(() => of(result))
    await service.getFilms().subscribe(resp => {
      expect(resp).toStrictEqual(data1)
      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveBeenCalledWith(externalURL)
    })
  })
  it('should return an empty array if response.data does not contain an key `results`', async () => {
    const spy = jest.spyOn(httpService, 'get').mockImplementation(() => of(incorrectresult))
    await service.getFilms().subscribe(resp => {
      expect(spy).toHaveBeenCalledTimes(1)
      expect(resp).toStrictEqual([])
    })
  })
  it('should catch errors and return an empty array', async () => {
    const spy = jest.spyOn(httpService, 'get').mockReturnValue(throwError('unknown error'))
    await service.getFilms().subscribe(resp => {
      expect(spy).toHaveBeenCalledTimes(1)
      expect(resp).toStrictEqual([])
    })
  })
  it('should catch errors and return an empty array', async () => {
    const spy = jest.spyOn(httpService, 'get').mockReturnValue(throwError(badresult))
    await service.getFilms().subscribe(resp => {
      expect(spy).toHaveBeenCalledTimes(1)
      expect(resp).toStrictEqual([])
    })
  })

})
