import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';
import { TreeviewComponent } from './components/treeview/treeview.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TreeModule } from '@circlon/angular-tree-component';
import { HttpClientModule } from '@angular/common/http';
import { TreeviewModule } from 'ngx-treeview';
import { TopbarComponent } from './components/topbar/topbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    TreeviewComponent,
    LayoutComponent,
    SidebarComponent,
    TopbarComponent,

  ],
  imports: [
    BrowserModule,
    TreeModule,
    HttpClientModule,
    TreeviewModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
