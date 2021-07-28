/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable id-blacklist */
/* eslint-disable @angular-eslint/component-selector */
import { AfterViewInit, Component, HostListener, OnInit, Renderer2 } from '@angular/core';
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
export class VeterinariansDetailsPage implements OnInit, AfterViewInit {
  data: Veterinarians;

  // whatsapp connection
  country_code: string = '+53';
  number: string;
  url: string;

  // toolbar dynamic styles
  toolbar: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private veterinariansService: VeterinariansService,
    private render: Renderer2,
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
  ngAfterViewInit(): void {
    this.toolbar = document.getElementById('toolbarId');
  }

  onScroll($event: any) {
    if ($event.detail.scrollTop !== 0) {
      // hide buttons
      this.render.removeClass(this.toolbar, 'show-toolbar');
      this.render.addClass(this.toolbar, 'hide-toolbar');
    } else {
      // show buttons
      this.render.removeClass(this.toolbar, 'hide-toolbar');
      this.render.addClass(this.toolbar, 'show-toolbar');
    }
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
