import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { PersonInputComponent } from './person-input/person-input.component';
import { PersonListComponent } from './person-list/person-list.component';
import { people } from './reducers/people';
import { partyFilter } from './reducers/party-filter';
import { FilterSelectComponent } from './filter-select/filter-select.component';
import { PartyStatsComponent } from './party-stats/party-stats.component';
import { reset } from './middleware/resetMetaReducer';

let multipleReducers = {
  people: people,
  partyFilter: partyFilter
}

@NgModule({
  declarations: [
    AppComponent,
    PersonInputComponent,
    PersonListComponent,
    FilterSelectComponent,
    PartyStatsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    StoreModule.provideStore({people: reset(people), partyFilter})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
