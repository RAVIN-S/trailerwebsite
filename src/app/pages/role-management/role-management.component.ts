import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.css']
})
export class RoleManagementComponent implements OnInit {
  public actions=[
    {
      value:'edit', name:'Edit',
    }
    ,{
      value:'delete', name:'Delete',
    }
  ];
  public edit=false;

  constructor() { }

  ngOnInit(): void {
  }
  public actionSelected(action){
    switch(action){
      case 'edit':
        this.edit=!this.edit;
        break;
      case 'delete':
      //
    }
  }

}
