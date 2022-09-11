import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './pages/login/login.component';



const router: Routes = [
    {
        path: '',
        component: LoginComponent,
        children : [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: '**',
                redirectTo: 'login'
            }
        ]
    }
]



@NgModule({
    imports: [
        RouterModule.forChild(router)
    ],
    exports: [
        RouterModule
    ]
})


export class AuthRoutingModule {}