import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { rehberAll } from 'src/rehberModel/rehberAll.model';
import { RehberId } from 'src/rehberModel/rehberModel';


@Injectable({
  providedIn: 'root'
})
export class Rehberservice{

  constructor(private http:HttpClient) { }

  link:string='https://localhost:44378/api/Rehber/'


  postRehberId(userId:string,RehberId:RehberId):Observable< void>
{
  return this.http.post<void>(`${this.link}${userId}`,RehberId);
}
getRehberUserId(userId:string):Observable<rehberAll[]>
{
  return this.http.get<rehberAll[]>(`${this.link}${userId}` );
}

getRehberAll():Observable<rehberAll[]>
{
  return this.http.get<rehberAll[]>(`${this.link}all`);
}

getRehberId(userId:string,id:string):Observable<RehberId>
{
  return this.http.get<RehberId>(`${this.link}${userId}/${id}`);
}

updateRehberId(id:string,rehberId:RehberId):Observable<void>
{
  return this.http.put<void>(`${this.link}${id}`,rehberId);
}
deleteRehberId(id:string):Observable<void>
{
  return this.http.delete<void>(`${this.link}${id}`);
}

}
