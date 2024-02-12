import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private ui: UiService, private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.ui.onToggle().subscribe((value) => {
      this.showAddTask = value;
    });
  }

  toggleAddTask() {
    this.ui.toggleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
