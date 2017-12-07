import { Injectable } from '@angular/core';
import{BehaviorSubject} from 'Rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GitService {
  user=new BehaviorSubject([]);
  temp;
  constructor(private _http:HttpClient) { }
  getScoreOf(username){
    this.temp=this._http.get(`https://api.github.com/users/${username}`);
    console.log(`https://api.github.com/users/${username}`);
    this.temp.subscribe((user)=>{this.user.next(user);});
  }
}
 