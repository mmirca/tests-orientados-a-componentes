import { Component, Prop, h, Method } from '@stencil/core';


@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop({ mutable: true, reflect: true }) count = 0;

  @Method() async updateCount(value: number): Promise<void> {
    if (value < 0) {
      this.count = 0;
    } else {
      this.count = value;
    }
  }

  handleSingleDecrement = () => {
    if (this.count <= 1) {
      this.count = 0;
    } else {
      this.count--;
    }
  }

  handleDoubleDecrement = () => {
    if (this.count <= 2) {
      this.count = 0;
    } else {
      this.count -= 2;
    }
  }

  handleTripleDecrement = () => {
    if (this.count <= 3) {
      this.count = 0;
    } else {
      this.count -= 3;
    }
  }

  handleSingleIncrement = () => {
    this.count++;
  }

  handleDoubleIncrement = () => {
    this.count += 2;
  }

  handleTripleIncrement = () => {
    this.count += 3;
  }

  render() {
    return [
      <div class="buttons">
        <button onClick={this.handleSingleDecrement}>- 1</button>
        <button onClick={this.handleDoubleDecrement}>- 2</button>
        <button onClick={this.handleTripleDecrement}>- 3</button>
      </div>,
      <input value={this.count} />,
      <div class="buttons">
        <button onClick={this.handleSingleIncrement}>+ 1</button>
        <button onClick={this.handleDoubleIncrement}>+ 2</button>
        <button onClick={this.handleTripleIncrement}>+ 3</button>
      </div>
    ];
  }
}
