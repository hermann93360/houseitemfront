import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HouseDto} from "../model/house";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  private URL = environment.URL;


  public currentIDHouse!: string | null;

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

  loadId(){
    this.currentIDHouse = localStorage.getItem('identificationID')
  }
  getIdHouse(): any{
    this.loadId();
    return this.currentIDHouse;
  }

  isConnect(){
    this.loadId();
    return this.currentIDHouse != null || this.currentIDHouse != undefined
  }

  logoutHouse(){
    localStorage.removeItem('identificationID')
  }
}
