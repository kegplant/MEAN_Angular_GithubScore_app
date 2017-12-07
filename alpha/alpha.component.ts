import { Component, OnInit,Input } from '@angular/core';
import {GitService} from '../Git.service';
@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
// @Input() component;
  @Input() location;
  username:string;
  score:number;
  user;
  constructor(private _GitService:GitService) { }
  
    ngOnInit() {
      this.username='kegplant';
      this._GitService.user.subscribe(
        (user)=>{this.user=user;}
      );

    }
    onClick(){
      this._GitService.getScoreOf(this.username);
            console.log(this.user.followers);
            console.log(this.user.public_repos);
            
            this.score=parseInt(this.user.public_repos)+parseInt(this.user.followers);
    }
 
  
}
