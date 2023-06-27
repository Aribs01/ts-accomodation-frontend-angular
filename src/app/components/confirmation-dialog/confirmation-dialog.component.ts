import { Component, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SaveRoomInterface } from 'src/app/interfaces/room.interface';
import { RoomApiService } from 'src/app/services/room-api.service';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
})
export class ConfirmationDialogComponent implements OnDestroy {
  saveBookingSub!: Subscription;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    private roomApiService: RoomApiService,
    private _snackBar: MatSnackBar
  ) {}

  confirmRoom() {
    const room: SaveRoomInterface = {
      hallId: this.data.halls.hallId,
      roomNo: this.data.halls.roomNo,
      matricNo: this.data.matricNo,
    };

    this.saveBookingSub = this.roomApiService
      .saveBooking(room)
      .subscribe(() => {
        this._snackBar.open('Room saved successfully', '', {
          panelClass: 'snackbar',
          verticalPosition: 'top',
          duration: 3000,
        });
        this.dialogRef.close();
      });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    if (this.saveBookingSub) {
      this.saveBookingSub.unsubscribe();
    }
  }
}
