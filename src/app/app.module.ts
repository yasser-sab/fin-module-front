import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { authInterceptorProviders } from './_helpers/auth.interceptors';
import { ProductDetailComponent } from './demo/components/product-detail/product-detail.component';
import { LayouteComponent } from './demo/components/layoute/layoute.component';
import { NavbarComponent } from './demo/components/navbar/navbar.component';
import { HomeComponent } from './demo/components/home/home.component';
import { LoginComponent } from './demo/components/login/login.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './demo/components/signup/signup.component';
import { ProfileComponent } from './demo/components/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent, ProductDetailComponent, LayouteComponent,NavbarComponent, HomeComponent, LoginComponent, SignupComponent, ProfileComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        AppLayoutModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        authInterceptorProviders,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
