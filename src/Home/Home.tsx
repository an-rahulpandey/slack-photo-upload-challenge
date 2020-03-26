import React from 'react';
import './Home.scss';
import Visualization from './Visualization/Visualization';
import ColorViz from './ColorViz/ColorViz';

interface State {
  posts: any[]
 }

class Home extends React.Component<{}, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      posts: []
    }
}
  addPost = (data: any) => {
    let posts = this.state.posts;
    posts.push(data);
    this.setState({ posts })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <ColorViz />
        <Visualization addPost={this.addPost}/>
        </div>
    );
  }
}

export default Home;
