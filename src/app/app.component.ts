import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MaterialModule } from './materials.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  processForm(f: NgForm) {
    console.info('processing form: ', f.value);
  }
}
