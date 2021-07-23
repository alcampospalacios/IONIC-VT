/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'acp-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  slidesOPtionsHeader: any = {
    slidesPerView: 4,
  };

  slidesOptionsNearlyVeterianarians: any = { slidesPerView: 1 };
  selected: string = 'veterinarians';
  rating: number = 5;

  constructor() {}

  ngOnInit(): void {}

  showContent(selected: string) {
    this.selected = selected;
  }
}
