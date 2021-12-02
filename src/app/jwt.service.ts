import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtServiceService {

  constructor(private http : HttpClient) { }

 public loginToGenerateToken(authRequest: any){
   return this.http.post("http://localhost:8080/user/login.do",authRequest,{responseType:'text'});
 }
 public getProductService(token:any){
   const myobj = token
   console.log("myobj :"+myobj)
   const mytoken = JSON.parse(myobj)
   console.log("mytoken"+mytoken.jwt)

   let tokenStr = 'Bearer '+ mytoken.jwt;
   console.log(tokenStr)
   const headers = new HttpHeaders().set("Authorization",tokenStr)
   return this.http.get("http://localhost:8080/api/v1/products",{headers,responseType:'text'as 'json'})
 }
}