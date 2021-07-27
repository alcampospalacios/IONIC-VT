/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @angular-eslint/component-selector */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'acp-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss'],
})
export class EmptyComponent implements OnInit {
  @Input() style: string = 'margin-top: 90px';
  @Input() type: string = 'no-data';
  constructor() {}

  ngOnInit() {}
}
