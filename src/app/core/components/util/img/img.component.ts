/* eslint-disable @angular-eslint/component-selector */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'acp-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent implements OnInit {
  @Input() url: string;

  constructor() {}

  ngOnInit() {}
}
