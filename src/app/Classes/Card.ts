import Ability from "./Ability";
import AncientTrait from "./AncientTrait";
import Attack from "./Attack";
import Legality from "./Legality";
import Resistance from "./Resistances";
import Weaknesse from "./Weaknesse";
import Set from "./Set";
import Image from "./Image";

export default class Card{
    public id!: string;
    public name!: string
    public supertype!: string
    public subtypes!: Array<string>
    public level!: string
    public hp!: string
    public types !: Array<string>
    public evolvesFrom !: string
    public evolvesTo !: Array<string>
    public rules!: string[]
    public ancientTrait!: AncientTrait
    public abilities!: Ability[]
    public attacks!: Attack[]
    public weaknesses!: Weaknesse[]
    public resistances!: Resistance[]
    public retreatCost !: Array<string>
    public convertedRetreatCost!: number
    public set!: Set
    public "number"!: string
    public artist!: string
    public rarity!: string
    public flavorText !: string
    public nationalPokedexNumbers!: Array<number>
    public legalities!: Legality
    public regulationMark!: string
    public images!: Image
    // tcgplayer hash
    // cardmarket hash

}