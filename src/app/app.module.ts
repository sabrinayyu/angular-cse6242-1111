import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CPickupComponent } from './c-pickup/c-pickup.component';
import { CDropdownComponent } from './c-dropdown/c-dropdown.component';
import { ConfirmationService } from './confirmation.service';
import { CConfirmationComponent } from './c-confirmation/c-confirmation.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'c-pickup', component: CPickupComponent },
      { path: 'c-dropdown', component: CDropdownComponent },
      { path: 'c-confirmation', component: CConfirmationComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    CPickupComponent,
    CDropdownComponent,
    CConfirmationComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ConfirmationService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/