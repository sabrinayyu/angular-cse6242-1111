import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { places } from '../places';
import { ConfirmationService } from '../confirmation.service';

@Component({
  selector: 'app-c-pickup',
  templateUrl: './c-pickup.component.html',
  styleUrls: ['./c-pickup.component.css']
})
export class CPickupComponent implements OnInit {
  places = places;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService

  ) { }

  addToTrip(place) {
    window.alert('The place is selected now!');
    this.router.navigate(['/c-dropdown']);
    this.confirmationService.addToTrip(place);
  }

  ngOnInit() {
  }

}