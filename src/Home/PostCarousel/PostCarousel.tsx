import React from 'react';
import Carousel from 'react-multi-carousel';
import './PostCarousel.scss'
import moment from 'moment';
import Post from '../../Post/Post';

interface State{
  deviceType: string;
  showPostModal: boolean;
  selectedPost: any;
}

class PostCarousel extends React.Component<{}, State>{
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

  /**
   * Posts data
   */
  images = [
    {
      date: '03/25/2020',
      image: "https://images.unsplash.com/photo-1497888329096-51c27beff665?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
    },
    {
      date: '03/26/2020',
      image: "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
      date: '03/27/2020',
      image: "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
      date: '03/28/2020',
      image: "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
      date: '03/29/2020',
      image: "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },

   ];


   constructor(props: any) {
    super(props);
    this.state = {
      deviceType: 'desktop',
      showPostModal: false,
      selectedPost: {}
    }
   }

   /**
    * @description Presents the post modal
    * @param post post data
    * @returns void
    */
  showPost = (post: any): void => {
    this.setState({selectedPost: post, showPostModal: true})
  }

  /**
   * @description Gets the formatted date
   * @param date post date
   * @returns string
   */
  getDate = (date: string): string => {
    return moment(date).format("dddd, MMM D");
  }

  /**
   * @description Hide the post modal
   * @returns void
   */
  hidePost = (): void => {
    this.setState({showPostModal: false})
  }

  render() {
    return (
      <div>
        <Post show={this.state.showPostModal} selectedPost={this.state.selectedPost} hidePost={this.hidePost} />
        <Carousel
      ssr
      itemClass="image-item"
        responsive={this.responsive}
        className="post-carousel"
    >
      {this.images.map(image => {
        return (
          <div>
            <div className="date">{this.getDate(image.date)}</div>
            <img
            draggable={false}
            onClick={() => { this.showPost(image)}}
            style={{ width: "100%", height: "100%", cursor: 'pointer' }}
            src={image.image}
          />
          </div>

        );
      })}
    </Carousel>
      </div>
  )
}
}

export default PostCarousel;