import { CreateConsultationRequestDto } from './../../Models/Consultation/create-consultation-request-dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Consultations } from '../../../core/constants/Api_Urls';


@Injectable({ providedIn: 'root' })
export class ConsultationService {
  constructor(private http: HttpClient) {}

  create(
    dto: CreateConsultationRequestDto
  ): Observable<CreateConsultationRequestDto> {
    return this.http.post<CreateConsultationRequestDto>(
      Consultations.create,
      dto
    );
  }
}
