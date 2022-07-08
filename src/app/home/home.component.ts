import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { TeamService } from '../services/team.service';
import { PartnersService } from '../services/partners.service';
import { Service4cService } from '../services/service4c.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  activites: any;
  teams:any;
  services:any;
  partners:any;
  storageUrl=environment.storageUrl;

  constructor(private homeService: HomeService , 
    private route : ActivatedRoute,
    private teamService: TeamService,
    private partnersService: PartnersService,
    private service4cService:Service4cService
    ) { }

  ngOnInit() {
    this.homeService.getHomeAct().subscribe((data) => {
      console.log(data);
      this.activites = data;
    }, (error) => {
      console.log("error in the Service");
    })
    this.teamService.getTeam().subscribe((data) =>{
      console.log(data);
      this.teams = data;
    })

    this.partnersService.getPartners().subscribe((data) => {
      console.log(data);
      this.partners = JSON.parse(data.logo);
    })

    this.service4cService.getServices().subscribe((data) => {
      console.log(data);
      this.services = data
    })
  }

}
