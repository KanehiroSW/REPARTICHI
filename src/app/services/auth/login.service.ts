import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tienda } from './Tienda';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = `${environment.urlHost}auth/tienda`;

  private currentUserSubject: BehaviorSubject<Tienda | null>;
  public currentUser: Observable<Tienda | null>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Tienda | null>(null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  register(tiendaData: any, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('tienda', new Blob([JSON.stringify(tiendaData)], { type: 'application/json' }));
    formData.append('file', file);

    return this.http.post(`${this.apiUrl}/register`, formData);
  }

  login(dniPropietario: string, password: string): Observable<Tienda> {
    return this.http.post<Tienda>(`${this.apiUrl}/login`, { dniPropietario, password })
      .pipe(tap(store => {
        this.currentUserSubject.next(store);
      }));
  }

  get currentUserValue(): Tienda | null {
    return this.currentUserSubject.value;
  }

  logout() {
    this.currentUserSubject.next(null);
  }
}