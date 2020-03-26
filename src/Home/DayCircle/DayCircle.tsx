import React from 'react';
import { CircleCoordinates } from '../../models';
import moment from 'moment';
interface Props {
  coordinates: CircleCoordinates;
  showPost(date: number): void;
  date: number;
  startDate: any;
  index: number;
  post: any
}

interface State{
  date: any
}

class DayCircle extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      date: ''
    }
  }

  componentDidMount() {
    // Calculate the date based on the start date and current date index
    const date = moment(this.props.startDate).add('days', this.props.index + 1).date();
    this.setState({ date: date })
  }

  /**
   * @description Shows the post of the selected date
   * @param date post date
   * @returns void
   */
  clicked = (date: number): void => {
    this.props.showPost(this.props.post)
  }



  render() {
    return (
      <circle
        id={this.props.coordinates.id}
        className={`${this.props.coordinates.fill} day-circle`}
        cx={this.props.coordinates.cx}
        cy={this.props.coordinates.cy}
        onClick={() => {
          this.clicked(this.props.date);
        }}
        r="30.7"
      />
    );
  }
}

export default DayCircle;
