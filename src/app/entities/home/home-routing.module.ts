import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ListMovieComponent } from './list-movie/list-movie.component';



const routes: Routes = [
    {
        path: "", component: HomeComponent, children: [
            { path: "list", loadChildren: "./list-movie/list-movie.module#ListMovieModule" },

 
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
