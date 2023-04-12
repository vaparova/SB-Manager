import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarboardComponent } from './carboard/carboard.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        DashboardComponent,
        CarboardComponent
    ],
    exports: [
        DashboardComponent,
        CarboardComponent
    ]
})
export class ComponentsModule{}