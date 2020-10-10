import { WeatherService } from './../../shared/services/weather.service';
import { environment } from './../../../environments/environment';
import { WeatherApi, dayWeather, List } from './../../shared/models/weather';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  city = 'Paris';
  units = 'metric';
  input = '';

  dataWeather: WeatherApi;
  dataSort: List[];

  day = true;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather();
  }

  changeUnits(unit: string) {
    this.units = unit;
    this.getWeather();
  }


  getWeather(city?: string) {
    let cityForSeach = this.city;
    if (city) {
      cityForSeach = city;
      this.input = '';
    }

    this.weatherService.getWeatherRequest(this.units, cityForSeach).subscribe(
      data => {
        this.dataWeather = data;
        this.dataSort = this.sortWeather();
        this.city = cityForSeach;
        this.closeSearch();
      },
      err => {
        alert('Search city no exist');
        return 0;
      });
  }

  sortWeather(): List[] {
    const tabDay: List[] = [];

    for (const [index, data] of this.dataWeather.list.entries()) {
      data.dt_txt = data.dt_txt.toString().slice(0, 10);
      data.main.temp_min = Math.round(data.main.temp_min);
      data.main.temp_max = Math.round(data.main.temp_max);

      if (index === 0) {
        tabDay.push(data);
      } else {
        if (data.dt_txt === tabDay[tabDay.length - 1].dt_txt) {
          if (data.main.temp_min < tabDay[tabDay.length - 1].main.temp_min) {
            tabDay[tabDay.length - 1].main.temp_min = data.main.temp_min;
          }
          if (data.main.temp_max > tabDay[tabDay.length - 1].main.temp_max) {
            tabDay[tabDay.length - 1].main.temp_max = data.main.temp_max;
          }
        } else {
          tabDay.push(data);
        }
      }
    }

    console.log(tabDay);

    return tabDay;


  }
  closeSearch() {
    this.day = true;
  }

  openSearch() {
    this.day = false;
  }

}
