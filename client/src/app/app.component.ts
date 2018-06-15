import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  colors = [];
  randomColor() {
    for (let y = 0; y < 10; y++){
      const randomNum = Math.floor(Math.random() * 6) +1;
      if (randomNum === 1){
        this.colors.push("Aqua");}
      else if (randomNum === 2){
        this.colors.push("Aquamarine");}
      else if (randomNum === 3){
        this.colors.push("BlueViolet");}
      else if (randomNum === 4){
        this.colors.push("DarkSlateBlue");}
      else if (randomNum === 5){
        this.colors.push("Fuchsia");}
      else if (randomNum === 6){
        this.colors.push("Indigo");}
      else if (randomNum === 7){
        this.colors.push("LightSkyBlue");}
      }
    }
    


  ngOnInit(){
    this.randomColor();
  }
}
