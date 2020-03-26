import React from 'react';
import './ColorViz.scss';

interface Color {
  id: number;
  name: string;
  className: string;
}

interface State {
  colors: Color[];
}

class ColorViz extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      /**
       * Array of colors and name to show on the page
       */
      colors: [
        { id: 1, name: 'Whole Food Drink', className: 'whole-food-drink' },
        { id: 2, name: 'Refreshing Drink', className: 'refreshing-drink' },
        { id: 3, name: 'Smoothie', className: 'smoothie' },
        { id: 4, name: 'Soup', className: 'soup' },
        { id: 5, name: 'Tea', className: 'tea' },
        { id: 6, name: 'Frozen Treat', className: 'frozen-treat' }
      ]
    };
  }

  render() {
    return (
      <div className="color-viz row mt-3">
        {this.state.colors.map(color => {
          return (
            <div className="color-viz-block" key={color.id}>
              <div className={`${color.className} color-circle`}></div>
              <div className="name">{color.name}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ColorViz;
