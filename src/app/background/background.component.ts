import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  @Input()
  public imageUrl: string;

  constructor() { }

  ngOnInit(): void {
  }
}
