import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";
import { environment } from "../../environments/environment";

@Injectable()
export class MailerService {
  constructor(private _http: HttpClient) {}
  MailerService(newvalue: any) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this._http
      .post(environment.apiUrl + "supportForm", newvalue)
      .map((response: Response) => response);
  }

  subscribe(data: any) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this._http
      .post(`${environment.apiUrl}truebudget/subscribe`, data)
      .map((response: Response) => response);
  }
}
