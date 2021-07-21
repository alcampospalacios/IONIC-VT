/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { Veterinarians } from '../core/interface/veterinarians';

@Injectable({
  providedIn: 'root',
})
export class VeterinariansService {
  private data: Array<Veterinarians> = [
    {
      full_name: 'Alejandro Campos',
      speciality: 'Ingeniero en ciencias informaticas',
      scientific_degree: 'Lic.',
      rating: 5,
      reviews: [],
      experience_years: 10,
      address: 'UCI, La habana Cuba',
      schedule: 'Lunes - Sábados de 8:30 AM - 4:00 PM',
      photo:
        'https://media-exp1.licdn.com/dms/image/C4E03AQGyXi-DhR-rrA/profile-displayphoto-shrink_200_200/0/1615328048937?e=1628121600&v=beta&t=3Ta366PQEibd1v0qPnuo2IRcluTV-vvZoHB3FT7EgS0',
    },

    {
      full_name: 'Yordany Lloveras',
      speciality: 'Master en tecnologia educativa',
      scientific_degree: 'Msc.',
      rating: 5,
      reviews: [],
      experience_years: 8,
      address: 'UCI, La habana Cuba',
      schedule: 'Lunes - Sábados de 8:30 AM - 4:00 PM',
      photo: 'https://www.uci.cu/sites/default/files/imagenes/profesores/yordany-llovera-lopez.jpg',
    },
  ];

  constructor() {}

  get() {
    return this.data;
  }
}