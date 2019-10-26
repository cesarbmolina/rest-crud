import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export interface ResponseInterface {
  href: string;
  count: number;
  limit: number;
  offset: number;
  item: any[];
  next: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  public getData(data: string): Promise<any> {
    return this.http.get(environment.base_url + `${data}`, this.generateHeaders()).toPromise()
      .then((response: ResponseInterface) => {
        return response;
      },
        (error) => {
          return error;
        });
  }

  private generateHeaders() {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'access_token': '931e7a07a9537072c44ba7bb4effdae54c483ea8' })
    };

  }
}
