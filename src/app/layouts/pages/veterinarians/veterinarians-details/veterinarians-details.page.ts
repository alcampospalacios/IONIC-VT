/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable id-blacklist */
/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veterinarians } from 'src/app/core/interface/veterinarians';
import { VeterinariansService } from 'src/app/service/veterinarians.service';

import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';

@Component({
  selector: 'acp-veterinarians-details',
  templateUrl: './veterinarians-details.page.html',
  styleUrls: ['./veterinarians-details.page.scss'],
})
export class VeterinariansDetailsPage implements OnInit {
  data: Veterinarians;

  // whatsapp connection
  country_code: string = '+53';
  number: string;
  url: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private veterinariansService: VeterinariansService,
    private callNumber: CallNumber,
    private sms: SMS
  ) {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    this.data = <Veterinarians>this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit() {
    if (!this.data) {
      this.data = this.veterinariansService.getById(this.activatedRoute.snapshot.params.id);
    }

    this.url = `http://wa.me/${this.country_code}${this.data.phone_number}?text=Hola me gustaría concertar una cita con usted. Por favor notifíqueme que días tiene disponibles.`;
  }

  call(phone_number: string) {
    this.callNumber
      .callNumber(phone_number, true)
      .then((res) => console.log('Launched dialer!', res))
      .catch((err) => console.log('Error launching dialer', err));
  }

  message(phone_number: string) {
    this.sms.send(
      phone_number,
      'Hola me gustaría concertar una cita con usted. Por favor notifíqueme que días tiene disponibles.'
    );
  }
}
