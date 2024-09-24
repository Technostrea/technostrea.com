import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataUrl = '/assets/data/home.json';
  private http: HttpClient = inject(HttpClient)

  getData(): Observable<any> {
    return this.http.get(this.dataUrl);
  }
}
