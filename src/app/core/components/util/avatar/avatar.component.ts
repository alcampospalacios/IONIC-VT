/* eslint-disable @angular-eslint/component-selector */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'acp-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() url: string;

  constructor() {}

  ngOnInit() {}
}
