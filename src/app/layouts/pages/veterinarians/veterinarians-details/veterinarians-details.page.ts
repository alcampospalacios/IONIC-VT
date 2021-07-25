/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veterinarians } from 'src/app/core/interface/veterinarians';
import { VeterinariansService } from 'src/app/service/veterinarians.service';

@Component({
  selector: 'acp-veterinarians-details',
  templateUrl: './veterinarians-details.page.html',
  styleUrls: ['./veterinarians-details.page.scss'],
})
export class VeterinariansDetailsPage implements OnInit {
  data: Veterinarians;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private veterinariansService: VeterinariansService
  ) {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    this.data = <Veterinarians>this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit() {
    if (!this.data) {
      this.data = this.veterinariansService.getById(this.activatedRoute.snapshot.params.id);
    }
  }
}
