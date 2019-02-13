import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, AlertController } from '@ionic/angular';
import { HairtService } from '../services/hairt.service';

@Component({
  selector: 'app-detailsmodal',
  templateUrl: './detailsmodal.page.html',
  styleUrls: ['./detailsmodal.page.scss'],
})
export class DetailsmodalPage implements OnInit {
  img;
  constructor(private alertCtrl: AlertController,
    private hairtService: HairtService,
    private modalController: ModalController,){ }

  ngOnInit() {
    this.img = this.hairtService.hairtList;
    console.log(this.hairtService.hairtList);
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
