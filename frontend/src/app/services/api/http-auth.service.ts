import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpAuthService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }


  postLoginData(data: any): Observable<any> {
    const username = data["username"];
    const password = data["password"];
    return this.http.post<any>(`${this.apiUrl}/login?username=${username}&password=${password}`, {});
  }

  postRegistrationData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, data);
  }
}
