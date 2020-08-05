import { Injectable } from '@nestjs/common'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { sort } from '../../common/functions'
import { FilmsService } from './films.service'

@Injectable()
export class SortedfilmService {
  constructor (private filmsService: FilmsService) {}
  getSortedFilms (param?: string, direction?: string, limit?: number): Observable<string[]> {
    return this.filmsService.getFilms().pipe(map(res => {
      let resp = res
      if (param) {
        resp = sort(res, param, direction)
      }
      if (limit) {
        resp = resp.slice(0, limit)
      }
      return resp
    }))
  }
}
