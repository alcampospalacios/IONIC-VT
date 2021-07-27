import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RateComponent } from './components/util/rate/rate.component';
import { MapComponent } from './components/util/map/map.component';
import { ImgComponent } from './components/util/img/img.component';
import { AvatarComponent } from './components/util/avatar/avatar.component';
import { ThumbnailComponent } from './components/util/thumbnail/thumbnail.component';
import { EmptyComponent } from './components/util/empty/empty.component';

@NgModule({
  declarations: [
    RateComponent,
    MapComponent,
    ImgComponent,
    AvatarComponent,
    ThumbnailComponent,
    EmptyComponent,
  ],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [RateComponent, MapComponent, ImgComponent, AvatarComponent, ThumbnailComponent, EmptyComponent],
})
export class CoreModule {}
