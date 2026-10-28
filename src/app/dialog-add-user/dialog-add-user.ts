import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Firestore } from '@angular/fire/firestore';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {User as UserModel } from '../../models/user.class';

@Component({
  imports: [MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  selector: 'app-dialog-add-user',
  styleUrl: './dialog-add-user.scss',
  templateUrl: './dialog-add-user.html',
})
export class DialogAddUser {
    user = new UserModel();
    private firestore = inject(Firestore);

    constructor(){ }

    ngOnInit(): void {

    }

    saveUser(){
      const birthTimestamp = this.user.birthDate?.getTime() ?? null;
      console.log('Current user is', this.user, birthTimestamp);
      
    }
}
