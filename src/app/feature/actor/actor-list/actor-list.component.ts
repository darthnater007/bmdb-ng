import { Component, OnInit } from '@angular/core';

import { Actor } from '../../../model/actor';
import { ActorService } from '../../../service/actor.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

title: string = "List of All Actors";
actors: Actor[];

constructor(private actorSvc: ActorService) { }

  ngOnInit() {
	this.actorSvc.list().subscribe(actorsList => {
			this.actors = actorsList;
			console.log("this.actors=", this.actors);
		});
  }

}
