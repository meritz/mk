import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { HairtService } from '../services/hairt.service';
import { Hairt } from '../models/Hairt';
// import { DetailsPage } from '../details/details.page';
import { DetailsmodalPage } from '../detailsmodal/detailsmodal.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  hairtList: Hairt [];

    constructor( private modalController: ModalController,
       private hairtService: HairtService, ) {}

  ngOnInit() {
  this.hairtList = this.hairtService.hairtList.slice();
  }

  async opendetail(img: any) {
    const modal = await this.modalController.create({
      component: DetailsmodalPage,
      componentProps: {
        custom_id: this.hairtService.hairtList = img,
      }
    });
    await modal.present();
  }


}

