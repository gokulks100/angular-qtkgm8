import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact-component.html',
  styleUrls: ['./contact-component.css'],
})
export class ContactComponent {
  form_data = {
    name: '',
    description: '',
  };

  onSubmit() {
    alert(JSON.stringify(this.form_data));
  }
}
