/* eslint-disable @angular-eslint/component-selector */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'acp-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss'],
})
export class ThumbnailComponent implements OnInit {
  @Input() url: string;

  constructor() {}

  ngOnInit() {}
}
