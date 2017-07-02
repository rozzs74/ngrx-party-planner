import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'party-stats',
  templateUrl: './party-stats.component.html',
  styleUrls: ['./party-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartyStatsComponent implements OnInit {

@Input() invited;
@Input() attending;
@Input() guests;
  constructor() { }

  ngOnInit() {
  }

}
