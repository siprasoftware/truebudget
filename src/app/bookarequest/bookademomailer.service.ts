import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";
import { environment } from "../../environments/environment";

@Injectable()
export class BookademomailerService {

  constructor(private http: HttpClient) { }
  emailService(newvalue: any) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post(environment.apiUrl + "bookademoform", newvalue)
      .map((res: Response) => res);
  }
}
