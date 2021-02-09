import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";
import { Error404 } from "./component/error404/error404.component";

@NgModule({
    declarations:[
        NavBarComponent,
        Error404
    ],
    imports:[
        RouterModule.forChild([
            {
            path: '**',
            component: Error404
            }
        ])
    ],
    exports:[
        NavBarComponent
    ]
})
export class CoreModule{

}