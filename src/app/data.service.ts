import { Injectable } from '@angular/core'
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get("https://intense-anchorage-68384.herokuapp.com/api/users")
  }
}
