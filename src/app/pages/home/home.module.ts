import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServiceComponent } from './our-service/our-service.component';
import { OurService2Component } from './our-service2/our-service2.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { SwiperModule } from 'swiper/angular';
import { WarcDetailsComponent } from './warc-details/warc-details.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    AboutUsComponent,
    OurServiceComponent,
    OurService2Component,
    OurTeamComponent,
    WarcDetailsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule
  ]
})
export class HomeModule { }
