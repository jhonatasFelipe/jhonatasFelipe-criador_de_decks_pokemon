import { Component, OnInit } from '@angular/core';
import { CardService } from './services/card.service';
import Card from './Classes/Card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'teste-pokemon2';
  card!: Card;

  constructor(private service: CardService){

  }

  ngOnInit(){
   
  }
}
