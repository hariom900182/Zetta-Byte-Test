import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  providers:[AlbumService]
})
export class AlbumsComponent implements OnInit {
   public albums=null;
   public id= null;
  constructor(private route: ActivatedRoute,
  private router: Router,private albumService: AlbumService) { }

  ngOnInit() {
     this.id = this.route.snapshot.paramMap.get('userId');
     
    this.getAlbums();
  }
  getAlbums()
  {
    return this.albumService.getAlbums().subscribe(albums => {
         var list = albums as any[]
         this.albums = list.filter(lst => lst.userId == this.id)
         
    })
  }
}
