import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ObjetivesService {

  constructor(private http: HttpClient) {} 

  async GetDataFromGit() {
    return this.http.get<any>('https://raw.githubusercontent.com/pyorlano/cst-frontend-test/master/db.json');
  }

}
