import { Component, h, EventEmitter, Event, Prop } from '@stencil/core';


@Component({
  tag: 'my-component-button',
  styleUrl: 'my-component-button.css',
  shadow: true,
})
export class MyComponent {

  @Event() increment: EventEmitter<number>;

  @Prop() incrementValues: number[] = [];

  handleClick(increment: number) {
    this.increment.emit(increment);
  }

  render() {
    return (
      <div class="buttons">
        {this.incrementValues.map(
          (increment) => <button onClick={this.handleClick.bind(this, increment)}>{increment}</button>
        )}
      </div>
    );
  }
}
