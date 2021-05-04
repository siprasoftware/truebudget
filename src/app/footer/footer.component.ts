import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}
  gotoInjury() {
    this.router.navigate(["onlineservice/injury"]);
  }
  gotoEmployer(){
    this.router.navigate(['/onlineservices'],{ preserveFragment: true } );
    setTimeout(function () {
      let el = document.getElementById("employers");
      el.scrollIntoView({ block: "start", behavior: "auto" });
    }, 500);
  }
}
