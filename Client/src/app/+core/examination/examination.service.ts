import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfiguration } from 'src/app/+shared/configuration/app-configuration';
import { Observable } from 'rxjs/internal/Observable';
import { Examination } from 'src/app/+shared/models/examination';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../+shared/error-handler/error-handler';

@Injectable({
  providedIn: 'root'
})
export class ExaminationService {
  private handleError: HandleError;

  constructor(
    private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('ExaminationService');
  }

  /** GET heroes from the server */
  getExamination(): Observable<Examination[]> {
    return this.http.get<Examination[]>(AppConfiguration.baseUrl + 'getAllExamination')
      .pipe(
        catchError(this.handleError('getExamination', []))
      );
  }
}
