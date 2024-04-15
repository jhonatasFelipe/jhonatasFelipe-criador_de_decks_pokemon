import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeckComponent } from './deck.component';
import { CreateDeckComponent } from './create-deck/create-deck.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: DeckComponent },
  { path: 'new-deck', component: CreateDeckComponent },
  { path: 'detalhes/:id', component: DetailsComponent },
  { path: 'edit/:id', component: CreateDeckComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeckRoutingModule { }
