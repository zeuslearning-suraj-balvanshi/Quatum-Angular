import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/core/data.service';
import { ICourse } from '../../shared/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  courses: ICourse[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService
      .getCourses()
      .subscribe((coursesList: ICourse[]) => (this.courses = coursesList));
  }
}
