import { Injectable, HttpService } from '@nestjs/common'
import { catchError, map } from 'rxjs/operators'
import { Observable, of } from 'rxjs'

const externalURL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=dfbb6e71b4b1eb0d75c86a4504871cea'
@Injectable()
export class FilmsService {
  constructor (private http: HttpService) {}
  getFilms (): Observable<any[]> {
    return this.http.get(externalURL)
      .pipe(
        map(res => {
          return res.data.results ? res.data.results : []
        }),
        catchError(() => of([]))
      )
  }
}
