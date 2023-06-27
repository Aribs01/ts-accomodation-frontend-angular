import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';
import { HallInterface } from '../interfaces/hall.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HallApiService {
  constructor(private http: HttpClient) {}

  getAllHalls(): Observable<HallInterface[]> {
    return this.http.get<HallInterface[]>(
      environments.AccomodationBackendUrl + 'halls'
    );
  }
}
