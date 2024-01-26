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

  constructor( public router: Router,private http:HttpClient,
    private evaluationService:EvaluationService
    ) { }

  ngOnInit() {
    this.evaluations=this.evaluationService.getAll();
    // Fetch training session data directly in the component
    // this.http.get<any[]>('http://localhost:8787/api/evaluation').subscribe((data) => {
    //   this.myData = data;
    // });
  }

  
}
