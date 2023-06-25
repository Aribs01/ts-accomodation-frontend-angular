import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';
import { HallInterface } from '../interfaces/hall.interface';
import { Observable } from 'rxjs';
import { RoomInterface } from '../interfaces/room.interface';

@Injectable({
  providedIn: 'root',
})
export class RoomApiService {
  constructor(private http: HttpClient) {}

  getRoomsByHallId(hallId: string): Observable<RoomInterface[]> {
    return this.http.get<RoomInterface[]>(
      environments.AccomodationBackendUrl + `rooms?hallId=${hallId}`
    );
  }
}
