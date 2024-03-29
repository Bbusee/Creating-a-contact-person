import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';

import { CreateModel } from 'src/rehberModel/Createuser';
import { LoginModel } from 'src/rehberModel/LoginModel';
import { LoginResponse } from 'src/rehberModel/LoginResponse';
import { getuserIdModel } from 'src/rehberModel/getuserId';
import { updateModel } from 'src/rehberModel/updateuserId';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private Http:HttpClient) { }

  link:string ='https://localhost:44378/api/User/'

postuserLogin(loginModel:LoginModel):Observable<LoginResponse>{
  return this.Http.post<LoginResponse>(
    `${this.link}Login`,loginModel
  );
}
postuserCreateuser(CreateModel:CreateModel):Observable<CreateModel>{
  return this.Http.post<CreateModel>(
  `${this.link}CreateUser`,CreateModel
  );
}
UpdateuserId(userId:string,updateModel:updateModel):Observable<updateModel>{
  return this.Http.put<updateModel>(
    `${this.link}UpdateUser/${userId}`,updateModel
  );
}
GetuserId(userId:string):Observable<getuserIdModel>{
  return this.Http.get<getuserIdModel>(
   `${this.link}${userId}`
  );
}
GetuserAll():Observable<getuserIdModel[]>{
  return this.Http.get<getuserIdModel[]>(
`${this.link}all`
  );
}
DeleteuserId(userId:string):Observable<void>{
  
  return this.Http.delete<void>(
`${this.link}DeleteUser/${userId}`);
  
}
logout(){
  localStorage.clear();
}
  
GetDataFromLocal(){
  return localStorage.getItem('userId')
}

}
