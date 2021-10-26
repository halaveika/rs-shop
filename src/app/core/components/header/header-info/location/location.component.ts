import { Component} from '@angular/core';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {
  public ip ='';
  public country = '';
  public city ='';
  public cities:string[] = ['Brest', 'Minsk', 'Homel', 'Mogilev', 'Vitebsk', 'Grodno']
  constructor() {

    fetch("https://ipinfo.io/json?token=0b41b31ee70713").then(
      (response) => response.json()
    ).then(
      (jsonResponse) =>{
        this.ip = jsonResponse.ip;
        this.country = jsonResponse.country;
        this.city = jsonResponse.city;
        console.log(jsonResponse.ip, jsonResponse.country)}
    )



   }

 }
