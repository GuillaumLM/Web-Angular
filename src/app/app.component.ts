import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  name = 'zenzazion';
  
  GetName (s)
  {
    return s + "est le meilleur youtuber de france";
  }

  onNotify(nom){
    console.log(nom+' Liked ! parent');
      
  }
}


