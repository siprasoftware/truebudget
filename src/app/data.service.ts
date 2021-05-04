import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { map } from "rxjs/operators";
import { environment } from "../environments/environment";

@Injectable()
export class DataService {
  scrolled: any;
  constructor(public http: HttpClient) {
    this.scrolled = false;
  }

  uploadwcform(data) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post<any>(environment.apiUrl + "workerscompensationform", data)
      .map((response: Response) => response);
  }

  setScrolled(value) {
    this.scrolled = value;
  }

  getScrolled() {
    return this.scrolled;
  }
}
