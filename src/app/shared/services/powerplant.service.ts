import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { PowerPlant } from '../models';
import {PowerPlantListConfig} from '../models/powerplant-list.model';

@Injectable()
export class PowerPlantService {
  powerPlants: PowerPlant[];
  constructor (
    private apiService: ApiService
  ) {}

  allPowerPlants(onlyActive: boolean = false, page: number = 1): void {
    const self = this;
    const path = `$/powerPlants?onlyActive${onlyActive}&page${page}`;
    this.apiService.get(path).subscribe(
      powerplants => {
        powerplants.forEach(item => {
          if (this.isPowerPlant(item)) {
            // make the item an instance of PowerPlant
            self.powerPlants.push(item as PowerPlant);
          }
        });
      },
      err => {
        // handle error
      });
  }

// define the type guard
  isPowerPlant(item: any): item is PowerPlant {
    // check for the required properties of PowerPlant here and return true/false.
    // example:
    return item['powerplantProp1'] && item['powerplantProp2'];
  }

  // TODO: This can be thrown out!
  allPowerPlants1(config: PowerPlantListConfig): Observable<PowerPlant[]> {
    // Convert any filters over to Angular's URLSearchParams
    const params: URLSearchParams = new URLSearchParams();

    Object.keys(config.filters)
      .forEach((key) => {
        params.set(key, config.filters[key]);
      });

    return this.apiService
      .get(
        '/powerPlants', params
      ).map(data => data);
  }

  get(slug): Observable<PowerPlant> {
    return this.apiService.get('/articles/' + slug)
      .map(data => data.article);
  }

  destroy(slug) {
    return this.apiService.delete('/articles/' + slug);
  }

  save(article): Observable<PowerPlant> {
    // If we're updating an existing article
    if (article.slug) {
      return this.apiService.put('/articles/' + article.slug, {article: article})
        .map(data => data.article);

      // Otherwise, create a new article
    } else {
      return this.apiService.post('/articles/', {article: article})
        .map(data => data.article);
    }
  }

  favorite(slug): Observable<PowerPlant> {
    return this.apiService.post('/articles/' + slug + '/favorite');
  }

  unfavorite(slug): Observable<PowerPlant> {
    return this.apiService.delete('/articles/' + slug + '/favorite');
  }


}
