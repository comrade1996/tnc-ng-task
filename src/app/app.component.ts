import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  QAForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.QAForm = this.fb.group({
      questions: this.fb.array([])
    });
  }

  questions(): FormArray {
    return this.QAForm.get('questions') as FormArray;
  }

  newQuestion(): FormGroup {
    return this.fb.group({
      question: '',
      answers: this.fb.array([])
    });
  }

  addQuestion() {
    this.questions().push(this.newQuestion());
  }

  removeQuestion(questionIndex: number) {
    this.questions().removeAt(questionIndex);
  }

  questionAnswers(questionIndex: number): FormArray {
    return this.questions()
      .at(questionIndex)
      .get('answers') as FormArray;
  }

  newAnswer(): FormGroup {
    return this.fb.group({
      answer: ''
    });
  }

  addQuestionAnswer(questionIndex: number) {
    this.questionAnswers(questionIndex).push(this.newAnswer());
  }

  removeQuestionAnswer(questionIndex: number, answerIndex: number) {
    this.questionAnswers(questionIndex).removeAt(answerIndex);
  }

  onSubmit() {
    console.log(this.QAForm.value);
  }


  resetForm() {
    this.questions().clear();
  }
}
