import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProfileService} from '../__/profile/profile.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})

export class ProfileComponent implements OnInit, OnDestroy {
  profile = [];
  profileId = '';
  subscription: Subscription = new Subscription();

  constructor(private profileService: ProfileService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.profile = this.profileService.getProfile();
    console.log('This is Profile:');
    console.log(this.profile);
    this.subscription.add(this.route.params.subscribe((params) => {
      console.log('This is params:');
      console.log(params);
      this.profileId = params.id.value;
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

