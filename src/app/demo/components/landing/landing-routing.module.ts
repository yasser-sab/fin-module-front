import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: LandingComponent },
        { path: 'product-details/:id', component: ProductDetailComponent }
    ])],
    exports: [RouterModule]
})
export class LandingRoutingModule { }
