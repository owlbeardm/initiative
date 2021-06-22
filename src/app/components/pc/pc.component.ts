import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PC } from './pc';

@Component({
  selector: 'pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.css']
})
export class PCComponent implements OnInit {

  @ViewChild('minusHpId') minusHpId: any;
  @Input() pc!: PC;
  hpForm: FormGroup;
  editHp = false;


  constructor(private formBuilder: FormBuilder) {
    this.hpForm = this.formBuilder.group({
      hp: undefined
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

  setEditHp() {
    if (this.editHp) {
      this.editHp = false;
      this.hpForm = this.formBuilder.group({
        hp: undefined
      });
    } else {
      this.editHp = true;
      console.log(this.minusHpId ?.nativeElement.focus);
      setTimeout(()=>{ // this will make the execution after the above boolean has changed
        this.minusHpId ?.nativeElement.focus();
      },0);
    }
  }

}