import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teams : any;
  storageUrl=environment.storageUrl;
  constructor(private teamService: TeamService) { }

  ngOnInit(){
    this.teamService.getTeam().subscribe((data) =>{
      console.log(data);
      this.teams = data;
    }, (error) => {
      console.log("error in the Service");
    })
  }

}
