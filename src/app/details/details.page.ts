import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  images = ['../../assets/imgs/1.jpg',
             '../../assets/imgs/2.jpg',
              '../../assets/imgs/11.jpg',
               '../../assets/imgs/10.jpg',
               '../../assets/imgs/9.jpg',
               '../../assets/imgs/8.jpg',
               '../../assets/imgs/7.jpg'];

  constructor() { }

  ngOnInit() {
  }

}
