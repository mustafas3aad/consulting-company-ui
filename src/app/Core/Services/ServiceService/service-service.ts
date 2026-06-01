
import { ServiceDto } from './../../Models/ServiceModels/service-dto';
import { PaginatedResult } from './../../Models/ServiceModels/paginated-result';
import { ServiceQueryParams } from './../../Models/ServiceModels/service-query-params';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServicesApi } from '../../../core/constants/Api_Urls';






@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  getAll(params?: ServiceQueryParams): Observable<PaginatedResult<ServiceDto>> {
    let httpParams = new HttpParams();

    if (params?.pageIndex !== undefined) {
      httpParams = httpParams.set('pageIndex', params.pageIndex);
    }
    if (params?.pageSize !== undefined) {
      httpParams = httpParams.set('pageSize', params.pageSize);
    }
    if (params?.search) {
      httpParams = httpParams.set('search', params.search);
    }

    return this.http.get<PaginatedResult<ServiceDto>>(ServicesApi.getAll, {
      params: httpParams,
    });
  }


}
