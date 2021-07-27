/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector */
import { AfterViewChecked, AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
// import { Map, tileLayer, marker, polyline } from 'leaflet';
import * as L from 'leaflet';
import 'leaflet-extra-markers/dist/css/leaflet.extra-markers.min.css';
import 'leaflet-extra-markers/dist/js/leaflet.extra-markers.js';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/leaflet.markercluster.js';
import 'leaflet.fullscreen/Control.FullScreen.css';
import 'leaflet.fullscreen/Control.FullScreen.js';
import { Geolocation } from '@capacitor/geolocation';

// import iconUrl from 'leaflet/dist/images/marker-icon.png'

@Component({
  selector: 'acp-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnDestroy {
  @Input() latLong: Array<any>;
  @Input() location: string;

  defaultLocation = '23.13302, -82.38304';
  defaultZoom = 13;
  map: any;
  marker: any;
  visible: boolean;

  defaultIcon: any = new L.icon({
    iconUrl: '../node_modules/leaflet/dist/images/marker-icon.png',
    iconSize: [8, 8],
    iconAnchor: [2, 2],
    popupAnchor: [0, -2],
  });

  constructor() {}

  ngOnInit() {}

  ngOnDestroy(): void {
    this.remove_if_exist_map();
    this.visible = false;
  }

  showMap() {
    this.visible = true;
    this.map = L.map('map').setView(
      L.latLng(this.defaultLocation.split(',').map((v) => parseFloat(v))),
      this.defaultZoom
    );

    if (this.location) {
      console.log('location on');
      this.createMarker(this.location.split(',').map((v) => parseFloat(v)));
    }

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
    L.marker(latlng)
      .addTo(this.map, { icon: this.defaultIcon })
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
  }

  create_extramarker(latlng, options) {
    const markerIcon = L.ExtraMarkers.icon(options);
    return L.marker(latlng, { icon: markerIcon }).addTo(this.map);
  }

  remove_if_exist_map() {
    const container = L.DomUtil.get('map');
    if (container != null) {
      this.map.remove();
    }
  }

  async getPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current position:', coordinates);
  }
}
