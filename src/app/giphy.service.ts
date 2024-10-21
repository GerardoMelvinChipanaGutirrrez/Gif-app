
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Gif {
  id: string;
  title: string;
  images: {
    fixed_height: {
      url: string;
    };
  };
}

export interface GiphyResponse {
  data: Gif[];
}

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  private apiKey = 'KJh6VCs2W2f4dtksBQVIEGyNyojhfh7Z';  // Reemplaza con tu API key
  private baseUrl = 'https://api.giphy.com/v1/gifs/search';

  constructor(private http: HttpClient) {}

  buscarGifs(query: string): Observable<GiphyResponse> {
    const url = `${this.baseUrl}?api_key=${this.apiKey}&q=${query}&offset=0&rating=g&lang=en`;
    return this.http.get<GiphyResponse>(url);
  }
}
