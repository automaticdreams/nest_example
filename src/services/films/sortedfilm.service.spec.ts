import { Test, TestingModule } from '@nestjs/testing';
import { SortedfilmService } from './sortedfilm.service';
import * as testArrays from '../../../test/testArrays'
import { FilmsService } from './films.service'
import { of } from 'rxjs'
import { AxiosResponse } from 'axios'
import * as functions from '../../common/functions'

class FilmServiceMock {
  getFilms () {
    return of(testArrays.fullArr)
  }
}
jest.mock('../../common/functions')


describe('SortedfilmService', () => {
  let service: SortedfilmService;
  let filmservice: FilmsService;

  beforeEach(async () => {
    const FilmServiceProvider = {
      provide: FilmsService,
      useClass: FilmServiceMock
    }
    const module: TestingModule = await Test.createTestingModule({
      providers: [SortedfilmService, FilmServiceProvider],
    }).compile();

    service = module.get<SortedfilmService>(SortedfilmService);
    filmservice = module.get<FilmsService>(FilmsService);
  })

  it('should be defined', () => {
    expect(service).toBeDefined();
  })

  it ('should return unsorted array when no params provided', async () => {
    service.getSortedFilms().subscribe(resp => {
      expect(resp).toStrictEqual(testArrays.unchangedArray)
      expect(functions.sort).not.toHaveBeenCalled()
    })
  })
  it ('should call sort function when param provided', () => {
    service.getSortedFilms('title').subscribe(resp => {
      expect(functions.sort).toHaveBeenCalledWith(testArrays.fullArr, 'title', undefined)
    })
  })
  it ('should limit response when limit provided', () => {
    service.getSortedFilms('', '', 5).subscribe(resp => {
      expect(resp.length).toBe(5)
    })
  })
  // it ('should return array sorted by title when param: title provided', async () => {
  //   service.getSortedFilms('title').subscribe(resp => {
  //     expect(resp).toStrictEqual(testArrays.sortedByTitle)
  //   })
  // })
  // it ('should return array of 3 when limit: 3 provided', async () => {
  //   service.getSortedFilms('','',3).subscribe(resp => {
  //     expect(resp).toStrictEqual(testArrays.unsortedLimited)
  //   })
  // })
  // it ('should return array of 3 sorted by title when param: title and  limit: 5 provided', async () => {
  //   service.getSortedFilms('title','',5).subscribe(resp => {
  //     expect(resp).toStrictEqual(testArrays.sortedByTitleAndLimited)
  //   })
  // })
})
