import { effect, Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICourse } from '../models/course.model';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  coursesState = signal<ICourse[]>([]);
constructor(){
  effect(()=>{
    this.coursesState.set([
      { id: 1, title: 'Spring boot', description: 'cours spring boot', imageUrl: '/assets/images/spring.jpeg',prix:2000, selected: true },
      { id: 3, title: 'Angular', description: 'cours angular', imageUrl: '/assets/images/angular.jpeg',prix:1500, selected: false },
      { id: 2, title: 'Flutter', description: 'Totruaal flutter', imageUrl: '/assets/images/futter.png',prix:1300, selected: false },
    
    ]);
  })
}

  getAllCourses(){
    return this.coursesState();
  }
  public selectCourse(course : ICourse){
    this.coursesState.update(
      cours=>cours.map(c=>c.id === course.id?{...course, selected : !course.selected}:c)
    )
  }

  deleteCourse(course: ICourse) {
this.coursesState.update(
  state => state.map(c=>c.id === course.id?{...course, selected : !course.selected}:c)
)
  }
  deleteCourseFromList(list: ICourse){
    this.coursesState.update(
      state => state.filter(c=>c.id!== list.id)
    );
  }

  saveCourse(cousre: ICourse) {
    console.log(cousre);
    this.coursesState.update(
      state => [...state, cousre]
    )};
  
  // -----------------
  getCourses(): Observable<ICourse[]> {
    return of([
      { id: 1, title: 'Course 1', description: 'cours spring boot', imageUrl: '/assets/images/spring.jpeg',prix:2000, selected: true },
      { id: 3, title: 'Course 3', description: 'cours angular', imageUrl: '/assets/images/angular.jpeg',prix:1500, selected: false },
      { id: 2, title: 'Course 2', description: 'Totruaal flutter', imageUrl: '/assets/images/futter.png',prix:1300, selected: false },
    ]);
  }
}

