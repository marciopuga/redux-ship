// @flow
import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './view.css';
import Counter from './counter/view';
import * as RandomGifController from './random-gif/controller';
import RandomGif from './random-gif/view';
import * as Controller from './controller';
import * as Model from './model';

type Props = {
  dispatch: (action: Controller.Action) => void,
  state: Model.State,
};

export default class Index extends PureComponent<void, Props, void> {
  handleDispatchRandomGif = (action: RandomGifController.Action): void => {
    this.props.dispatch({type: 'RandomGif', action});
  };

  render() {
    return (
      <div className="Index">
        <div className="Index-header">
          <img src={logo} className="Index-logo" alt="logo" />
          <h2>Redux Ship</h2>
        </div>
        <h1>Counter</h1>
        <Counter
          state={this.props.state.counter}
        />
        <h1>Simple</h1>
        <div className="Index-randomGif">
          <RandomGif
            dispatch={this.handleDispatchRandomGif}
            state={this.props.state.randomGif}
            tag="dogs"
          />
        </div>
      </div>
    );
  }
}