import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntitiesComponent } from './entities.component';


const routes: Routes = [
    {
        path: "", component: EntitiesComponent, children: [
            // Trang Home
            { path: "", loadChildren: "./home/home.module#HomeModule" },

            // TRang admin
            { path: "", loadChildren: "./admin/admin.module#AdminModule" },

            // Dang Nhập
            { path: "dang-nhap", loadChildren: "./home/dang-nhap/dang-nhap.module#DangNhapModule" },

            { path: "dang-ky", loadChildren: "./home/dang-ky/dang-ky.module#DangKyModule" }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EntitiesRoutingModule { }
