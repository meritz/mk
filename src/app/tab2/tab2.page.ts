import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FirestoreMessagService } from '../services/firestore-messag.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  public createMessageForm: FormGroup;

  constructor(public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public firestoreMessagService: FirestoreMessagService,
    private router: Router,
    formBuilder: FormBuilder) {

      this.createMessageForm = formBuilder.group({
        nomEmet: ['', Validators.required],
        nomPrenom: ['', Validators.required],
        telephone: ['', Validators.required],
        rendDate: ['', Validators.required],
      });
     }

  ngOnInit() {
  }

  async createMessage() {
    const loading = await this.loadingCtrl.create();

    const nomEmet = this.createMessageForm.value.nomEmet;
    const nomPrenom = this.createMessageForm.value.nomPrenom;
    const telephone = this.createMessageForm.value.telephone;
    const rendDate = this.createMessageForm.value.rendDate;
    const createdAt = new Date().getTime();

    this.firestoreMessagService.createMessage(nomEmet, nomPrenom, telephone, rendDate, createdAt)
    .then(
      () => {
        loading.dismiss().then(() => {
           this.router.navigateByUrl('');
          // this.router.navigate(['dedicace']);
        });
      },
      error => {
        console.error(error);
      }
    );

  return await loading.present();
   }
}
