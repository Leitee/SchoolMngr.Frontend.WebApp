import { CrudResultNotification } from '@/_shared/models/crud-notification.model';
import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { ToasterNotificationService } from './toaster-notification.service';

@Injectable({
  providedIn: 'root'
})
export class PopupHandlerService {
  wsClient: HubConnection;

  constructor(hubBuilder: HubConnectionBuilder, private toastrService: ToasterNotificationService) { 
    this.wsClient = hubBuilder
                      .withUrl("http://localhost:7180/hub/notification")
                      .configureLogging(LogLevel.Debug)
                      .withAutomaticReconnect()
                      .build();
  }

  ngOnInit(): void {
    this.wsClient.on(this.crudOperationSubscribe.name, this.crudOperationSubscribe)
  }

  private crudOperationSubscribe(crudResult: CrudResultNotification) : void {
    console.log(crudResult)
    if (crudResult.succeeded) {
      this.toastrService.showSuccess("Operation completed");
    } else {
      this.toastrService.showError("Operation was failed");
    }
  }

  
  public get connectionId() : string {
    return this.wsClient.connectionId;
  }
  
  public get callbackName() : string {
    return this.crudOperationSubscribe.name;
  }  
  
}
