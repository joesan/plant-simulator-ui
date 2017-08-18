import { Component, Input } from '@angular/core';

import { PowerPlant } from '../models';

@Component({
  selector: 'app-powerplant-preview',
  templateUrl: './powerplant-preview.component.html'
})
export class PowerPlantPreviewComponent {
  @Input() powerPlant: PowerPlant;

  onToggleFavorite(favorited: boolean) {
    this.powerPlant['favorited'] = favorited;

    // TODO: No favorites!
    if (favorited) {
      this.powerPlant['favoritesCount']++;
    } else {
      this.powerPlant['favoritesCount']--;
    }
  }
}
