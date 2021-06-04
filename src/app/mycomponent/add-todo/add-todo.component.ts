import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title: string;
  des: string;
  constructor() { }
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();


  ngOnInit(): void {
  }
  onSubmit()
  {
    const todo = {
      sno: 8,
      title: this.title,
      des: this.des,
      active: true
    }
    this.todoAdd.emit(todo);
  }
}
