import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogAddUser } from '../dialog-add-user/dialog-add-user';
import {User as UserModel } from '../../models/user.class';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [MatIconModule, MatButtonModule,MatTooltipModule,MatDialogModule, FormsModule],
  selector: 'app-user',
  styleUrl: './user.scss',
  templateUrl: './user.html',
})
export class User implements OnInit{

  user = new UserModel();

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
