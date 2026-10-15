import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';

import {MatDialog} from '@angular/material/dialog';
import { DialogAddUser } from '../dialog-add-user/dialog-add-user';

@Component({
  imports: [MatIconModule, MatButtonModule,MatTooltipModule],
  selector: 'app-user',
  styleUrl: './user.scss',
  templateUrl: './user.html',
})
export class User implements OnInit{

  constructor(public dialog:MatDialog){ }

  ngOnInit(): void {
    // Initialisierungscode kommt hier hin
  }

  openDialog(){
    this.dialog.open(DialogAddUser);

  }
}
