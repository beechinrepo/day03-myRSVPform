import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

import { NgForm } from '@angular/forms';  //Require Angular form & interface

import { RSVP } from './model';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})

export class RsvpComponent implements OnInit {
  @Output() onNewRSVP = new EventEmitter<RSVP>();  //RSVP-event obj/value tt event is firing

  constructor() { }

  ngOnInit() {
  }
  
  processForm(form: NgForm) {
    const values = form.value;
    console.info('values: ', form.value);
    const RSVP: RSVP ={
      name: values.name,
      phone: values.phone,
      attendingDay: (new Date(values.attendingDay)).getDate(),
      vegetarian: values.vegetarian == "yes",
      comments: values.comments,
      guest: parseInt(values.guest)|| 0, 
      allergies: []
    };
    for (let i in values)
      if(i.startsWith('allergies-') && values[i])  //go thru every form value; value is not null(true)
        RSVP.allergies.push(i)  //push the ith value
    form.resetForm();
    this.onNewRSVP.next(RSVP);
  }
}
