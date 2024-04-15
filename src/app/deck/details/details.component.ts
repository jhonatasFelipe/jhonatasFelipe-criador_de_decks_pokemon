import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Card from 'src/app/Classes/Card';
import Collection from 'src/app/Classes/Collection';
import Deck from 'src/app/Classes/Deck';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{

  public deck!: Deck;
  public TrainersCards!: number;

  constructor(private activeRoute:ActivatedRoute){

  }

  ngOnInit(): void {
    let index = this.activeRoute.snapshot.paramMap.get('id');
    console.log(index);
    if(index){
      let collection = new Collection();
      this.deck = collection.decks[parseInt(index)];
    }
    
  }

  getAmouthTrainers(): number{
    return this.deck.cards.filter((item)=>( item.supertype === 'Trainer')).length
  }

  getAmouthPokemon(): number{
      return this.deck.cards.filter((item)=>( item.supertype === 'Pokémon')).length
  }

  getAmouthEnergy(): number{
      return this.deck.cards.filter((item)=>( item.supertype === 'Energy')).length
  }

  getDistinctTypes(){
      let types:string[] = [];
      this.deck.cards.forEach((card:Card)=>{
        if(card.hasOwnProperty('types')){
          card.types.forEach((type)=>{
            if(!types.includes(type)){
                types.push(type);
            }
          });
        } 
      });

    return types.length;
}

}
