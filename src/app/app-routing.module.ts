import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';


const routes: Routes = [

  { 
    path: "", 
    redirectTo:"collections",
    pathMatch: 'full'
  },
  {
    path: 'collections',
    loadChildren: ()=> import('./collections/collections.module').then( m => m.CollectionsModule)
  },
  { path: 'deck', loadChildren: () => import('./deck/deck.module').then(m => m.DeckModule) }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule]
})
export class AppRoutingModule { }
