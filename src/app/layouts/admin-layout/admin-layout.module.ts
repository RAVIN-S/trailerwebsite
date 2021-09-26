import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ToastrModule } from 'ngx-toastr';
import {RoleManagementComponent} from '../../pages/role-management/role-management.component';
import { EmployeeManagementComponent } from 'src/app/pages/employee-management/employee-management.component';
import { UserManagementComponent } from 'src/app/pages/user-management/user-management.component';
import { UserTripDetailsComponent } from 'src/app/pages/user-trip-details/user-trip-details.component';
import { BookingDetailsComponent } from 'src/app/pages/booking-details/booking-details.component';
import { TrailerAddingComponent } from 'src/app/pages/trailer-adding/trailer-adding.component';
import { LocationsComponent } from 'src/app/pages/locations/locations.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    TablesComponent,
    MapsComponent,
    RoleManagementComponent,
    EmployeeManagementComponent,
    UserManagementComponent,
    UserTripDetailsComponent,
    BookingDetailsComponent,
    TrailerAddingComponent,
    LocationsComponent
  ]
})

export class AdminLayoutModule {}
