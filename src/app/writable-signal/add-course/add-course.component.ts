import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseService } from '../services/course.service';
import { ICourse } from '../models/course.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-course',
  imports: [ReactiveFormsModule,MatButtonModule],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent implements OnInit {
  save() {
    let course : ICourse = {
      id: new Date().getTime(),
      title: this.courseForm.value.title,
      description: this.courseForm.value.description,
      imageUrl: '/assets/images/default.png',
      prix: this.courseForm.value.prix,
      selected: false,
    }
    this.courseService.saveCourse(course);
  }
  courseForm!: FormGroup;


  constructor(private fb: FormBuilder, private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.courseForm = this.fb.group({
      title: this.fb.control(''),
      description: this.fb.control(''),
      prix: this.fb.control(0),
      imageUrl: this.fb.control('/assets/images/default.png'),
      selected: this.fb.control(false)
    });
  }


}
