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
  items: PC[] = [];
  round = 0;

  clearAll() {
    this.round = 0;
    this.items = [];
  }

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

  next() {
    const index = this.items.findIndex(pc => pc.isTurn);
    if (this.items.findIndex(pc => pc.isTurn) >= 0) {
      let newIndex = index + 1;
      if (newIndex == this.items.length) {
        newIndex = 0;
        this.round++;
      }
      this.items.forEach(pc => pc.isTurn = false)
      this.endPcTurn(this.items[index]);
      this.startPcTurn(this.items[newIndex]);
    }
  }

  endPcTurn(pc: PC) {
    console.log("endPcTurn", pc);
    pc.conditions.forEach((condition) => {
      if (condition.count && condition.descending != undefined) {
        console.log("condition", condition);
        if (condition.descending)
          condition.count--;
        else
          condition.count++;
      }
    });
  }

  startPcTurn(pc: PC) {
    pc.isTurn = true;
    pc.reaction = true;
  }

  pcComparator(a: PC, b: PC): number {
    if (!a.initiative && !b.initiative) return 0;
    if (!b.initiative) return -1;
    if (!a.initiative) return 1;
    return b.initiative - a.initiative;
  }

  addItem(newItem: AddPC) {
    let pc: PC = {
      reaction: true,
      name: newItem.name,
      hp: newItem.hp,
      initiative: newItem.initiative,
      isTurn: false,
      conditions: []
    }
    this.items.push(pc);
  }
}
