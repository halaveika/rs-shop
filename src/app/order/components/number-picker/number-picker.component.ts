import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-number-picker',
  templateUrl: './number-picker.component.html',
  styleUrls: ['./number-picker.component.scss']
})

export class NumberPickerComponent {
  @Input() public maxNumber = 0;
  @Output() public orderValue = new EventEmitter<number>();
  public value = 0;

  constructor() {

  }

  addNumber(){
    console.log(this.maxNumber);
    if (this.value <= this.maxNumber) {
      this.value++;
      this.orderValue.emit(this.value);
    }
  }

  subtractNumber(){
    if (this.value > 0) {
      this.value--;
      this.orderValue.emit(this.value);
    }
  }

}
