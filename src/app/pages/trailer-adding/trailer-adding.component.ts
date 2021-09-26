import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-trailer-adding',
  templateUrl: './trailer-adding.component.html',
  styleUrls: ['./trailer-adding.component.css']
})
export class TrailerAddingComponent implements OnInit {
  @ViewChild("viewDetails") viewDetails: TemplateRef<any>;

  public actions=[
    {
      value:'edit', name:'Edit',
    }
    ,{
      value:'delete', name:'Delete',
    }
    ,{
      value:'view', name:'View Details',
    }
  ];
  constructor(public modelService:NgbModal) { }

  ngOnInit(): void {
  }

  public actionSelected(action){
    switch(action){
      case 'view':
      this.modelService.open(this.viewDetails);
    }
  }
}
