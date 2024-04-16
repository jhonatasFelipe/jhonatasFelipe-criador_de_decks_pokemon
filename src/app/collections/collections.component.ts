import { Component } from '@angular/core';
import Collection from '../Classes/Collection';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent {
  public collection!: Collection;

  constructor(private Router:Router){
    this.collection = new Collection(); 
  }


  goToDetails(index:number){
    this.Router.navigate(['deck','detalhes',index]);
  }

  goToEdit(index:number){
    this.Router.navigate(['deck','edit',index]);
  }

  goToNewDeck(){
    this.Router.navigate(['deck','new-deck']);
  }



}
