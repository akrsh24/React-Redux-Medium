import React, { Component } from 'react';
import './Counter.css';
import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter,resetCounter } from '../redux/actions/action';

class Counter extends Component {
    render() {
        return (
            <div className="counter-container">
                <h2>Counter App</h2>
                <div className="counter-div">
                    <input type="text" value={this.props.count} className="counter-input" readOnly />
                    <div className="counter-btn">
                        <button type="button" onClick={() => this.props.increaseCounter(this.props.count)} >++</button>
                        <button type="button" onClick={() => this.props.decreaseCounter(this.props.count)} >--</button>
                        <button type="button" onClick={() => this.props.resetCounter(0)}>Reset</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        count: state.counterReducer.count
    }
}

export default connect(mapStateToProps, { increaseCounter, decreaseCounter,resetCounter })(Counter);