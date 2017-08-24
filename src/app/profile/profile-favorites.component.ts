import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Profile } from '../shared';
import {PowerPlantListConfig} from '../shared/models/powerplant-list.model';

@Component({
  selector: 'profile-favorites',
  templateUrl: './profile-favorites.component.html'
})
export class ProfileFavoritesComponent implements OnInit {
  profile: Profile;
  favoritesConfig: PowerPlantListConfig = new PowerPlantListConfig();
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.route.parent.data.subscribe(
      (data: {profile: Profile}) => {
        this.profile = data.profile;
      }
    );
  }

}
