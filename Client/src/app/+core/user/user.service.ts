import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfiguration } from 'src/app/+shared/configuration/app-configuration';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/+shared/models/user';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../+shared/error-handler/error-handler';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private handleError: HandleError;

  constructor(
    private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('UserService');
  }

  /** GET heroes from the server */
  getUser(): Observable<User[]> {
    return this.http.get<User[]>(AppConfiguration.baseUrl + 'getAllUser')
      .pipe(
        catchError(this.handleError('getUser', []))
      );
  }
}
