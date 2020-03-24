import React from 'react';
import { TextCoordinate } from '../../models';
import moment from 'moment';

interface Props {
  coordinates: TextCoordinate;
  date: number;
  day: string;
  showPost(date: number): void;
  startDate: any;
  index: number;
  numberOfDaysCompleted: number;
}

interface State {
  date: any;
}
class DateText extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      date: ''
    }
  }

  componentDidMount() {
    // Sets the date based on the start date and the index of the circle
    const date = moment(this.props.startDate).add('days', this.props.index + 1).date();
    this.setState({ date: date })
  }

  /**
   * @description show the post
   * @param date post date
   * @returns void
   */
  dateClicked = (date: number): void => {
    this.props.showPost(this.state.date);
  }

  /**
   * @description Returns the class name based on the post
   * @returns string
   */
  getClassName = (): string => {
    return this.props.numberOfDaysCompleted <= this.props.index ? 'medium-text' : 'light-text';
  }

  render() {
    return (
      <text transform={`matrix(1 0 0 1 ${this.props.coordinates.t1x} ${this.props.coordinates.t1y})`} onClick={() => { this.dateClicked(this.props.date) }} className={`${this.getClassName()} day-text`} >
        <tspan x="0" y="0" className="st11 st12 st13" >
          {this.state.date}
        </tspan>
        <tspan x={this.props.coordinates.t2x} y="19" className="st11 st12 st14">
          {this.props.day}
        </tspan>
      </text>
    );
  }
}

export default DateText;
