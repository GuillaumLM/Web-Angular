import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Exercice6Service } from '../exercice-6.service';

@Component({
  selector: 'ex3',
  templateUrl: './exercice-3.component.html',
  styleUrls: ['./exercice-3.component.css']
})
export class Exercice3Component {

  @Input() id; 
  @Input() nom;
  @Output() notify = new EventEmitter();
  youtubers;
  

constructor(private youtuber: Exercice6Service){
  this.youtubers=youtuber.List();

}



like() {
    console.log(  ' Liked ! fils ');
       
  }

  

}