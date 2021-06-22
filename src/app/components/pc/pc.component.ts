import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PC } from './pc';
import { Condition } from '../condition/condition';

@Component({
  selector: 'pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.css']
})
export class PCComponent implements OnInit {

  @ViewChild('minusHpId') minusHpId: any;
  @ViewChild('addConditionName') addConditionName: any;
  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  @Input() pc!: PC;
  hpForm: FormGroup;
  conditionForm: FormGroup;
  editHp = false;
  editCondition = false;


  constructor(private formBuilder: FormBuilder) {
    this.hpForm = this.formBuilder.group({
      hp: undefined
    });
    this.conditionForm = this.formBuilder.group({
      name: undefined,
      count: undefined,
      descending: true
    });
  }

  ngOnInit() {
  }

  useReaction() {
    this.pc.reaction = !this.pc.reaction;
  }

  minusHp(value: any) {
    if (this.pc.hp) {
      this.pc.hp -= value.hp;
    }
    this.hpForm = this.formBuilder.group({
      hp: undefined
    });
    this.editHp = false;
  }

  addCondition(value: Condition) {
    console.log(value)
    this.pc.conditions.push(value);
    this.editCondition = false;
  }

  setEditCondition(){
    this.editCondition = true;
    this.conditionForm = this.formBuilder.group({
      name: undefined,
      count: undefined,
      descending: false
    });
    setTimeout(() => { // this will make the execution after the above boolean has changed
      this.addConditionName ?.nativeElement.focus();
    }, 0);
  }

  setEditHp() {
    if (this.editHp) {
      this.editHp = false;
      this.hpForm = this.formBuilder.group({
        hp: undefined
      });
    } else {
      this.editHp = true;
      setTimeout(() => { // this will make the execution after the above boolean has changed
        this.minusHpId ?.nativeElement.focus();
      }, 0);
    }
  }

}