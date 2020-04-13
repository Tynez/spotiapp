import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ],
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  loading: boolean;

  constructor( private spotify: SpotifyService) { }

  ngOnInit(): void {
  }

  search( term: string ){
    console.log(term);
    this.loading = true;
    this.spotify.getArtists( term )
      .subscribe( (data: any) => {
        console.log( data );
        this.artists = data;
        this.loading = false;
      });
    if ( term.length < 1 ){
      this.loading = false;
    }
  }

}
