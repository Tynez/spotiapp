import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ],
})
export class ArtistaComponent implements OnInit {

  loadingArtist: boolean = true;
  artist: any = {};
  topTracks: any[] = [];

  constructor( private router: ActivatedRoute,
               private spotify: SpotifyService) {
    this.router.params.subscribe( params => {
      // console.log(params['id']);
      this.getArtist( params['id'] );
      this.getTopTracks( params['id'] );
    });
  }

  ngOnInit(): void {
  }

  getArtist( id: string ){
    this.loadingArtist = true;
    this.spotify.getArtist( id )
      .subscribe( artist => {
        console.log(artist);
        this.artist = artist;
        this.loadingArtist = false;
      });
  }

  getTopTracks(id: string ){
    this.spotify.getTopTracks( id )
    .subscribe( topTracks => {
      console.log( topTracks );
      this.topTracks = topTracks;
    });
  }

}
