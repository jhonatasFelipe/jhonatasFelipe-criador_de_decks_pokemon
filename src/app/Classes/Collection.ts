import Deck from "./Deck";

export default class Collection{

    public decks!: Deck[];

    constructor(){
        let collection =  sessionStorage.getItem('Collection');
        if(collection){
            this.decks = JSON.parse(collection);
        }else{
            this.decks = [];
        }
    }


    addDeck(deck:Deck):void{
        this.decks.push(deck);
        sessionStorage.setItem('Collection',JSON.stringify(this.decks));
    }

    removeDeck(index:number):void{
        this.decks.splice(index,1);
        sessionStorage.setItem('Collection',JSON.stringify(this.decks));
    }

}