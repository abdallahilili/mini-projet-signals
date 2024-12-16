import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatBadgeModule} from '@angular/material/badge';
import { ActionDialogComponent } from '../action-dialog/action-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ICourse } from '../models/course.model';


@Component({
  selector: 'app-course-list',
  standalone: true, 
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers: [CourseService], 
  imports: [CommonModule,MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule ,MatBadgeModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseListComponent implements OnInit {

  value = '';
onClick() :void{}
  private courseService = inject(CourseService);
  private coursesSingl = signal<Array<ICourse>>([]);
  searchText = signal<string>('');
     coursesCmoputed = computed(()=> {
      if (this.searchText()){
        return this.coursesSingl().filter(c => c.description.toLowerCase().includes(this.searchText().toLowerCase()));
      }else{
        return this.coursesSingl();
      }
     });
  updateSearchText(searchText:string, ):void{
    this.searchText.set(searchText);
  }

 
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((courses) => {
      const sortedCourse = courses.sort((a, b) => b.id - a.id);
      // this.courses = sortedCourse
      // console.log(this.courses);
      this.coursesSingl.set(sortedCourse);
    });
    // this.computeSlectedCourses();
  }

  
  // public selectedCourses : number = 0;
  // public totalPrix : number = 0;
  selectedCourses = computed<number>(()=>this.coursesSingl().filter(c=>c.selected).length)
  totalPrix = computed<number>(()=>this.coursesSingl().filter(c=>c.selected).reduce((sum,current)=>sum + current.prix,0));
  // computeSlectedCourses(){
  //   this.selectedCourses = this.coursesSingl().filter(c => c.selected).length;
  //   this.totalPrix = this.coursesSingl().filter(c => c.selected).reduce((sum,current)=>sum + current.prix,0);
  // }
  select(course: ICourse) {
    // course.selected =!course.selected;
    // this.computeSlectedCourses();

    this.coursesSingl.update(cours=>{
       return cours.map(c => c.id == course.id?{...course,selected : !course.selected}:c);
    }); 
    
    }

  openActionDialog() {
  
    this.dialog.open(ActionDialogComponent, {
      data: {
        selectedCourses: this.selectedCourses(),
        totalPrix: this.totalPrix()
      }
    });
  }

}
