import React, { Component } from 'react';

class PlugMe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            points: 0,
            club:"Man United",
            color: "red",
            gamesPlayed: 25,
            currentStanding: 4
        };
        /**
         * This is manual binding in-case we want to define a function like this  >>> handlePoints () {}
         */

        // this.handlePoints = this.handlePoints.bind(this)
    }
    handlePoints=()=>{
        this.setState({points : 150});
    }
    static getDerivedStateFromProps(props, state) {
        /**
         * Enable this to see the state being changed and also dont use setState Method by react
         * Note: this is a life cycle method that will be called on component mounting and will return state
         */
        return {
            points: 57
        }

        //TODO : Implement this in a way where you will not affect the rest of the state values
    }

    render() {

        return (
            <div>
                <h1> Plugged In </h1>
                <p>Club Points {this.state.points} </p>
                <div>
                    <button onClick={this.handlePoints}> Change Points</button>
                </div>
            </div>
        )
    }

    /**
     * TODO:
     * 1/ Display all the information in the club and add a form to accept user input to change the values displayed.
     * DoD/ Change the values of the display panel as the user is adjusting the changes
     *     Stretch :  Use Bootstrap in your component
     */
}
export default PlugMe;