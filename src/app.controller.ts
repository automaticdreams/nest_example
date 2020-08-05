import { Controller, Get, Param } from '@nestjs/common'
import { Observable } from 'rxjs'
import { SortedfilmService } from './services/films/sortedfilm.service'

@Controller()
export class AppController {
  constructor (private sortedfilmService: SortedfilmService) {
    this.sortedfilmService = sortedfilmService
  }

  @Get()
  getFilms (): Observable<string[]> {
    return this.sortedfilmService.getSortedFilms()
  }

  @Get('/sort/title')
  getSortedFilmsTitle (): Observable<string[]> {
    return this.sortedfilmService.getSortedFilms('title')
  }

  @Get('/sort/title/:id')
  getSortedFilmsTitleLimit (@Param('id') id: number): Observable<string[]> {
    return this.sortedfilmService.getSortedFilms('title', '', id)
  }

  @Get('/sort/titlerev')
  getSortedFilmsTitleRev (): Observable<string[]> {
    return this.sortedfilmService.getSortedFilms('title', 'rev')
  }

  @Get('/sort/titlerev/:id')
  getSortedFilmsTitleRevLimit (@Param('id') id: number): Observable<string[]> {
    return this.sortedfilmService.getSortedFilms('title', 'rev', id)
  }

  @Get('/sort/scorehighlow')
  getSortedFilmsScore (): Observable<string[]> {
    return this.sortedfilmService.getSortedFilms('vote_average', 'rev')
  }

  @Get('/sort/scorehighlow/:id')
  getSortedFilmsScoreLimit (@Param('id') id: number): Observable<string[]> {
    return this.sortedfilmService.getSortedFilms('vote_average', 'rev', id)
  }

  @Get('/sort/scorelowhigh')
  getSortedFilmsScoreRev (): Observable<string[]> {
    return this.sortedfilmService.getSortedFilms('vote_average')
  }

  @Get('/sort/scorelowhigh/:id')
  getSortedFilmsScoreRevLimit (@Param('id') id: number): Observable<string[]> {
    return this.sortedfilmService.getSortedFilms('vote_average', '', id)
  }

  @Get(':id')
  getLimitedFilms (@Param('id') id: number): Observable<string[]> {
    return this.sortedfilmService.getSortedFilms('', '', id)
  }
}
