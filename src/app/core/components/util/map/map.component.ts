/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-const */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector */
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-extra-markers/dist/css/leaflet.extra-markers.min.css';
import 'leaflet-extra-markers/dist/js/leaflet.extra-markers.js';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/leaflet.markercluster.js';
import 'leaflet.fullscreen/Control.FullScreen.css';
import 'leaflet.fullscreen/Control.FullScreen.js';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'acp-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnDestroy {
  @Input() latLong: Array<any>;
  @Input() location: string;

  @Input() id: string = 'map';

  defaultLocation = '23.13302, -82.38304';
  defaultZoom = 12;
  map: any;
  marker: any;
  visible: boolean;

  options: any = {
    icon: 'fa-circle',
    iconColor: '#ffffff',
    markerColor: 'blue',
    shape: 'circle',
    prefix: 'fa',
  };

  locations = [
    { name: 'Artemisa', location: '22.820492, -82.74971' },
    { name: 'Camagüey', location: '21.377639, -77.915726' },
    { name: 'Ciego de Ávila', location: '21.830907, -78.766479' },
    { name: 'Cienfuegos', location: '22.147662, -80.450649' },
    { name: 'Granma', location: '20.375527, -76.644058' },
    { name: 'Guantánamo', location: '20.147012, -75.204206' },
    { name: 'Holguín', location: '20.879343, -76.25061' },
    { name: 'Isla de la Juventud', location: '21.749296, -82.834167' },
    { name: 'Las Tunas', location: '20.96144, -76.975708' },
    { name: 'Matanzas', location: '23.021604, -81.589279' },
    { name: 'Mayabeque', location: '22.755921, -82.032166' },
    { name: 'Pinar del Río', location: '22.419915, -83.701401' },
    { name: 'Sancti Spíritus', location: '21.922663, -79.458618' },
    { name: 'Santiago de Cuba', location: '20.210656, -75.932007' },
    { name: 'Villa Clara', location: '22.573438, -79.94751' },
    { name: 'La Habana', location: '23.120154, -82.359009' },
  ];

  constructor() {}

  ngOnInit() {}

  ngOnDestroy(): void {
    this.remove_if_exist_map();
    this.visible = false;
  }

  showMap() {
    // if (this.provinceName !== '' && this.provinceName !== null) {
    //   this.defaultLocation = this.find_province_location(this.locations, this.provinceName);
    //   this.defaultZoom = 10;
    // }

    this.visible = true;

    this.map = L.map(this.id).setView(
      L.latLng(this.defaultLocation.split(',').map((v) => parseFloat(v))),
      this.defaultZoom
    );

    if (this.location) {
      this.marker = this.create_extramarker(
        L.latLng(this.location.split(',').map((v) => parseFloat(v))),
        this.options
      );
    } else {
      this.marker = this.create_extramarker(L.latLng(23.120154, -82.353516), this.options);
    }

    this.marker.addTo(this.map);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '...',
      maxZoom: 18,
      zoom: 5,
    }).addTo(this.map);

    this.initFullScreem();
  }

  initFullScreem() {
    L.control
      .fullscreen({
        position: 'topleft',
        title: 'Show fullscreen',
        titleCancel: 'Exit fullscreen',
        content: null,
        forceSeparateButton: true,
        fullscreenElement: false,
      })
      .addTo(this.map);
  }

  createMarker(latlng) {
    // L.marker(latlng)
    //   .addTo(this.map, this.defaultIcon)
    //   .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    //   .openPopup();
  }

  create_extramarker(latlng, options) {
    const markerIcon = L.ExtraMarkers.icon(options);
    return L.marker(latlng, { icon: markerIcon });
  }

  remove_if_exist_map() {
    let container = L.DomUtil.get(this.id);
    if (container !== undefined) {
      if (this.map !== undefined) {
        this.map.remove();
      }
    }
  }

  async getPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
  }
}
