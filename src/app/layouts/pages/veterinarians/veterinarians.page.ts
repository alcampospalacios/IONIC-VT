/* eslint-disable @angular-eslint/no-input-rename */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { Veterinarians } from 'src/app/core/interface/veterinarians';
import { VeterinariansService } from 'src/app/service/veterinarians.service';

@Component({
  selector: 'acp-veterinarians',
  templateUrl: './veterinarians.page.html',
  styleUrls: ['./veterinarians.page.scss'],
})
export class VeterinariansPage implements OnInit {
  slidesOptionsNearlyVeterianarians: any = {
    slidesPerView: 1.05,
  };
  rating: number = 5;
  data: Array<Veterinarians>;

  toolbar: any = document.getElementById('toolbar_id');

  constructor(private manager: VeterinariansService, private render: Renderer2) {}

  ngOnInit(): void {
    this.data = this.manager.get();
  }

  loadMore($event: any) {
    // console.log($event);
  }

  lastX: any;
  logScrolling($event: any) {
    if ($event.detail.scrollTop > Math.max(0, this.lastX)) {
      this.render.removeClass(this.toolbar, 'show-toolbar');
      this.render.addClass(this.toolbar, 'hide-toolbar');
    } else {
      this.render.removeClass(this.toolbar, 'hide-toolbar');
      this.render.addClass(this.toolbar, 'show-toolbar');
    }
    this.lastX = $event.detail.scrollTop;
  }
}
