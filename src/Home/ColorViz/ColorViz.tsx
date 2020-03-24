import React from 'react';
import './ColorViz.scss'

interface Color{
  name: string;
  className: string
}

interface State {
  colors: Color[];
}

class ColorViz extends React.Component<{}, State>{

  constructor(props: any) {
    super(props);
    this.state = {
      /**
       * Array of colors and name to show on the page
       */
      colors: [
        { name: 'Whole Food Drink', className: 'whole-food-drink' },
        { name: 'Refreshing Drink', className: 'refreshing-drink' },
        { name: 'Smoothie', className: 'smoothie' },
        { name: 'Soup', className: 'soup' },
        { name: 'Tea', className: 'tea' },
        { name: 'Frozen Treat', className: 'frozen-treat'}
      ]
    }
  }

  render() {
    return (
      <div className="color-viz row mt-3">
        {this.state.colors.map(color => {
          return <div className="color-viz-block">
            <div className={`${color.className} color-circle`}></div>
            <div className="name">{color.name}</div>
          </div>
        })}
      </div>
    )
  }
}

export default ColorViz;