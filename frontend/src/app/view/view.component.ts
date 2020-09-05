import { Component, OnInit } from '@angular/core';
import {LoginServiceService as dbservice} from '../service/login-service.service'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private dbservice: dbservice) { }
  private universities;
  selected=0;

  ngOnInit() {
    this.dbservice.lists.subscribe(lists => this.universities = lists);
    this.dbservice.getuniversities();
  }
  onupdate(university){
    this.dbservice.updateuniversity(university[0].uid,university[0]).subscribe(res=> {
      console.log("Updated");
      this.selected=0;
    });
    
  }
  ondelete(event){
    console.log(event[0]);
    this.dbservice.deleteuniversity(event[0]);
  }


}
