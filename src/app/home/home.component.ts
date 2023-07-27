import { Component } from '@angular/core';
import { Comments } from '../core/models/comment.model';
import { ObjetivesService } from '../core/services/objetives.service';
import { Objectives } from '../core/models/objectives.model';
import { Perspective } from '../core/models/perspective.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  perspectives: Perspective[] = [];
  objectives: Objectives[] = [];
  comments: Comments[] = [];
  sidebarExpanded = true;

  constructor(private objetivesService: ObjetivesService){}

  ngOnInit(){
    this.mapDataForm();
  }

  async mapDataForm(){
    (await this.objetivesService.GetDataFromGit()).subscribe(data => {
      this.comments     = data.comments;
      this.objectives   = data.objectives;
      this.perspectives = data.perspectives;
    });
  }
}
