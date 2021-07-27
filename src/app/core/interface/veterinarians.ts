/* eslint-disable @typescript-eslint/naming-convention */
export interface Veterinarians {
  id: string;
  full_name: string;
  speciality: string;
  scientific_degree: string;
  address: string;
  experience_years: number;
  rating: number;
  schedule: string;
  clinic: string;
  coordinate?: string;
  reviews?: Array<Comment>;
  photo?: string;
  phone_number: string;
}
