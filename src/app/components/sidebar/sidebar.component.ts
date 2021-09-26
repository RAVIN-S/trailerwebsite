import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: 'dashboard', title: 'Dashboard',  icon:'fas fa-desktop text-red', class: '' },
  { path: 'rolemanagement', title: 'Role Management',  icon:'fas fa-id-card-alt text-red', class: '' },
  { path: 'employeemanagement', title: 'Employee Management',  icon:'fas fa-user-friends text-red', class: '' },
    { path: 'usermanagement', title: 'User Management',  icon:'ni-single-02 text-red', class: '' },
    { path: 'usertripdetails', title: 'User Trip Details',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: 'bookingdetails', title: 'Booking Details',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: 'trailersadding', title: 'Trailers Adding',  icon:'ni-fat-add text-red', class: '' },
    { path: 'locations', title: 'Locations',  icon:'ni-pin-3 text-red', class: '' },
    { path: 'reports', title: 'Reports',  icon:'ni-single-copy-04 text-red', class: '' },




];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
