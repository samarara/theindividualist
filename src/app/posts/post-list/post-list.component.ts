import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostsService]
})

export class PostListComponent implements OnInit {
  
  posts: Post[];

  constructor(private postService: PostsService) { }

  getPosts(){
    this.postService
      .getPosts()
      .subscribe(res => {
          this.posts = res;
          console.log(res);
        });
  }

  printPosts(){
    this.posts.forEach(element => {
      console.log(element)
    });
    
    
  }

  ngOnInit() {
    this.getPosts();
    //this.printPosts();
    
  }

  

}
