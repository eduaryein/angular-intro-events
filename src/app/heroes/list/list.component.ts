import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroeNames: string[] = ["Wolwerine", "Iroman", "Thor", "Spiderman", "Capitan america"];
  public deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.heroeNames.pop();
  }

}
