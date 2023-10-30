import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private refreshTeam = new Subject();
  private refreshService = new Subject();
  private refreshContact = new Subject();
  private refreshWarc = new Subject();
  private refreshProject = new Subject();
  constructor() { }

  /***
   *  REFRESH AND SCROLLING SECTION
   */

  get refreshTeam$(){
    return this.refreshTeam;
  }
  
  needRefreshTeam$(data:boolean){
       this.refreshTeam.next(data);
  }

  get refreshService$(){
    return this.refreshService;
  }
  
  needRefreshService$(data:boolean){
       this.refreshService.next(data);
  }

  
  get refreshContact$(){
    return this.refreshContact;
  }
  
  needRefreshContact$(data:boolean){
       this.refreshContact.next(data);
  }

  get refreshWarc$(){
    return this.refreshWarc;
  }
  
  needRefreshWarc$(data:boolean){
       this.refreshWarc.next(data);
  }

  get refreshProject$(){
    return this.refreshProject;
  }
  
  needRefreshProject$(data:number){
       this.refreshProject.next(data);
  }


}
