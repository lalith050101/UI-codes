import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastNotificationService {

  constructor(private toastr: ToastrService) { }

  showSuccess(message: string, title: string) {
    this.toastr.success(message, title, {
      timeOut: 2000
    });
  }

  showError() {
    this.toastr.error("Error for you...", "Error", {
    });
  }

  showWarning(message: string, title: string) {
    this.toastr.warning(message, title);
  }

  showPending() {
    this.toastr.info("Status changed to pending...", "Pending", {
    });
  }

  showCompleted() {
    this.toastr.success("Status changed to completed...", "Completed", {
    });
  }
  
}
