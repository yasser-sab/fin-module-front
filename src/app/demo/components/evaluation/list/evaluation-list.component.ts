import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Evaluation from 'src/app/demo/models/evaluations';
import { EvaluationService } from 'src/app/demo/service/evaluation/evaluation.service';

@Component({
  selector: 'app-evaluation-list',
  templateUrl: './evaluation-list.component.html',
  styleUrls: ['./evaluation-list.component.scss']
})
export class EvaluationListComponent {
  evaluations: Evaluation[] = []; 

  constructor( 
    public router: Router,
    private evaluationService:EvaluationService
    ) { }

  ngOnInit() {
    this.evaluationService.getAll().subscribe(res=>{
      console.log(res);
      this.evaluations=res;
    })


  }

  
}
