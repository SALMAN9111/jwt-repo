import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JwtServiceService } from '../jwt.service';


@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  authRequest: any =
    {
      "username": "salman",
      "password": "salman"
    };
    response:any;
  constructor(private service: JwtServiceService) { }

  ngOnInit(): void {
    this.getAccessToken(this.authRequest)
  }

  public getAccessToken(authRequest: any) {
let resp = this.service.loginToGenerateToken(authRequest);
resp.subscribe(data=>console.log("token :"+data))
resp.subscribe(data=>console.log(this.getProductdetails(data)));

  }

  public getProductdetails(token: any){
let response = this.service.getProductService(token);
response.subscribe(data=>this.response=data);
  }
}