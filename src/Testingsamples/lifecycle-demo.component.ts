import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle-demo.component.html',
  styleUrl: './lifecycle-demo.component.css'
})
export class LifecycleDemoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
 AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  data: string = 'Angular Lifecycle Hooks Demo';
  constructor() {
    console.log('1 ,Constructor called');
  }
  
  // ngOnChanges is called when any input-bound property changes
  ngOnChanges(changes: SimpleChanges): void {
    console.log('2. ngOnChanges: Called when @Input() properties change. Changes:', changes);
  }

  // ngOnInit is called once, after the first ngOnChanges
  ngOnInit(): void {
    console.log('3. ngOnInit: Called once the component is initialized.');
  }

  // ngDoCheck is called during every change detection cycle
  ngDoCheck(): void {
    console.log('4. ngDoCheck: Called during every change detection cycle.');
  }

  // ngAfterContentInit is called once, after the content (ng-content) has been projected into the component
  ngAfterContentInit(): void {
    console.log('5. ngAfterContentInit: Called after content projection into the component.');
  }

  // ngAfterContentChecked is called after every check of content (ng-content)
  ngAfterContentChecked(): void {
    console.log('6. ngAfterContentChecked: Called after every check of projected content.');
  }

  // ngAfterViewInit is called once, after the component’s view (and child views) has been initialized
  ngAfterViewInit(): void {
    console.log('7. ngAfterViewInit: Called after the component’s view and its children’s views are initialized.');
  }

  // ngAfterViewChecked is called after every check of the component’s view (and child views)
  ngAfterViewChecked(): void {
    console.log('8. ngAfterViewChecked: Called after every check of the component’s view and its children’s views.');
  }

  // ngOnDestroy is called once, just before the component is destroyed
  ngOnDestroy(): void {
    console.log('9. ngOnDestroy: Called just before the component is destroyed.');
  }

  // Method to change data to trigger lifecycle hooks
  updateData() {
    this.data = 'Updated Data';
  }

}
