import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpProfileService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient,
    ) { }

    getUserProfile(userUUID: any): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/profile?user=${userUUID}`, {});
    }

    postUserProfile(data: any): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/profile`, data);
    }

}
