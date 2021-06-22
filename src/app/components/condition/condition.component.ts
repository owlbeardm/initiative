import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Condition } from './condition';

@Component({
  selector: 'condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent implements OnInit {

  showControls = false;
  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  @Input() condition!: Condition;


  constructor() {
  }

  ngOnInit() {
  }

  changeCount(x: number) {
    if (!this.condition.count) {
      this.condition.count = 0;
    }
    this.condition.count += x;
    if (this.condition.count < 0)
      this.condition.count = 0;
  }

}