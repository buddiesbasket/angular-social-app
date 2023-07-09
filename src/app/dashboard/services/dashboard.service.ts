import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry } from 'rxjs';
import { IDeveloper } from '../models/IDeveloper';
import { environment } from 'environments/environment';
import { ErrorHandlerUtil } from 'src/app/errorHandlerUtil';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  
  constructor(private httpClient: HttpClient) { }

  //load all developers
  public loadDevelopers():Observable<{developers: IDeveloper[]}>{
    let dataURL = `${environment.apiUrl}/profiles/`;
    return this.httpClient.get<{developers: IDeveloper[]}>(dataURL).pipe(
      retry(1),
      catchError(ErrorHandlerUtil.handleError)
    )
  }

  //load a single developer
  public loadDeveloper(developerId: string):Observable<{developer: IDeveloper}>{
    let dataURL = `${environment.apiUrl}/profiles/users/${developerId}`;
    return this.httpClient.get<{developer: IDeveloper}>(dataURL).pipe(
      retry(1),
      catchError(ErrorHandlerUtil.handleError)
    )
  }
}
