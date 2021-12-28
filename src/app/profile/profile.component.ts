import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProfileService} from '../__/profile/profile.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {ProfileInterface} from '../__/profile/profile.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})

export class ProfileComponent implements OnInit, OnDestroy {
  profilesArray: ProfileInterface[] = this.profileService.getProfile();
  profileId = '';
  profile: ProfileInterface;
  subscription: Subscription = new Subscription();

  constructor(private profileService: ProfileService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log(this.profilesArray);
    this.subscription.add(this.route.params.subscribe((params) => {
      console.log('This is params:');
      console.log(params);
      this.profileId = params.id;
      this.selectProfile();
    }));
  }

  selectProfile() {
    this.profilesArray.forEach((profile:ProfileInterface) => {
      const date = new Date(profile.dob.date);
      profile.dob.date = `${date.getDay()} d. ${date.getMonth()} m. ${date.getFullYear()} y.`;
      if (profile.id.value === this.profileId) {
        this.profile = profile;
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

