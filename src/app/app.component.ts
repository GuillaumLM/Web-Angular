import { Component } from '@angular/core';

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

  onNotify(){
    console.log(' Liked ! parent');
      
  }
}


