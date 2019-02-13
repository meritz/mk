import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class FirestoreMessagService {

  constructor(public firestore: AngularFirestore) { }

  createMessage(nomEmet: string, nomPrenom: string, telephone: string, rendDate: number, createdAt: number ): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.doc(`message/${id}`).set({
      id,
      nomEmet,
      nomPrenom,
      telephone,
      rendDate,
      createdAt,
    });
  }

  getMessageList(): AngularFirestoreCollection<Message> {
    return this.firestore.collection(`message`);
  }
}
