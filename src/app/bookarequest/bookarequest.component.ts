import { Component, OnInit } from "@angular/core";
import { FormsModule, FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { BookademomailerService } from "./bookademomailer.service";
@Component({
  selector: "app-bookarequest",
  templateUrl: "./bookarequest.component.html",
  styleUrls: ["./bookarequest.component.css"],
})
export class BookarequestComponent implements OnInit {
  bookADemoForm: FormGroup;
  emaildata: any;
  ackSent: any = "none";
  succesMessage: any = " ";
  messageTrue: boolean;
  ackSentbol: any = false;
  responeApi: string;
  loginfromsubmitted = false;
  displayerrormessage: boolean;
  submititle = "Send";
  successToast: boolean;
  constructor(
    private fb: FormBuilder,
    private _emailData: BookademomailerService
  ) { }

  ngOnInit() {
    this.bookADemoForm = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
      ]),
      name: new FormControl('', [Validators.required,Validators.minLength(3)]),
      phone: new FormControl('', [Validators.required,Validators.minLength(10)]),
      discover: new FormControl('', [Validators.required,Validators.minLength(3)]),
      comments: new FormControl('', [Validators.required,Validators.minLength(3)]),
      prodCompany: new FormControl('', [Validators.required,Validators.minLength(3)]),
      typeOfProd: new FormControl('', [Validators.required,Validators.minLength(3)])
    });
  }
  get userName() {
    return this.bookADemoForm.get('name');
} 
  openDemo() {
    document.getElementById("bkdemobtn").style.display = "none";
    document.getElementById("bookademotemplate").style.width = this.newMethod();
    document.getElementById("backdrop").style.display = "block";
    var x = document.getElementsByClassName("top_header")[0];
    // x.id = "headermenu"
    // document.getElementById('headermenu').style.zIndex = "9";
  }
  closeDemo() {
    document.getElementById("bookademotemplate").style.width = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("backdrop").style.display = "none";
    document.getElementById("bkdemobtn").style.display = "block";
    this.loginfromsubmitted = false;
    this.bookADemoForm.reset();
  }
  private newMethod(): string {
    return "400px";
  }
  get primEmail() {
    return this.bookADemoForm.get("email");
  }
  onSubmit() {
    this.loginfromsubmitted = true;
    if (this.bookADemoForm.invalid) {
      return;
    }
    this.bookADemoForm.value.requestFrom = 'trueBudget';
    this.displayerrormessage = false;
    this.successToast = false;
    this.submititle = "Sending...";
    this._emailData.emailService(this.bookADemoForm.value).subscribe((data: any) => {
      this.submititle = "Send";
      this.successToast = true;
      this.loginfromsubmitted = false;
      this.bookADemoForm.reset();
      setTimeout(()=> {
        this.successToast = false;
      }, 5000);
    });
  }

}
