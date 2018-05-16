import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { AlbumsComponent } from './albums/albums.component';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './photos/photos.component';

const appRoutes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'albums/:userId',      component: AlbumsComponent },
   { path: 'photos/:userId/:albumId',     component: PhotosComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    AlbumsComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
     HttpClientModule,
     RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
