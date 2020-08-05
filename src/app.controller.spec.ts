import { Test, TestingModule } from '@nestjs/testing'
import { AppController } from './app.controller'
import { SortedfilmService } from './services/films/sortedfilm.service'
import * as testArrays from '../test/testArrays'
import { FilmsService } from './services/films/films.service'
import { of } from 'rxjs'

class FilmServiceMock {
  getFilms () {
    return of(testArrays.fullArr)
  }
}

describe('App Controller', () => {
  let controller: AppController
  let service: SortedfilmService

  beforeEach(async () => {
    const FilmServiceProvider = {
      provide: FilmsService,
      useClass: FilmServiceMock
    }
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [SortedfilmService, FilmServiceProvider]
    }).compile()
    controller = module.get<AppController>(AppController)
    service = module.get<SortedfilmService>(SortedfilmService)
  })
  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
  it('should getFilms', () => {
    const spy = jest.spyOn(service, 'getSortedFilms')
    controller.getFilms().subscribe(() => {
      expect(spy).toBeCalled()
      expect(spy).toBeCalledWith()
    })
  })
  it('should getSortedFilmsTitle', () => {
    const spy = jest.spyOn(service, 'getSortedFilms')
    controller.getSortedFilmsTitle().subscribe(() => {
      expect(spy).toBeCalledWith('title')
    })
  })
  it('should getSortedFilmsTitleLimit', () => {
    const spy = jest.spyOn(service, 'getSortedFilms')
    controller.getSortedFilmsTitleLimit(5).subscribe(() => {
      expect(spy).toBeCalledWith('title', '', 5)
    })
  })
  it('should getSortedFilmsTitleRev', () => {
    const spy = jest.spyOn(service, 'getSortedFilms')
    controller.getSortedFilmsTitleRev().subscribe(() => {
      expect(spy).toBeCalledWith('title', 'rev')
    })
  })
  it('should getSortedFilmsTitleRevLimit', () => {
    const spy = jest.spyOn(service, 'getSortedFilms')
    controller.getSortedFilmsTitleRevLimit(5).subscribe(() => {
      expect(spy).toBeCalledWith('title', 'rev', 5)
    })
  })
  it('should getSortedFilmsScore', () => {
    const spy = jest.spyOn(service, 'getSortedFilms')
    controller.getSortedFilmsScore().subscribe(() => {
      expect(spy).toBeCalledWith('vote_average', 'rev')
    })
  })
  it('should getSortedFilmsScoreLimit', () => {
    const spy = jest.spyOn(service, 'getSortedFilms')
    controller.getSortedFilmsScoreLimit(5).subscribe(() => {
      expect(spy).toBeCalledWith('vote_average', 'rev', 5)
    })
  })
  it('should getSortedFilmsScoreRev', () => {
    const spy = jest.spyOn(service, 'getSortedFilms')
    controller.getSortedFilmsScoreRev().subscribe(() => {
      expect(spy).toBeCalledWith('vote_average')
    })
  })
  it('should getSortedFilmsScoreRevLimit', () => {
    const spy = jest.spyOn(service, 'getSortedFilms')
    controller.getSortedFilmsScoreRevLimit(5).subscribe(() => {
      expect(spy).toBeCalledWith('vote_average', '', 5)
    })
  })
  it('should getLimitedFilms', () => {
    const spy = jest.spyOn(service, 'getSortedFilms')
    controller.getLimitedFilms(5).subscribe(() => {
      expect(spy).toBeCalledWith('', '', 5)
    })
  })
})
