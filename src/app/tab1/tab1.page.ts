/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  slidesOPtionsHeader: any = {
    slidesPerView: 4,
  };

  slidesOptionsNearlyVeterianarians: any = { slidesPerView: 1 };
  selected: string = 'veterinarians';
  rating: number = 5;

  constructor() {}

  showContent(selected: string) {
    this.selected = selected;
  }
}
