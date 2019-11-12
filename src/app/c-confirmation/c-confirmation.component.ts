import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ConfirmationService } from '../confirmation.service';

@Component({
  selector: 'app-c-confirmation',
  templateUrl: './c-confirmation.component.html',
  styleUrls: ['./c-confirmation.component.css']
})
export class CConfirmationComponent implements OnInit {
  items;

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService
  ) { }

  ConfirmToNextPage(place) {
    window.alert('You have already confirm the trip');
    this.router.navigate(['/c-confirmation']);// need change the URL, which should be link to naonao's 1st page
  }

  ngOnInit() {
    this.items = this.confirmationService.getTrip();
  }

}