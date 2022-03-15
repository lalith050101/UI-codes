import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App';

  constructor(private toastr: ToastrService) {

  }

  showSuccess() {
    // error, success, warning, info
    this.toastr.success("successfully installed Toastr...", "Success", {
      timeOut: 5000
    });
  }

  showError() {
    this.toastr.error("Error for you...", "Error", {
    });
  }

  showWarning() {
    this.toastr.warning("Warning ...", "Warning", {
    });
  }

  showInfo() {
    this.toastr.info("Information for you...", "Info", {
    });
  }
}
