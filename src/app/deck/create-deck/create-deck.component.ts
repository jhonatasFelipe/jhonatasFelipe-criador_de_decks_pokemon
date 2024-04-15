import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IgxButtonDirective, IgxDialogComponent } from 'igniteui-angular';
import Card from 'src/app/Classes/Card';
import Deck from 'src/app/Classes/Deck';
import Collection from 'src/app/Classes/Collection';
import { CardService } from 'src/app/services/card.service';
import { RaritiesService } from 'src/app/services/rarities.service';
import { SubTypesService } from 'src/app/services/sub-types.service';
import { SuperTypesService } from 'src/app/services/super-types.service';
import { TypesService } from 'src/app/services/types.service';
import { ActivatedRoute, Router } from '@angular/router';


interface Filter{
  page: number;
  pageSize: number;
  q: string;
  orderBy:string
}

@Component({
  selector: 'app-create-deck',
  templateUrl: './create-deck.component.html',
  styleUrls: ['./create-deck.component.scss'],
})
export class CreateDeckComponent implements OnInit{

  public types!:string[];
  public Subtypes!:string[];
  public superTypes!:string[];
  public rarities!: string[];
  public cards!:Card[];
  public deck!:Deck;
  public maxCards = 60;
  public minCards = 24;
  public amouthCardsAllowedWhitSameName = 4;

  public formFilter!: FormGroup;
  public filter!:Filter;

  @ViewChild('alert',{static:true})
  Dialog!:IgxDialogComponent

  @ViewChild('save',{static:true})
  SaveDialog!:IgxDialogComponent

  // pagination 
  public totalOfCards!:number;
  public perPageOptions = [12,24,36];

  public formColletion!: FormGroup;


  constructor(
    private typesSerice:TypesService, 
    private subTypesService:SubTypesService,
    private superTypesService:SuperTypesService,
    private RaritiesService:RaritiesService,
    private cardsService:CardService,
    private formBuilder:FormBuilder,
    private router:Router,
    private activeRoute: ActivatedRoute
  ){}

  ngOnInit(){
    let index = this.activeRoute.snapshot.paramMap.get('id');
    console.log(index);
    if(index){
      let collection = new Collection();
      this.deck = collection.decks[parseInt(index)];
    }else{
      this.deck = new Deck([]);
    }

    this.filter = {
      page:1,
      pageSize: 12,
      q:"",
      orderBy: 'name'

    }
    this.formFilter = this.formBuilder.group({
      subtypes: [''],
      supertype:[''],
      rarity:[''],
      types:['']
    })

   

    this.getTypes();
    this.getSubTypes();
    this.getSuperTypes();
    this.getRarities();
    this.getCards();
    this.makeLuceneQuery();

    this.formColletion  = this.formBuilder.group({
      name:['',[Validators.required]]
    });

  }

  getTypes(){
    this.typesSerice.getAll().subscribe(
      {
        next:(types:any)=>{
          this.types = types;
        },
        error:()=>{

        }
      }
    )
  }

  getSubTypes(){
    this.subTypesService.getAll().subscribe(
      {
        next:(Subtypes:any)=>{
          this.Subtypes = Subtypes;
        },
        error:()=>{

        }
      }
    )
  }

  getSuperTypes(){
    this.superTypesService.getAll().subscribe(
      {
        next:(superTypes:any)=>{
          this.superTypes = superTypes;
        },
        error:()=>{

        }
      }
    )
  }

  getRarities(){
    this.RaritiesService.getAll().subscribe(
      {
        next:(rarirties:any)=>{
          this.rarities = rarirties;
        },
        error:()=>{

        }
      }
    )
  }


  getCards(){ 
    this.makeLuceneQuery();
    this.cardsService.get(this.filter).subscribe(
      {
        next:(resp:any)=>{
          this.cards = resp.data;
          this.totalOfCards = resp.totalCount
        },
        error:()=>{

        }
      }
    )
  }

  addCardAtTheDack(card:Card){
    let cardsSameName = this.deck.cards.filter((item)=>( item.name === card.name));
    
    if(cardsSameName.length < this.amouthCardsAllowedWhitSameName){
        this.addCard(card); 
    }else{
      this.Dialog.title = "Notificação";
      this.Dialog.message =`Só podem existir ${this.amouthCardsAllowedWhitSameName} cartas com o mesmo nome no baralho!`
      this.Dialog.open();
    }
    
  }

  makeLuceneQuery(){
    let keys = Object.keys(this.formFilter.value);

    console.log(this.formFilter.value);
    let query = "";
    keys.forEach((item)=>{
      if(this.formFilter?.get(item)?.value){
        query = query + ` ${item}:"${this.formFilter?.get(item)?.value}"`
      }
    })
    this.filter.q = query;
    console.log(this.filter);
  }

  changePage(page:number){
    page++;
    this.filter.page =  page;
    this.getCards();
  }

  changePerPage(perPage:number){
    this.filter.page = 1;
    this.filter.pageSize = perPage;
    this.getCards();
  }

  setDeckName(){
    if(this.deck.cards.length > this.minCards && this.deck.cards.length < this.maxCards){
      this.SaveDialog.title = "Notificação";
      this.SaveDialog.open();
    }else{
      this.Dialog.title = "Notificação";
      this.Dialog.message = `O baralho precisa ter no minimo ${this.minCards} e no máximo ${this.maxCards} cartas para ser salvo.`
      this.Dialog.open();
    }
  }

  saveDeck(){
    if(this.formColletion.valid){
      this.deck.name = this.formColletion.get('name')?.value
      let collection  = new Collection();
      collection.addDeck(this.deck);
      this.SaveDialog.close();
      this.router.navigate(['/','collections']);
    }
  }


  addCard(card:Card):void{
    this.deck.cards.push(card);
  }

  removeCard(index:number):void{
      this.deck.cards.splice(index,1);
  }

  gotoCollections(){
    this.router.navigate(['/','collections']);
  }

}
