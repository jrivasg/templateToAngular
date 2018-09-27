import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ItemComponent } from './pages/item/item.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: PortfolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'item/:id', component: ItemComponent },

    // otherwise redirect to 404
    // { path: '**', redirectTo: '/' + AppConfig.routes.error404 }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
            useHash: true
        })
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
