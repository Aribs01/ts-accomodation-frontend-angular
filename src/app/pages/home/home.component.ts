import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { HallInterface } from 'src/app/interfaces/hall.interface';
import { RoomInterface } from 'src/app/interfaces/room.interface';
import { HallApiService } from 'src/app/services/hall-api.service';
import { RoomApiService } from 'src/app/services/room-api.service';
import { ConfirmationDialogComponent } from 'src/app/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  hallList!: HallInterface[];
  roomListArr!: RoomInterface[][];

  selectedHall!: string;

  matricNo: string = '000000001';

  getHallListSub!: Subscription;
  getRoomByHallIdSub!: Subscription;

  floorMapping: { [key: string]: string } = {
    '1': 'First Floor',
    '2': 'Second Floor',
    '3': 'Third Floor',
    '4': 'Fouth Floor',
    '5': 'Fifth Floor',
  };

  constructor(
    private hallApiService: HallApiService,
    private roomApiService: RoomApiService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllHalls();
  }

  getAllHalls() {
    this.getHallListSub = this.hallApiService
      .getAllHalls()
      .subscribe((halls: HallInterface[]) => {
        this.hallList = halls;
        this.selectedHall = this.hallList[0].hallId;
        this.getRoomsByHallId(this.selectedHall);
      });
  }

  getRoomsByHallId(hallId: string) {
    this.getRoomByHallIdSub = this.roomApiService
      .getRoomsByHallId(hallId)
      .subscribe((rooms: RoomInterface[][]) => {
        this.roomListArr = rooms;
      });
  }

  onHallSelectionChange() {
    this.getRoomsByHallId(this.selectedHall);
  }

  calculateTotalSpacesLeft(room: RoomInterface[]): number {
    return room.reduce((total, room) => total + room.spacesLeft, 0);
  }

  confirmRoomSelection(halls: RoomInterface) {
    this.dialog.open(ConfirmationDialogComponent, {
      data: {
        halls: { ...halls },
        matricNo: this.matricNo,
      },
      autoFocus: true,
      panelClass: 'opt-dialog',
      backdropClass: 'opt-dialog-backdrop',
    });
  }

  ngOnDestroy(): void {
    if (this.getHallListSub) {
      this.getHallListSub.unsubscribe();
    }

    if (this.getRoomByHallIdSub) {
      this.getRoomByHallIdSub.unsubscribe();
    }
  }
}
