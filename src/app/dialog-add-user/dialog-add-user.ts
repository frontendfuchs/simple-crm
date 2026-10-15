import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [MatDialogModule,MatButtonModule],
  selector: 'app-dialog-add-user',
  styleUrl: './dialog-add-user.scss',
  templateUrl: './dialog-add-user.html',
})
export class DialogAddUser {}
