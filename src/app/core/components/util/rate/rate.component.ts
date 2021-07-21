/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'acp-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
})
export class RateComponent implements OnInit {
  @Input() rating: number;
  @Output() ratingChange: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  rate(index: number) {
    this.rating = index;
    this.ratingChange.emit(this.rating);
  }

  getColor(index: number) {
    if (this.isAboveRating(index)) {
      return COLORS.GREY;
    }

    switch (this.rating) {
      case 1:
      case 2:
        return COLORS.RED;
      case 3:
        return COLORS.YELLOW;
      case 4:
      case 5:
        return COLORS.GOLD;
      default:
        return COLORS.GREY;
    }
  }

  isAboveRating(index: number): boolean {
    return index > this.rating;
  }
}

enum COLORS {
  GREY = '#E0E0E0',
  GOLD = '#ECAB0F',
  YELLOW = '#B57C00',
  RED = '#DD2C00',
}
