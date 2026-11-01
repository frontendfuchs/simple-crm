import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Firestore, Timestamp, addDoc, collection } from '@angular/fire/firestore';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {User as UserModel } from '../../models/user.class';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@Component({
  imports: [MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatProgressBarModule
  ],
  selector: 'app-dialog-add-user',
  styleUrl: './dialog-add-user.scss',
  templateUrl: './dialog-add-user.html',
})
export class DialogAddUser {
    user = new UserModel();
    loading = signal(false);
    private firestore = inject(Firestore);
    private dialogRef = inject(MatDialogRef<DialogAddUser>);

    constructor(){ }

    ngOnInit(): void {

    }

    saveUser(){
      this.loading.set(true);

      const userData = {
        ...this.user.toJSON(),
        birthDate: this.user.birthDate ? Timestamp.fromDate(this.user.birthDate) : null,
      };

      addDoc(collection(this.firestore, 'users'), userData)
        .then((result) => {
          console.log('Adding user finished', result);
          this.dialogRef.close();
        })
        .catch((error) => console.error('Adding user failed', error))
        .finally(() => this.loading.set(false));
    }
}
