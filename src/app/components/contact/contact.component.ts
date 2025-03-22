import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  showSuccessMessage: boolean = false;
  showFailureMessage: boolean = false;
  contactForm: FormGroup;
  constructor(private fb: FormBuilder) {
    // Initialize the form group with empty strings and validators
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  async onSubmit() {
    emailjs.init('dVs8kPsbUS7sxBPJ9'); // Initialize emailjs with public key
    if (this.contactForm.valid) {
      let response = await emailjs.send('service_ndlo6hw','template_pwge7h5',{
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        phonenumber: this.contactForm.value.phonenumber,
        message: this.contactForm.value.message,
      });
      
      console.log('Email sent:', response);
      // Show success message
      if(response.status === 200){
      this.showSuccessMessage = true;
      }
      //Show failure message
      else{
        this.showFailureMessage = true;
      }
      // Reset the form after submission
      this.contactForm.reset();
      // Hide the success or failure message after 5 seconds
      setTimeout(() => {
        this.showSuccessMessage = false;
        this.showFailureMessage = false;
      }, 5000);
    } else {
      console.log('Form is invalid');
    }
  }
  
}
