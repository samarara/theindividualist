import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';

import { StyleMenComponent } from './style-men/style-men.component';
import { StyleWomenComponent } from './style-women/style-women.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EssaysComponent } from './essays/essays.component';

const routes: Routes = [
    {
        path: '',
        component: PostListComponent,
        pathMatch: 'full'
    },
    {
        path: 'style-men',
        component: StyleMenComponent,
        pathMatch: 'full'
    },
    {
        path: 'style-women',
        component: StyleWomenComponent,
        pathMatch: 'full'
    },
    {
        path: 'about-us',
        component: AboutUsComponent,
        pathMatch:'full'
    },
    {
        path: 'essays',
        component: EssaysComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class TheIndividualistRoutingModule{}