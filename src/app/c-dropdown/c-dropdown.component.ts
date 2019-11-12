import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { places } from '../places';
import { ConfirmationService } from '../confirmation.service';

@Component({
  selector: 'app-c-dropdown',
  templateUrl: './c-dropdown.component.html',
  styleUrls: ['./c-dropdown.component.css']
})
export class CDropdownComponent implements OnInit {
  places = places;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService

  ) { }

  addToTrip(place) {
    window.alert('The place is selected now!');
    this.router.navigate(['/c-confirmation']);
    this.confirmationService.addToTrip(place);
  }


  ngOnInit() {
  }

}