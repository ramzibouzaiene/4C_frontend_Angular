import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OffresService } from '../../services/offres.service';
import { environment } from '../../../environments/environment';
import { TokenStorageService } from '../../services/token-storage.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-pagedetail',
  templateUrl: './pagedetail.component.html',
  styleUrls: ['./pagedetail.component.css'],
  providers: [OffresService]
})
export class PagedetailComponent implements OnInit, OnDestroy  {
  currentUser: any;
  offres: any;
  o:any;
  isLoggedIn = false;
  storageUrl=environment.storageUrl;
  constructor(private offresService: OffresService ,
    private route : ActivatedRoute,
    private token: TokenStorageService,
    private auth: AuthService
     ) { }

  id = this.route.snapshot.params['id']

  ngOnInit() {
    if(sessionStorage.getItem('auth-user')){
      this.isLoggedIn = true
    }
    this.currentUser = this.token.getUser();
    console.log(this.id)
    this.offresService.getOffre(this.id).subscribe((data) => {
      console.log(data);
      this.o = data;
    }, (error) => {
      console.log("error in the Service");
    })

  }

  ngOnDestroy() {

  }
  /*
  public id:number;
  offres: Offre[];
  private sub: any;

  constructor(private offresService:OffresService,private route: ActivatedRoute ) {
    this.offres = offresService.getOffre();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id =+ params['id'];
    });
  }

  ngOnDestroy() {
    this.sub.Unsubscribe();
  } */
}
