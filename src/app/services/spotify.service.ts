import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Spotify service ready!');
   }

   getQuery(args: string){
    const url = `https://api.spotify.com/v1/${ args }`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCkhYbtlzcbMvb8vqiIpnt0OSTZotKRp9gr_yvEWiCVUFlqbxmnYTgbn6OxrbIHGFIYqFIhijHxigjcHDY'
    });

    return this.http.get(url, { headers });
   }

   getNewReleases(){
    return this.getQuery('browse/new-releases')
      .pipe( map( data => data['albums'].items));
   }

   getArtists( term: string ){
    const args = `search?q=${ term }&type=artist`;
    return this.getQuery(args)
      .pipe( map( data => data['artists'].items));
   }

   getArtist( id: string ){
    const args = `artists/${id}`;
    return this.getQuery(args);
      // .pipe( map( data => data['artists'].items));
   }

   getTopTracks( id: string ){
    const args = `artists/${id}/top-tracks?country=es`;
    return this.getQuery(args)
      .pipe( map( data => data['tracks']));
   }
}
