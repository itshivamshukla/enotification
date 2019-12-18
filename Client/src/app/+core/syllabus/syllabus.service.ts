import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfiguration } from 'src/app/+shared/configuration/app-configuration';
import { Observable } from 'rxjs/internal/Observable';
import { Syllabus } from 'src/app/+shared/models/syllabus';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../+shared/error-handler/error-handler';

@Injectable({
  providedIn: 'root'
})
export class SyllabusService {
  private handleError: HandleError;

  constructor(
    private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('SyllabusService');
  }

  /** GET heroes from the server */
  getSyllabus(): Observable<Syllabus[]> {
    return this.http.get<Syllabus[]>(AppConfiguration.baseUrl + 'getAllSyllabus')
      .pipe(
        catchError(this.handleError('getSyllabus', []))
      );
  }
}
