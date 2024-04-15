import Card from "./Card";

export default class  Deck{

    public name!: string;
    public cards!: Card[]; 
    
    constructor(cards:Card[]){
        this.cards = cards;
    }

    

   
}