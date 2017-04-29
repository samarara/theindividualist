import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TheIndividualistRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { StyleMenComponent } from './style-men/style-men.component';
import { StyleWomenComponent } from './style-women/style-women.component';
import { EssaysComponent } from './essays/essays.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MediaListComponent } from './media/media-list/media-list.component';

import { MasonryModule } from 'angular2-masonry';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    StyleMenComponent,
    StyleWomenComponent,
    EssaysComponent,
    AboutUsComponent,
    MediaListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TheIndividualistRoutingModule,
    MasonryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
