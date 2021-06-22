import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AddPC } from './components/add-from/add-pc';
import { PC } from './components/pc/pc';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: PC[] = [
    {
      name: 'asd', hp: 22, reaction: true, isTurn: false
    },
    {
      name: 'asd2', reaction: false, isTurn: false
    }
  ];
  round = 0;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

  start() {
    this.round = 1;
    this.items = this.items.sort(this.pcComparator)
    this.items.forEach(pc => pc.isTurn = false)
    if (this.items.length) {
      this.items[0].isTurn = true;
    }
  }

  pcComparator(a: PC, b: PC): number {
    if (!b.initiative) return 1;
    if (!a.initiative) return -1;
    return b.initiative - a.initiative;
  }

  addItem(newItem: AddPC) {
    let pc: PC = {
      reaction: true,
      name: newItem.name,
      hp: newItem.hp,
      isTurn: false
    }
    this.items.push(pc);
  }
}
