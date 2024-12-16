import { Component, computed, signal } from '@angular/core';
import { ICourse } from '../models/course.model';
import { CourseService } from '../services/course.service';
import { DashBoardComponent } from "../dash-board/dash-board.component";

@Component({
  selector: 'app-courses-crud',
  imports: [DashBoardComponent],
  templateUrl:'./courses-crud.component.html',
  styleUrl: './courses-crud.component.css'
})
export class CoursesCrudComponent {
suprimmer(course: ICourse) {
  this.courseService.deleteCourseFromList(course);
}

select(course: ICourse){
  this.courseService.selectCourse(course);
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

courses = computed<ICourse[]>(() => this.courseService.getAllCourses());

  constructor(private courseService: CourseService) {}
}
