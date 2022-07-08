import { Component, OnInit } from '@angular/core';
import { FooterService } from '../services/footer.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footer:any;

  constructor(private footerService:FooterService) { }

  ngOnInit() {
    this.footerService.getFooter().subscribe((data)=> {
      this.footer=data[0];
    })
  }

}
