/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  slidesOPtions: any = {
    slidesPerView: 4,
  };

  selected: string = 'veterinarians';
  constructor() {}

  showContent(selected: string) {
    this.selected = selected;
  }
}
