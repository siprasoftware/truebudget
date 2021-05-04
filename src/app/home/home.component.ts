import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  TemplateRef,
  ViewChild,
  HostListener,
  ElementRef,
  NgZone,
  AfterViewChecked,
} from "@angular/core";
import * as AOS from "aos";
import { Router } from "@angular/router";
import {
  FormsModule,
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { Location } from "@angular/common";
import * as $ from "jquery";
import { Subscription } from "rxjs/Subscription";
import { MailerService } from './mailer.service';
import { data } from "jquery";
import { NULL_INJECTOR } from "@angular/core/src/render3/component";
declare const document: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  stickymenuopacity = 0;
  bg: any;
  stickyMargin: any;
  scrollboolean = false;
  @ViewChild("videoElement") videoElement: ElementRef;
  private wowSubscription: Subscription;
  mobile: any;

  playFullVideo = {
    isFullVideo: false,
  };

  pause: any;
  listentitle = true;
  succesMessage: any = " ";
  messageTrue: boolean;
  intervalID: any;
  pagenavnumber: any;
  videohide = true;
  hideclosebtn: false;
  ackSent: any = "none";
  searchform: FormGroup;
  marginTop = 0;
  boxShadow: any;
  responeApi: string;
  emailForm: FormGroup;
  downloadForm: FormGroup;
  value = "";
  config = {
    backdrop: true,
    ignoreBackdropClick: false,
  };
  SearchRoute: any;
  searchNoMatch: any = "none";
  afterclickmarginleft: number;
  height12: any;
  demoForm: FormGroup;
  demoFromdata: any;
  bufferplaceholderheight: any;
  routename: any;
  backgroundpositionbg: string;
  innerWidth: any;
  bookADemoForm: FormGroup;
  items: string[] = [
    "",
    "FORMS AND NOTICES",
    "WORKERS’ COMPENSATION",
    "LABOR RELATIONS ",
    "RESIDUALS",
    "AFFILIATES",
    "BLOGS",
  ];
  width = 12.6;
  marginRight = 0;
  placeholderHeight = 800;
  defaultbrandingmargin: any = 40;
  defaultbrandingpadding: any = 18;
  mouseTrigger: any = true;
  hovertraForm: any;
  hovertransition: any;
  defaultdisplay: any;
  defaultoverlaystatus: any = "none";
  displaystatus: any = "block";
  Fsett = 25;
  firstPillerMargin = 15;
  marginLeft = 40;
  leftPercent = 0;

  king = false;
  gray = false;
  payrollHalfImg = null;
  defaultheight: any = 0;
  resizeSubscription: any;
  resizeService: any;
  Scroller: any;
  closeVideo = false;
  loginfromsubmitted = false;
  loginfromsubmittedthree = false;
  displayReachouterrormessage: boolean;
  displayDownloaderrormessage: boolean;
  successToast: boolean;
  submititle = "Submit";
  sendtitle = "Download";
  successDownloadToast: boolean;
  showDownloadForm = false;
  reachoutErrormessage: any;
  downloadErrormessage: any;

  constructor(
    private router: Router,
    private location: Location,
    private ngZone: NgZone,
    private fb: FormBuilder,
    public service: MailerService
  ) {
    window.onresize = (e) => {
      ngZone.run(() => {
        this.bufferplaceholderheight = window.innerHeight;
        this.setplaceholderheight(this.bufferplaceholderheight);
      });
    };
  }


  ngOnInit() {
    this.downloadForm = new FormGroup({
      email_id: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
      ]),
      first_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      last_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      mobile_number: new FormControl('', [Validators.minLength(10)]),
      discover: new FormControl('', [Validators.required, Validators.minLength(3)]),
      typeofproduction: new FormControl(null, [Validators.required])
    });
    AOS.init();

    this.height12 = window.innerHeight;
    this.setplaceholderheight(this.height12);
    var scroller = $("#scroller div.innerScrollArea");
    var scrollerContent = scroller.children("ul");
    scrollerContent.children().clone().appendTo(scrollerContent);
    var curX = 0;
    scrollerContent.children().each(function () {
      var $this = $(this);
      $this.css("left", curX);
      curX += $this.outerWidth(true);
    });
    var fullW = curX / 2;
    var viewportW = scroller.width();

    // Scrolling speed management
    var controller = { curSpeed: 0, fullSpeed: 1 };
    var $controller = $(controller);
    var tweenToNewSpeed = function (newSpeed, duration) {
      if (duration === undefined) duration = 600;
      $controller.stop(true).animate({ curSpeed: newSpeed }, duration);
    };

    // Scrolling management; start the automatical scrolling
    var doScroll = function () {
      var curX = scroller.scrollLeft();
      var newX = curX + controller.curSpeed;
      if (newX > fullW * 2 - viewportW) newX -= fullW;
      scroller.scrollLeft(newX);
    };
    setInterval(doScroll, 20);
    tweenToNewSpeed(controller.fullSpeed, 600);

    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 1100) {
        $.each(
          document.querySelectorAll(".svgpath"),
          function (index, ele: any) {
            if (ele) {
              $(this).addClass("svganimate");
            }
          }
        );
      } else {
        $("#svgpath").removeClass("svganimate");
      }
    });
  }

  imgTransition() {
    this.hovertraForm = "scale(1.05)";
    this.hovertransition = "transform 0.8s, -webkit-transform 0.8s";
  }
  imgTransitionafter() {
    this.hovertraForm = "scale(1)";
    this.hovertransition = "transform 0.8s, -webkit-transform 0.8s";
  }
  get primEmailone() {
    return this.downloadForm.get("email_id");
  }

 
  backhomenav() {
    this.router.navigateByUrl("");
  }

  pageloder() {
    this.router.navigate([`/loader`]);
  }
  setplaceholderheight(params) {
    this.bufferplaceholderheight = (100 / 100) * params;
    this.placeholderHeight = this.bufferplaceholderheight;
  }
  openDemo() {
    document.getElementById("bookademotemplate").style.width = this.newMethod();
    document.getElementById("backdrop").style.display = "block";
  }
  closeDemo() {
    document.getElementById("bookademotemplate").style.width = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("backdrop").style.display = "none";
  }
  private newMethod(): string {
    return "400px";
  }


  onDownload() {
    this.loginfromsubmittedthree = true;
    if (this.downloadForm.invalid) {
      return;
    }
    this.successDownloadToast = false;
    this.sendtitle = "Downloading...";
    this.service.subscribe(this.downloadForm.value).subscribe((data: any) => {
      this.responeApi = data;
      this.sendtitle = "Download";
      this.downloadForm.reset();
      this.successDownloadToast = true;
      this.loginfromsubmittedthree = false;
      setTimeout(() => {
        this.showDownloadForm = false;
        this.successDownloadToast = false;
      }, 8000);
    }, (error) => {
      this.displayDownloaderrormessage = true;
      setTimeout(() => {
        this.displayDownloaderrormessage = false;
      }, 5000);
      this.downloadErrormessage = error.error.message;
      this.loginfromsubmittedthree = false;

      this.downloadForm.reset();

      this.sendtitle = "Download";
    })
  }

}
