import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges, DoCheck, IterableDiffers } from '@angular/core';
import { Condition } from './condition';

@Component({
  selector: 'condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent implements OnInit, DoCheck {

  showControls = false;
  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  @Input() condition!: Condition;
  color = 'primary';


  constructor(private iterableDiffers: IterableDiffers) {
  }

  ngOnInit() {
    this.getColor();
  }
  ngDoCheck() {
    this.getColor();
  }

  changeCount(x: number) {
    if (!this.condition.count) {
      this.condition.count = 0;
    }
    this.condition.count += x;
    if (this.condition.count < 0)
      this.condition.count = 0;
  }

  getColor() {
    if (this.condition.count == 0 && this.condition.descending) {
      this.color = 'light';
      return;
    }
    if (this.includesCondition(['blinded', 'clumsy', 'confused', 'controlled', 'dazzled', 'deafened', 'drained', 'enfeebled', 'fascinated', 'fatigued', 'flat-footed', 'fleeing', 'frightened', 'grabbed', 'immobilized', 'paralyzed', 'petrified', 'prone', 'restrained', 'sickened', 'slowed', 'stunned', 'stupefied'])) {
      this.color = 'warning';
      return;
    }
    if (this.includesCondition(['quickened'])) {
      this.color = 'success';
      return;
    }
    if (this.includesCondition(['doomed', 'dying', 'unconscious', 'wounded'])) {
      this.color = 'danger';
      return;
    }
    if (this.includesCondition(['acid', 'bleed', 'bludgeoning', 'chaotic', 'cold', 'electricity', 'evil', 'fire', 'force', 'good', 'lawful', 'mental', 'negative', 'persistent', 'piercing', 'poison', 'positive', 'precision', 'slashing', 'sonic'])) {
      this.color = 'info';
      return;
    }
    this.color = 'primary';


  }

  includesCondition(array: string[]) {
    return array
      .map(cond => this.condition.name.toLowerCase().includes(cond))
      .reduce((inc, already) => inc || already, false)
  }

}