import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {
  items = [];

  addToTrip(place) {
    this.items.push(place);
  }
  
  getTrip() {
    return this.items;
  }

  clearTrip() {
    this.items = [];
    return this.items;
  }

  constructor() { }

}