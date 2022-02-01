import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  public listAnimal: string[] | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.animal().subscribe(
      (value) => {
      this.listAnimal = value;
    })
  }

  animal(): Observable<string[]>{
    return this.http.get<string[]>("http://localhost:8080" + "/animal")
  }






  /*

  private url = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  sign(userDto: UserDto): Observable<boolean>{
    return this.http.post<boolean>(this.url + "/user/add", userDto);
  }
   */

}
