import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MessagesService } from './services/messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private name:string = '';
  private message: string = '';
  private messages: any[] = [];

  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
    this.messages = this.messagesService.getMessages();
    console.log(this.messages);
  }  

  private send(name: string, message: string) {
    if(!name.trim() || !message.trim()) { 
      alert('error');
      return; 
    }

    let newMessage = {
      name: name,
      message: message
    }

    console.log('send', name, message);
    this.messagesService.addMessage(newMessage);

    this.name = '';
    this.message = '';

    this.messages.push(newMessage);
  };    
}
