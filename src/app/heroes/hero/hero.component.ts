import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Wolwerine';
  public hiddenName: boolean = true;
  public hiddenAge: boolean = true;
  public age: number = 50;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  heroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
     this.name = 'Iroman';
     this.hiddenName = false;
  }

  changeAge(): void {
    this.age = 45;
    this.hiddenAge = false;
  }

  reset(): void {
    this.name = 'Wolwerine';
    this.age =50;
    this.hiddenName = true;
    this.hiddenAge = true;
  }

}
