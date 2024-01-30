import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Company from 'src/app/demo/models/company';
import { AuthService } from 'src/app/demo/service/auth.service';
import { CompanyService } from 'src/app/demo/service/company/company.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-companies-create',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class CompaniesEditComponent implements OnInit {

//   myForm: FormGroup;
//   baseUrl = environment.baseUrl;
    company:Company=new Company();
  constructor(
    // private fb: FormBuilder,
    // private authService: AuthService,
    private companyService:CompanyService,
    private route: ActivatedRoute,
    private router: Router,) {
    // this.myForm = this.fb.group({
    //   name: ['', Validators.required],
    //   email: ['', Validators.required],
    //   phoneNumber: ['', Validators.required],
    //   address: ['', Validators.required],
    //   url: ['', Validators.required],
    // });



  }
    ngOnInit(): void {
        const id:number=Number(this.route.snapshot.paramMap.get('id'));
        this.companyService.getById(id).subscribe(res=>{
            this.company=res;
        })


    }

    update(){
        this.companyService.update(this.company.id,this.company).subscribe(res=>{
            alert(res);
            this.router.navigate(['/dashboard/companies']);
        });
    }

}
