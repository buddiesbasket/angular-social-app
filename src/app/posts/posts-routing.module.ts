import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';
import { CommentsComponent } from './components/comments/comments.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'posts', component: PostsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
