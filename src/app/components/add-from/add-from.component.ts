import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddPC } from './add-pc';

@Component({
  selector: 'add-from',
  templateUrl: './add-from.component.html',
  styleUrls: ['./add-from.component.css']
})
export class AddFromComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<AddPC>();
  addPcForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.addPcForm = this.formBuilder.group({
      name: "",
      hp: undefined,
      initiative: undefined
    });
  }

  ngOnInit() {
  }

  submit(newPC: AddPC) {
    this.newItemEvent.emit(newPC);
    console.log(newPC);
  }

}