import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ],
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];
  loading: boolean;
  error: boolean;
  errorCode: string;

  constructor( private spotify: SpotifyService ) {
    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
      .subscribe( (data: any) => {
        this.newReleases = data;
        this.loading = false;
    }, (errorServicio) => {
      this.loading = false;
      this.error = true;
      this.errorCode = errorServicio.error.error.message;
    });

  }

  ngOnInit(): void {
  }

}
