import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { updateHistory } from '../../ducks/reducer';

class WizardNine extends Component {

    render() {
        return (
            <div className="parent-div">
                <div className="vert-align">

                    <p>What is your address?</p> <br />

                    <input type="text" placeholder="Line One" onChange={(e) => this.props.updateHistory(e.target.value)} />
                    <input type="text" placeholder="Line Two" onChange={(e) => this.props.updateHistory(e.target.value)} />
                    <input type="text" placeholder="Line Three" onChange={(e) => this.props.updateHistory(e.target.value)} />


                    <Link to="/wTen"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        history: state.history
    }
}

export default connect(mapStateToProps, { updateHistory })(WizardNine);