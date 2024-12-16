import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CourseListComponent } from './writable-signal/course-list/course-list.component';
import { CoursesCrudComponent } from './writable-signal/courses-crud/courses-crud.component';
import { NgModule } from '@angular/core';
import { AngularJsonComponent } from './angular-json/angular-json.component';
import { TsconfigComponent } from './tsconfig/tsconfig.component';
import { AccueilSignalsComponent } from './writable-signal/accueil-signals/accueil-signals.component';
import { BasicSignalComponent } from './writable-signal/basic-signal/basic-signal.component';
import { HomeComponent } from './custom-validation/home/home.component';
import { CustomValidationSansRegexComponent } from './custom-validation/custom-validation-sans-regex/custom-validation-sans-regex.component';
import { RegisterComponent } from './custom-validation/register/register.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'simple-list', component: CourseListComponent },
    { path: 'signals', component: AccueilSignalsComponent },
    { path: 'custom-validation', component: HomeComponent },
    { path: 'angular-json', component: AngularJsonComponent },
    { path: 'tsconfig', component: TsconfigComponent },
    { path: 'courses', component: CoursesCrudComponent},
    { path: 'basic-sig' , component: BasicSignalComponent},
    { path: 'custom-without-regex', component: CustomValidationSansRegexComponent },
    { path: 'custom-with-regex', component: RegisterComponent },  
    // { path: 'register', component: RegisterComponent },

];
@NgModule({
    imports: [RouterModule.forRoot(routes)], exports: [RouterModule]
})

export class AppRoutingModule { }