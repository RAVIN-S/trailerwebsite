import { Routes } from '@angular/router';
import { BookingDetailsComponent } from 'src/app/pages/booking-details/booking-details.component';
import { EmployeeManagementComponent } from 'src/app/pages/employee-management/employee-management.component';
import { LocationsComponent } from 'src/app/pages/locations/locations.component';
import { RoleManagementComponent } from 'src/app/pages/role-management/role-management.component';
import { TrailerAddingComponent } from 'src/app/pages/trailer-adding/trailer-adding.component';
import { UserManagementComponent } from 'src/app/pages/user-management/user-management.component';
import { UserTripDetailsComponent } from 'src/app/pages/user-trip-details/user-trip-details.component';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    {path :'rolemanagement',component :RoleManagementComponent},
    {path :'employeemanagement',component :EmployeeManagementComponent},
    {path :'usermanagement',component :UserManagementComponent},
    {path :'usertripdetails',component :UserTripDetailsComponent},
    {path :'bookingdetails',component:BookingDetailsComponent},
    {path :"trailersadding" ,component:TrailerAddingComponent},
    {path :"locations" ,component:LocationsComponent}

];
