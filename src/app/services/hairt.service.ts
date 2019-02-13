import { Injectable } from '@angular/core';
import { Hairt } from '../models/Hairt';



@Injectable({
  providedIn: 'root'
})
export class HairtService {

  constructor() { }

  hairtList: Hairt[] = [
    {
      name: 'MK Style',
      listing: 20,
      firstImage: '../../assets/imgs/imag1/IMG-20190210-WA0049.jpg' ,
      description: [
                '../../assets/imgs/imag1/IMG-20190210-WA0036.jpg',
               '../../assets/imgs/imag1/IMG-20190210-WA0037.jpg',
               '../../assets/imgs/imag1/IMG-20190210-WA0046.jpg',
               '../../assets/imgs/imag1/IMG-20190210-WA0049.jpg',
               '../../assets/imgs/imag1/IMG-20190210-WA0040.jpg',
              '../../assets/imgs/imag1/IMG-20190210-WA0041.jpg',
               '../../assets/imgs/imag1/IMG-20190210-WA0042.jpg',
               '../../assets/imgs/imag1/IMG-20190210-WA0045.jpg',
               '../../assets/imgs/imag1/IMG-20190210-WA0046.jpg',
              '../../assets/imgs/imag1/IMG-20190210-WA0048.jpg',
               '../../assets/imgs/imag1/IMG-20190210-WA0049.jpg',
               '../../assets/imgs/imag1/IMG-20190210-WA0050.jpg',
      ],
    },
    {
      name: 'MK style',
      listing: 210,
      firstImage: '../../assets/imgs/img2/IMG-20190210-WA0058.jpg' ,
      description: [
              '../../assets/imgs/img2/IMG-20190210-WA0051.jpg',
               '../../assets/imgs/img2/IMG-20190210-WA0052.jpg',
               '../../assets/imgs/img2/IMG-20190210-WA0053.jpg',
               '../../assets/imgs/img2/IMG-20190210-WA0054.jpg',
               '../../assets/imgs/img2/IMG-20190210-WA0055.jpg',
              '../../assets/imgs/img2/IMG-20190210-WA0056.jpg',
               '../../assets/imgs/img2/IMG-20190210-WA0057.jpg',
               '../../assets/imgs/img2/IMG-20190210-WA0059.jpg',
      ],
    },
    {
      name: 'zozo',
      listing: 220,
      firstImage: '../../assets/imgs/2.jpg' ,
      description: [
        '../../assets/imgs/11.jpg',
               '../../assets/imgs/10.jpg',
               '../../assets/imgs/9.jpg',
               '../../assets/imgs/8.jpg',
               '../../assets/imgs/2.jpg',
              '../../assets/imgs/11.jpg',
               '../../assets/imgs/10.jpg',
               '../../assets/imgs/9.jpg',
      ],
    },
    {
      name: 'kofi',
      listing: 270,
      firstImage: '../../assets/imgs/2.jpg' ,
      description: [
        '../../assets/imgs/11.jpg',
               '../../assets/imgs/10.jpg',
               '../../assets/imgs/9.jpg',
               '../../assets/imgs/8.jpg',
               '../../assets/imgs/2.jpg',
              '../../assets/imgs/11.jpg',
               '../../assets/imgs/10.jpg',
               '../../assets/imgs/9.jpg',
      ],
    },
    {
      name: 'herve',
      listing: 280,
      firstImage: '../../assets/imgs/2.jpg' ,
      description: [
        '../../assets/imgs/11.jpg',
               '../../assets/imgs/10.jpg',
               '../../assets/imgs/9.jpg',
               '../../assets/imgs/8.jpg',
               '../../assets/imgs/2.jpg',
              '../../assets/imgs/11.jpg',
               '../../assets/imgs/10.jpg',
               '../../assets/imgs/9.jpg',
      ],
    },
  ];
}
