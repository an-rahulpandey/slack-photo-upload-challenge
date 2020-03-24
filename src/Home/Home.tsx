import React from 'react';
import './Home.scss';
import Visualization from './Visualization/Visualization';
import PostCarousel from './PostCarousel/PostCarousel';
import ColorViz from './ColorViz/ColorViz';

interface State { }

class Home extends React.Component<{}, State> {


  render() {
    return (
      <div>
        <ColorViz />
        <Visualization />
        <PostCarousel />
        </div>
    );
  }
}

export default Home;
