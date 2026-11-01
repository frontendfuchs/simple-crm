import { Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { CollectionReference } from 'firebase/firestore';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogAddUser } from '../dialog-add-user/dialog-add-user';
import {User as UserModel } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

@Component({
  imports: [MatIconModule, 
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule, 
    FormsModule,
    MatCardModule
  ],
  selector: 'app-user',
  styleUrl: './user.scss',
  templateUrl: './user.html',
})
export class User implements OnInit{

  user = new UserModel();
  private firestore = inject(Firestore);

  users = toSignal(
    collectionData(
      collection(this.firestore, 'users') as CollectionReference<UserModel>,
      { idField: 'id' }
    ),
    { initialValue: [] }
  );

  constructor(public dialog:MatDialog){ }

  ngOnInit(): void {
    // Initialisierungscode kommt hier hin
  }

  openDialog(){
    this.dialog.open(DialogAddUser, {
      width: '440px',
      maxWidth: '90vw',
      panelClass: 'add-user-dialog',
    });

  }
}
