import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from 'src/app/Layout/header/header.component';
import { CarouselComponent } from 'src/app/Layout/carousel/carousel.component';
import { SlickModule } from 'ngx-slick';
import { PhimComponent } from 'src/app/Layout/phim/phim.component';
import { MaterialModule } from 'src/app/common/material/material-routing.module';
import { CumRapComponent } from 'src/app/Layout/cum-rap/cum-rap.component';
import { NewsComponent } from 'src/app/Layout/news/news.component';





@NgModule({
  declarations: [HomeComponent, HeaderComponent, CarouselComponent, PhimComponent, CumRapComponent,NewsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    SlickModule,

  ]
})
export class HomeModule { }
