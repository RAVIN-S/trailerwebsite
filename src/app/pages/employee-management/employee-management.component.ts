import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {
  @ViewChild("editEmployee") editEmployee: TemplateRef<any>;
  @ViewChild("viewEmployee") viewEmployee: TemplateRef<any>;
  public actions=[
    {
      value:'edit', name:'Edit',
    }
    ,{
      value:'delete', name:'Delete',
    }
    ,{
      value:'view', name:'View Only',
    }
  ];
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  public actionSelected(action){
    switch(action){
      case 'edit':
        this.modalService.open(this.editEmployee);
        break;
        case 'view':
        this.modalService.open(this.viewEmployee);
    }
  }

}
