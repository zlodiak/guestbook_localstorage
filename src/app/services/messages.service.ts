import { Injectable } from '@angular/core';


@Injectable()
export class MessagesService {

	private messagesArr: any[];

  constructor(){
  	this.messagesArr = localStorage.messages ? localStorage.messages : [];
  };

  private messages: any[] = [];

  getMessages = function(): any[] {
  	return JSON.parse(this.messagesArr);
  };

  addMessage = function(messageObj: Object): boolean {
  	console.log(messageObj);
  	console.log(localStorage.messages || []);

  	let messagesStr_ = localStorage.messages ? localStorage.messages : '[]';

  	let messagesArr  = JSON.parse(messagesStr_);

  	console.log(typeof messagesArr);

  	messagesArr.push(messageObj);

  	let messagesStr = JSON.stringify(messagesArr);
  	localStorage.messages = messagesStr;

  	return true;
  };  

}
