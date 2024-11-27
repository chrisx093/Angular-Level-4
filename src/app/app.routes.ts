import { Routes } from '@angular/router';
import { ContactAppComponent } from './contact-app/contact-app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { ContactappeditComponent } from './contactappedit/contactappedit.component';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { DataserviceComponent } from './dataservice/dataservice.component';
import { ParentbehavioursubComponent } from './parentbehavioursub/parentbehavioursub.component';
// import { ContactbehavioursubjectComponent } from './contactbehavioursubject/contactbehavioursubject.component';
import { ContactparentsubjectComponent } from './contactparentsubject/contactparentsubject.component';
import { TemplatevalidationComponent } from './templatevalidation/templatevalidation.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { Reactiveform2Component } from './reactiveform2/reactiveform2.component';
import path from 'path';
import { ReactiveformtitleComponent } from './reactiveformtitle/reactiveformtitle.component';
import { StudentsigninComponent } from './studentsignin/studentsignin.component';
import { StudentsignupComponent } from './studentsignup/studentsignup.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { studentguardGuard } from './guards/studentguard.guard';
import { EventparentComponent } from './eventparent/eventparent.component';
import { EventchildComponent } from './eventchild/eventchild.component';

import { StudentprofilepicComponent } from './studentprofilepic/studentprofilepic.component';
import { StudenteditprofileComponent } from './studenteditprofile/studenteditprofile.component';


import { StudentadminsignupComponent } from './studentadminsignup/studentadminsignup.component';

import { StudentadmindashboardComponent } from './studentadmindashboard/studentadmindashboard.component';
import { StudentviewclassmateComponent } from './studentviewclassmate/studentviewclassmate.component';
import { StudentaddcourseComponent } from './studentaddcourse/studentaddcourse.component';
import { StudentviewnotesComponent } from './studentviewnotes/studentviewnotes.component';
import { StudentadminsigninComponent } from './studentadminsignin/studentadminsignin.component';
import { PipeComponent } from './pipe/pipe.component';
import { AngularmaterialComponent } from './angularmaterial/angularmaterial.component';
import { StepperComponent } from './stepper/stepper.component';



export const routes: Routes = [

    // STANDARD ROUTING
    {path:'', component:LandingpageComponent},
    // REDIRECT ROUTE
    {path:'home', redirectTo:'', pathMatch:'full'},
    // PARENT/CHILDREN ROUTE(NESTED ROUTE)
    {path:'dashboard', children:[
        {path:'', component:DashboardComponent},
        {path:'profile',children:[
            {path:'', component:ProfileComponent},
            {path:'update_profile', component:UpdateprofileComponent}
        ] },
    ]},

    {path: 'contact', children:[
        {path:'', component:ContactAppComponent},
        {path:'edit', component:ContactappeditComponent},
        {path:'view', component: ViewcontactComponent},
        {path:'edit/:id', component: ContactappeditComponent}
    ]},


    {path:'data', component:DataserviceComponent},
    {path:'behavioursubject', component:ParentbehavioursubComponent},
    {path:'contactbehaviour', component:ContactparentsubjectComponent},
    {path:'template', component:TemplatevalidationComponent},
    {path: 'reactiveform', component: ReactiveformComponent},
    {path: 'reactiveform2',children:[
        {path:'', component: Reactiveform2Component},
        {path:':id', component: ReactiveformtitleComponent},

    ]},
    {path:'studentsignin', component:StudentsigninComponent},
    {path:'studentsignup', component:StudentsignupComponent},
    {path:'studentdashboard', children:[
        {path:'', component:StudentdashboardComponent, canActivate:[studentguardGuard]},
        {path:'studentprofilepic', component: StudentprofilepicComponent},
        {path: 'studenteditprofile', component: StudenteditprofileComponent},
        {path: 'studentviewclassmate', component: StudentviewclassmateComponent},
        {path: 'studentaddcourse', component: StudentaddcourseComponent},
        {path: 'studentviewnotes', component: StudentviewnotesComponent},
        

       

    ]},

    {path:'studentadminsignup', component:StudentadminsignupComponent},
    {path:'studentadminsignin', component: StudentadminsigninComponent},
    {path:'studentadmindashboard', component:StudentadmindashboardComponent},


    {path: 'eventparent',children:[
        {path:'', component: EventparentComponent},
        {path:':eventchild', component: EventchildComponent},

    ]},

    {path:'pipe', component: PipeComponent},
    {path:'angularmaterial', component: AngularmaterialComponent},
    {path:'stepper', component: StepperComponent},

        

    // {path: 'reactiveform2/:id', component: ReactiveformtitleComponent},
    
    

    // WILDCARD
    {path:'**', component:ErrorpageComponent},

    
];
