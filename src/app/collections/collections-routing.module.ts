import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { CollectionsComponent } from './collections.component';


const ColletionsRoutes: Routes = [
  {
    path: '',
    component: CollectionsComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ColletionsRoutes)
  ],
  exports:[RouterModule]
})
export class CollectionsRoutingModule { }
