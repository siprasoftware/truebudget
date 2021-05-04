import { Component, OnInit, HostListener, TemplateRef } from "@angular/core";
import { Router, NavigationEnd } from '@angular/router';
import { BsModalService } from "ngx-bootstrap/modal";
import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service";
import { EventEmitterService } from "../event-emitter.service";
import { DataService } from "../data.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  stickymenuopacity = 0;
  bg: any;
  stickyMargin: any;
  scrollboolean = false;
  config = {
    backdrop: true,
    ignoreBackdropClick: false,
  };
  SearchRoute: any;
  value = "";
  searchNoMatch: any = "none";
  heightAfterScroll: string;
  modalRef: BsModalRef;
  
  constructor(private router: Router,private modalService: BsModalService,private eventEmitterService:EventEmitterService,private dataService: DataService) {
  }

  ngOnInit() {
    const scrollPosition = window.pageYOffset;
    this.stickymenuopacity = 1;
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }
 
  @HostListener("window:scroll", ["$event"])
  checkScroll() {}
  gotocovid() {
    this.router.navigate(["covid19response"]);
  }
  gotoTeam() {
    localStorage.removeItem("selectedEmpId");
    this.router.navigate(["team"]);
  }
  gotoEmployer(){
    this.router.navigate(['/onlineservices'],{ preserveFragment: true } );
    setTimeout(function () {
      let el = document.getElementById("employers");
      el.scrollIntoView({ block: "start", behavior: "auto" });
    }, 500);
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "287px";
    document.getElementById("backdrop").style.display = "block";
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("backdrop").style.display = "none";

    document.getElementById("bookademotemplate").style.width = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("backdrop").style.display = "none";
    document.getElementById("bkdemobtn").style.display = "block";
  }
  noopacitybg(routeName) {
    this.navigateTo(routeName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.style.backgroundColor = "white";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("backdrop").style.display = "none";    
  }
  navigateTo(link) {
    const windowpos = $(window).scrollTop();
    if (windowpos >= $("#bannerimg").innerHeight()) {
      this.dataService.setScrolled(true);
      this.router.navigate([link + ""]);
    } else {
      this.dataService.setScrolled(false);
      this.router.navigate([link + ""]);
    }
  }
}
