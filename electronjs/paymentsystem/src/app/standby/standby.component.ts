import { Component, OnInit } from '@angular/core';
import Amplify, { Analytics } from 'aws-amplify';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-standby',
  templateUrl: './standby.component.html',
  styleUrls: ['./standby.component.scss'],
})
export class StandbyComponent implements OnInit {

  constructor(/*private router: Router*/) {}

  ngOnInit() {}

  getCoffee() {
    console.log('getCoffee ');
    Amplify.PubSub.publish('/iota-poc', 'coffee');
    //this.router.navigate(['/payment'])
  }
}