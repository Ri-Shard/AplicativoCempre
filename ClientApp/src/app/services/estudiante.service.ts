import { Estudiante } from './../Solicitud/models/estudiante';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';

@Injectable({
    providedIn: 'root'
  })
  export class EstudianteService {
  
    baseUrl: string;
    constructor(
        private http: HttpClient,
        @Inject('BASE_URL') baseUrl: string,
        private handleErrorService: HandleHttpErrorService)
    {
        this.baseUrl = baseUrl;
    }
  
    get(): Observable<Estudiante[]> {
      return this.http.get<Estudiante[]>(this.baseUrl + 'api/Estudiante')
          .pipe(
              tap(_ => this.handleErrorService.log('datos enviados')),
              catchError(this.handleErrorService.handleError<Estudiante[]>('Consulta Estudiante', null))
          );
    }
  
    post(estudiante: Estudiante): Observable<Estudiante> {
      return this.http.post<Estudiante>(this.baseUrl + 'api/Estudiante', estudiante)
          .pipe(
              tap(_ => this.handleErrorService.log('datos enviados')),
              catchError(this.handleErrorService.handleError<Estudiante>('Registrar estudiante', null))
          );
  }
  
  }
  
