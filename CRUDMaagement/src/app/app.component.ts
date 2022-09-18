import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { BidiModule, Direction } from '@angular/cdk/bidi';
import { TextDirectionController } from './shared/TextDirectionController';
import { EmployyesService } from './services/employyes.service';
import { Employee } from './models/employee.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CRUDMaagement';
  direction = 'rtl';
  lang = "en";
  


  
  ngOnInit() {
   
  }


  public directionController = new TextDirectionController();
  constructor(
    
    private renderer: Renderer2,
    private primengConfig: PrimeNGConfig,
    public translate: TranslateService,
    ) {
    //this.direction = 'rtl';
    //this.switchLangg();
    this.renderer.setAttribute(document.body, 'dir' as string, this.directionController.textDirection as string);
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');
  }

  @ViewChild('sidenav') sidenav!: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }


  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  switchLang() {
    if (this.lang == "en") {
      this.lang = "ar";
      this.translate.use(this.lang);
    } else {
      this.lang = "en";
      this.translate.use(this.lang);
    }
  }

  



}
