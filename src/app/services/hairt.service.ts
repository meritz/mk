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
      firstImage: '../../assets/imgs/imag1/1.jpg' ,
      description: [
                '../../assets/imgs/imag1/1.jpg',
               '../../assets/imgs/imag1/2.jpg',
               '../../assets/imgs/imag1/3.jpg',
               '../../assets/imgs/imag1/4.jpg',
      ],
    },
    {
      name: 'MK style',
      listing: 210,
      firstImage: '../../assets/imgs/img2/1.jpg' ,
      description: [
              '../../assets/imgs/img2/1.jpg',
               '../../assets/imgs/img2/2.jpg',
               '../../assets/imgs/img2/3.jpg',
               '../../assets/imgs/img2/4.jpg',
      ],
    },
    {
      name: 'zozo',
      listing: 220,
      firstImage: '../../assets/imgs/img3/1.jpg' ,
      description: [
        '../../assets/imgs/img2/1.jpg',
               '../../assets/imgs/img3/2.jpg',
               '../../assets/imgs/img3/3.jpg',
               '../../assets/imgs/img3/4.jpg',
                ],
    },
    {
      name: 'kofi',
      listing: 270,
      firstImage: '../../assets/imgs/img4/1.jpg' ,
      description: [
        '../../assets/imgs/img4/1.jpg',
               '../../assets/imgs/img4/2.jpg',
               '../../assets/imgs/img4/3.jpg',
               '../../assets/imgs/img4/4.jpg',
                ],
    },
    {
      name: 'herve',
      listing: 280,
      firstImage: '../../assets/imgs/img5/1.jpg' ,
      description: [
        '../../assets/imgs/img5/1.jpg',
               '../../assets/imgs/img5/2.jpg',
               '../../assets/imgs/img5/3.jpg',
               '../../assets/imgs/img5/4.jpg',
               ],
    },
  ];
}
