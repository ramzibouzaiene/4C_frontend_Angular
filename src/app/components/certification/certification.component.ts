import { Component, OnInit } from '@angular/core';
import { CertificationsService } from '../../services/certifications.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {

  certifs:any;
  storageUrl=environment.storageUrl;

  constructor(private certificationsService:CertificationsService) { }

  ngOnInit() {

    this.certificationsService.getCertification().subscribe((data) => {
      console.log(data);
      this.certifs = data;
    }, (error) => {
      console.log("error in the Service");
    })
  }

}
