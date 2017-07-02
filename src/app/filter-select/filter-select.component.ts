import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.scss']
})
export class FilterSelectComponent implements OnInit {
  @Output() updateFilter: EventEmitter<string> = new EventEmitter<string>();
  public filters = [
    { friendly: "All", action: 'SHOW_ALL'},
    { friendly: "Attending", action: 'SHOW_ATTENDING'},
    { friendly: " Attending w/ Guests", action: 'SHOW_WITH_GUESTS'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
