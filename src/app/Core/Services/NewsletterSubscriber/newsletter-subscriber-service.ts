import { CreateNewsletterSubscriberDto } from './../../Models/Subscriber/create-newsletter-subscriber-dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsletterSubscribers } from '../../../core/constants/Api_Urls';




@Injectable({
  providedIn: 'root',
})
export class NewsletterSubscriberService {
  constructor(private http: HttpClient) {}

  create(
    dto: CreateNewsletterSubscriberDto
  ): Observable<NewsletterSubscriberService> {
    return this.http.post<NewsletterSubscriberService>(
      NewsletterSubscribers.create,
      dto
    );
  }
}
