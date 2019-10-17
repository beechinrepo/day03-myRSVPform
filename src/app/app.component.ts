
import { RSVP } from './model';  //Import interface into AppComponent to use in function

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  shareable = false;

  addToList($event: RSVP) {
    console.info('RSVP list: ', $event);  //Generate entire form values
  };

  ngOnInit(){
    this.shareable = !!navigator['share'];
  };

  sharethejoy(){
    navigator['share']({
      title: 'Class Reunion',
      text: 'RSVP Now!',
      url: 'carine18.github.io/myapp3/',
  })
    .then(() => console.log('Successful share'))
    .catch((error) => console.log('Error sharing', error));
  };
}
