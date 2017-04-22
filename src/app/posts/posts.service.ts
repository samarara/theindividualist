import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Post } from './post';

@Injectable()
export class PostsService {
  private postUrl: string = "https://the-individualist-samarara.c9users.io/wp-json/wp/v2/";
  
  constructor(private http: Http) { }

  getPosts(): Observable<Post[]>{
      return this.http
        .get(this.postUrl + 'posts')
        .map((res: Response) => res.json());
  }

  
}
