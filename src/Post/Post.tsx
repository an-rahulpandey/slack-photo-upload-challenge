import React from 'react';
import Modal from "react-bootstrap/Modal";
import './Post.scss'
interface Props{
  selectedPost: any;
  show: boolean;
  hidePost(): void;
}

class Post extends React.Component<Props, {}>{
  constructor(props: any) {
    super(props);
  }
  hideModel = () => {
    this.props.hidePost()
  }
  render() {

    return (
      <Modal
        show={this.props.show}
        onHide={this.hideModel}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="post"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.selectedPost.image} style={{ width: "100%", height: "100%"}} alt=""/>
        </Modal.Body>
      </Modal>
    );
  }
}

export default Post;