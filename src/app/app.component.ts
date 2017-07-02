import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { partyModel, percentAttending } from './selectors/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'app';
  public model;
  public people;
  public filter;
  public attending;
  public guests;
  public subscription;
  public percentAttendance;

  constructor(private _store: Store<any>) {
    /*
    this.subscription = this._store
      .select('people')
      .subscribe(people => {
        this.people = people;
        console.log('People', this.people);
      });
      */

      // Subscription is not needed because if async pipe
      /*
      this.people = _store.select('people');
      this.filter = _store.select('partyFilter'); */

      this.model = Observable.combineLatest(
        _store.select('people'),
        _store.select('partyFilter')
        )
        .let(partyModel())
        this.percentAttendance = _store.let(percentAttending());
  }
  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }
  addPerson(name) {
    this._store.dispatch({ type: 'ADD_PERSON', payload: { id: this.id(), name}});
  }
  addGuest(id) {
    this._store.dispatch({ type: 'ADD_GUEST', payload: id })
  }
  removeGuest(id) {
    this._store.dispatch({ type: 'REMOVE_GUEST', payload: id });
  }
  removePerson(id) {
    this._store.dispatch({type: 'REMOVE_PERSON', payload: id});
  }
  toggleAttending(id) {
    this._store.dispatch({type: 'TOGGLE_ATTENDING', payload: id})
  }
  updateFilter(filter) {
    this._store.dispatch({type: filter});
  }

  id(): number {
    let start = Math.floor(Math.random() * (5000));
    return ++start
  }

}