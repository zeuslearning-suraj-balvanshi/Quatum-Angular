import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { IAlert, INotification } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  notifications: INotification[] = [];
  alerts: IAlert[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService
      .getNotifications()
      .subscribe(
        (notiicationsList: INotification[]) =>
          (this.notifications = notiicationsList)
      );

    this.dataService
      .getAlerts()
      .subscribe((alertsList: IAlert[]) => (this.alerts = alertsList));
  }
}
