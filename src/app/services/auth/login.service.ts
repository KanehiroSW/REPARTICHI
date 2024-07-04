import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Repartidor } from './Repartidor';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = `${environment.urlHost}auth/repartidor`;

  private currentUserSubject: BehaviorSubject<Repartidor | null>;
  public currentUser: Observable<Repartidor | null>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Repartidor | null>(null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  register(RepartidorData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, RepartidorData);
  }

  login(dni: string, password: string): Observable<Repartidor> {
    return this.http.post<Repartidor>(`${this.apiUrl}/login`, { dni, password })
      .pipe(tap(repartidor => {
        this.currentUserSubject.next(repartidor);
      }));
  }

  get currentUserValue(): Repartidor | null {
    return this.currentUserSubject.value;
  }

  logout() {
    this.currentUserSubject.next(null);
  }
}