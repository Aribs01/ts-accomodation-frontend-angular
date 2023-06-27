import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments';
import { RoomInterface, SaveRoomInterface } from '../interfaces/room.interface';

@Injectable({
  providedIn: 'root',
})
export class RoomApiService {
  constructor(private http: HttpClient) {}

  getRoomsByHallId(hallId: string): Observable<RoomInterface[][]> {
    return this.http.get<RoomInterface[][]>(
      environments.AccomodationBackendUrl + `rooms?hallId=${hallId}`
    );
  }

  saveBooking(saveRoomPayload: SaveRoomInterface) {
    return this.http.post<boolean>(
      environments.AccomodationBackendUrl + 'rooms',
      saveRoomPayload
    );
  }
}
