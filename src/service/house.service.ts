import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HouseDto} from "../model/house";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  private URL = "http://192.168.1.9:8080";

  public currentIDHouse!: string;

  public houseIdenticate: boolean = false;

  constructor(private http: HttpClient) { }

  addHouse(houseDto: HouseDto): Observable<HouseDto>{
    return this.http.post<HouseDto>(this.URL + "/house/add", houseDto);
  }

  connectHouse(houseDto: HouseDto): Observable<string>{
    return this.http.post<string>(this.URL + "/house/connect", houseDto);
  }

  saveIdHouse(id: string){
    localStorage.setItem('identificationID', id);

    this.currentIDHouse = id;
    this.houseIdenticate = true;
  }
}
