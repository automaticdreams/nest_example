import { Module, HttpModule } from '@nestjs/common'
import { AppController } from './app.controller'
import { FilmsService } from './services/films/films.service'
import { SortedfilmService } from './services/films/sortedfilm.service'

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [FilmsService, SortedfilmService]
})
export class AppModule {}
