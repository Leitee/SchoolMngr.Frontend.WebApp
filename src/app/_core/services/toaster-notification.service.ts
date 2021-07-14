import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService } from '@nebular/theme';
import { ToasterConfig } from 'angular2-toaster';

@Injectable({
  providedIn: 'root'
})
export class ToasterNotificationService {

  config: ToasterConfig;

  destroyByClick = true;
  duration = 2000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.BOTTOM_RIGHT;
  preventDuplicates = false;
  status: NbComponentStatus = 'primary';

  constructor(private toastrSvc: NbToastrService) { }

  public showSuccess(message: string, title: string = 'SUCCESS'): void {
    this.showToast('success', title, message)
  }

  public showError(message: string, title: string = 'FAILED'): void {
    this.showToast('danger', title, message)
  }

  private showToast(type: NbComponentStatus, title: string, body: string) : void {
    const hasIcon = this.hasIcon ? {  } : { icon: 'error' };
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
      ...hasIcon,
    };

    this.toastrSvc.show(body, title, config);
  }
}
