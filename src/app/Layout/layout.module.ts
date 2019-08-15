import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MaterialModule } from '../common/material/material-routing.module';
import { HeaderComponent } from './header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SlickModule } from 'ngx-slick';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CumRapComponent } from './cum-rap/cum-rap.component';
import { NewsComponent } from './news/news.component';



@NgModule({
  declarations: [LayoutComponent, HeaderComponent, CumRapComponent, NewsComponent],
  exports: [LayoutComponent],
  imports: [
    CommonModule,
    MaterialModule,
    LayoutRoutingModule,
    SlickModule,
    SlickCarouselModule
  ]
})
export class LayoutModule { }
