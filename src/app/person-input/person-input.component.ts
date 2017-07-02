import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.scss']
})
export class PersonInputComponent implements OnInit {
  @Output() addPerson = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  add(personInput: any) {
    this.addPerson.emit(personInput.value);
    personInput.value = '';
  }

}
