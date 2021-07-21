/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { Veterinarians } from 'src/app/core/interface/veterinarians';
import { VeterinariansService } from 'src/app/service/veterinarians.service';

@Component({
  selector: 'acp-veterinarians',
  templateUrl: './veterinarians.page.html',
  styleUrls: ['./veterinarians.page.scss'],
})
export class VeterinariansPage implements OnInit {
  slidesOptionsNearlyVeterianarians: any = {
    slidesPerView: 1,
  };
  rating: number = 5;

  data: Array<Veterinarians>;

  constructor(private manager: VeterinariansService) {}

  ngOnInit(): void {
    this.data = this.manager.get();
  }
}
