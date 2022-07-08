import { Injectable } from '@angular/core';
import { ToastrService, IndividualConfig } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

    options: IndividualConfig;

  constructor(private toastr: ToastrService) { 
    this.options = this.toastr.toastrConfig;
    this.options.positionClass = 'toast-top-center';
    this.options.timeOut = 1500;
  }
   
  showSuccess(message, title){
      this.toastr.success(message, title, this.options)
  }
   
  showError(message, title){
      this.toastr.error(message, title, this.options)
  }
   
  showInfo(message, title){
      this.toastr.info(message, title, this.options)
  }
   
  showWarning(message, title){
      this.toastr.warning(message, title, this.options)
  }
}
