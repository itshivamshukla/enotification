import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfiguration } from 'src/app/+shared/configuration/app-configuration';
import { Observable } from 'rxjs/internal/Observable';
import { University } from 'src/app/+shared/models/university';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../+shared/error-handler/error-handler';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  private handleError: HandleError;

  constructor(
    private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('UniversityService');
  }

  /** GET heroes from the server */
  getUniversity(): Observable<University[]> {
    return this.http.get<University[]>(AppConfiguration.baseUrl + 'getAllUniversity')
      .pipe(
        catchError(this.handleError('getUniversity', []))
      );
  }
}
