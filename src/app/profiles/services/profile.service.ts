import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, catchError, retry } from 'rxjs';
import { IProfile } from '../models/IProfile';
import { ErrorHandlerUtil } from 'src/app/errorHandlerUtil';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  //load a profile
  public loadProfile():Observable<{profile: IProfile}>{
    let dataUrl = `${environment.apiUrl}/profiles/me`;
    return this.httpClient.get<{profile: IProfile}>(dataUrl).pipe(
      retry(1),
      catchError(ErrorHandlerUtil.handleError)
    );
  }

  //delete an experience
  public deleteExperience(expId: string):Observable<{result: string, profile: IProfile}>{
    let dataUrl = `${environment.apiUrl}/profiles/experience/${expId}`;
    return this.httpClient.delete<{result: string, profile: IProfile}>(dataUrl).pipe(
      retry(1),
      catchError(ErrorHandlerUtil.handleError)
    );
  }

    //delete an education
    public deleteEducation(eduId: string):Observable<{result: string, profile: IProfile}>{
      let dataUrl = `${environment.apiUrl}/profiles/education/${eduId}`;
      return this.httpClient.delete<{result: string, profile: IProfile}>(dataUrl).pipe(
        retry(1),
        catchError(ErrorHandlerUtil.handleError)
      );
    }

//     //update an education
//     public updateEducation():Observable<{profile: IProfile}>{
//       let dataUrl = `${environment.apiUrl}/profiles/education`;
//       return this.httpClient.put<{profile: IProfile}>(dataUrl).pipe(
//         retry(1),
//         catchError(ErrorHandlerUtil.handleError)
//       );
//     }
}
