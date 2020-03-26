import React from 'react';
import Carousel from 'react-multi-carousel';
import './PostCarousel.scss';
import moment from 'moment';
import Post from '../../Post/Post';

interface State {
  deviceType: string;
  showPostModal: boolean;
  selectedPost: any;
}

interface Props {
  images: any;
}

class PostCarousel extends React.Component<Props, State> {
  /**
   * Carousel settings
   */
  responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30
    }
  };

  constructor(props: any) {
    super(props);
    this.state = {
      deviceType: 'desktop',
      showPostModal: false,
      selectedPost: {}
    };
  }

  /**
   * @description Presents the post modal
   * @param post post data
   * @returns void
   */
  showPost = (post: any): void => {
    this.setState({ selectedPost: post, showPostModal: true });
  };

  /**
   * @description Gets the formatted date
   * @param date post date
   * @returns string
   */
  getDate = (date: string): string => {
    return moment(date).format('dddd, MMM D');
  };

  /**
   * @description Hide the post modal
   * @returns void
   */
  hidePost = (): void => {
    this.setState({ showPostModal: false });
  };

  render() {
    console.log('props', this.props.images);
    return (
      <div>
        <Post show={this.state.showPostModal} selectedPost={this.state.selectedPost} hidePost={this.hidePost} />
        <Carousel ssr itemClass="image-item" responsive={this.responsive} className="post-carousel">
          {this.props.images.map((image: any) => {
            return (
              <div>
                <div className="date">{this.getDate(image.date)}</div>
                <img
                  draggable={false}
                  onClick={() => {
                    this.showPost(image);
                  }}
                  style={{ width: '100%', height: '100%', cursor: 'pointer' }}
                  src={image.image}
                  alt=""
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default PostCarousel;
