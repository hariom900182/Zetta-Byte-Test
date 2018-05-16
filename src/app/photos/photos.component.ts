import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  public photos = null;
  public id = null;
  public userId=null;
  constructor(private route: ActivatedRoute,
  private router: Router,private photosService: PhotosService) { }

  ngOnInit() {
     this.id = this.route.snapshot.paramMap.get('albumId');
     this.userId = this.route.snapshot.paramMap.get('userId');
    this.getPhotos();
  }
  getPhotos()
  {
    return this.photosService.getPhotos().subscribe(photos => {
         var list = photos as any[]
         this.photos = list.filter(lst => lst.albumId == this.id)
         
    })
  }
  
}
