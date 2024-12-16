import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose } from '@angular/material/dialog';

import {MatIconModule} from '@angular/material/icon';

import { ICourse } from '../models/course.model';
import { CommonModule } from '@angular/common'; 
import { CourseService } from '../services/course.service';



@Component({
  selector: 'app-action-dialog',
  imports: [MatDialogActions,MatDialogClose,CommonModule,MatIconModule],
  templateUrl: './action-dialog.component.html',
  styleUrl: './action-dialog.component.css'
})
export class ActionDialogComponent {
  get selectedCourses(): ICourse[] {
    return this.courseService.getAllCourses().filter(c => c.selected);
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: { selectedCourses: number; totalPrix: number },private courseService: CourseService) {}
  deleteCourse(course: ICourse) {
    this.courseService.deleteCourse(course);
  }
}
