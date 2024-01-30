import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Company from 'src/app/demo/models/company';
import { AuthService } from 'src/app/demo/service/auth.service';
import { CompanyService } from 'src/app/demo/service/company/company.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-companies-create',
  templateUrl: './companies-create.component.html',
  styleUrls: ['./companies-create.component.scss']
})
export class CompaniesCreateComponent {

  // myForm: FormGroup;
  // baseUrl = environment.baseUrl;

  company:Company=new Company();

  constructor(
    // private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private companyService:CompanyService,
    private router: Router,) {
    // this.myForm = this.fb.group({
    //   name: ['', Validators.required],
    //   email: ['', Validators.required],
    //   phoneNumber: ['', Validators.required],
    //   address: ['', Validators.required],
    //   url: ['', Validators.required],
    // });



  }

  save(){
    this.companyService.save(this.company).subscribe(res=>{
      alert(res);
      this.router.navigate(['/dashboard/companies']);
    })
  }

  onSubmit() {
    // let apiURL = this.baseUrl + "/api/company";

    // let formData: any = {};
    // formData = this.myForm.value;
    // this.authService.sendPostRequest(apiURL, formData).subscribe(
    //   (res: any) => {
    //     this.router.navigate(["/dashboard/companies"], { relativeTo: this.route });

    //   }, (error) => {
    //     console.log(error);
    //   }
    // )
  }

}
