import { environment } from './../../../environments/environment.development';



const apiUrl = environment.apiUrl;

export const Consultations = {
  create: `${apiUrl}/Consultations`,
};

export const NewsletterSubscribers = {
  create: `${apiUrl}/NewsletterSubscribers`,
};

export const ServicesApi = {
  getAll: `${apiUrl}/Services`,
};
