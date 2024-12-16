import { Component, computed, signal } from '@angular/core';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatBadgeModule } from '@angular/material/badge';
import { ActionDialogComponent } from '../action-dialog/action-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AddCourseComponent } from "../add-course/add-course.component";

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css',
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatBadgeModule, MatIconModule, AddCourseComponent],

})
export class DashBoardComponent {

  onClick() {
    throw new Error('Method not implemented.');
  }
  selectedCoursesCount = computed<number>(() => this.courseService.getAllCourses().filter(c => c.selected).length);
  totalPrixSelectedCourses = computed<number>(() => {
    return this.courseService.getAllCourses().filter(c => c.selected == true).reduce((sum, current) => sum + current.prix, 0);
  });

  constructor(private courseService: CourseService, public dialog: MatDialog) {
  }


  searchText = signal<string>('');
  // coursesCmoputed = computed(()=> this.courses.map(c => ({...c, description: `#${c.description}`})));
  coursesCmoputed = computed(() => {
    if (this.searchText()) {
      return this.courseService.getAllCourses().filter(c => c.description.toLowerCase().includes(this.searchText().toLowerCase()));
    } else {
      return this.courseService.getAllCourses();
    }
  });
  updateSearchText(searchText: string,): void {
    this.searchText.set(searchText);
  }

  openActionDialog() {
    this.dialog.open(ActionDialogComponent, {
      data: {
        selectedCourses: this.selectedCoursesCount(),
        totalPrix: this.totalPrixSelectedCourses(),
      }
    });
  }

  showAddCourse: boolean = false;

  toggleAddCourse(): void {
    this.showAddCourse = !this.showAddCourse;
  }
}
