import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeckRoutingModule } from './deck-routing.module';
import { DeckComponent } from './deck.component';
import { CreateDeckComponent } from './create-deck/create-deck.component';
import { ReactiveFormsModule } from '@angular/forms';

import { 
	IgxButtonModule,
	IgxDialogModule,
	IgxRippleModule,
  IgxSelectModule,
	IgxInputGroupModule,
  IgxPaginatorModule,
  IgxCardModule,
  IgxListModule,
  IgxIconModule
 } from "igniteui-angular";
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    DeckComponent,
    CreateDeckComponent,
    DetailsComponent,
   
  ],
  imports: [
    CommonModule,
    DeckRoutingModule,
    ReactiveFormsModule,
    IgxButtonModule,
	  IgxDialogModule,
	  IgxRippleModule,
    IgxSelectModule,
	  IgxInputGroupModule,
    IgxPaginatorModule,
    IgxCardModule,
    IgxListModule,
    IgxIconModule
  ]
})
export class DeckModule { }
