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
  @Prop({ mutable: true }) count = 0;

  @Method() async updateCount(value: number): Promise<void> {
    this.count = Math.max(0, value);
  }

  handleIncrement = (event: CustomEvent<number>) => {
    this.count = Math.max(0, this.count + event.detail);
  }

  render() {
    return [
      <my-component-button
        incrementValues={[-1, -2, -3]}
        onIncrement={this.handleIncrement}
      ></my-component-button>,
      <input value={this.count} />,
      <my-component-button
        incrementValues={[1, 2, 3]}
        onIncrement={this.handleIncrement}
      ></my-component-button>
    ];
  }
}
