import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherApi } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherRequest(units: string, city: string): Observable<WeatherApi> {
    return this.http.get<WeatherApi>(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${environment.weatherKey}`);
  }
}
