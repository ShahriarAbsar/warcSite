import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import Swiper core and required modules
import SwiperCore, {Autoplay, EffectCoverflow, EffectFade, Navigation, Pagination} from 'swiper';
// install Swiper modules
SwiperCore.use([EffectCoverflow, EffectFade, Autoplay, Pagination, Navigation]);



@Injectable({
  providedIn: 'root'
})
export class CarouselService {



}
