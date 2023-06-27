import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    MatSelectModule,
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatTooltipModule,
    RouterModule.forChild(routes),
  ],
})
export class HomeModule {}
