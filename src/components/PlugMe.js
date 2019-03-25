import React, { Component } from 'react';

class PlugMe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

                points: 0,
                name:"Man United",
                color: "red",
                gamesPlayed: 25,
                currentStanding: 4

        };
        // this.state = {
        //             points: 0,
        //             name:"Man United",
        //             color: "red",
        //             gamesPlayed: 25,
        //             currentStanding: 4
        //
        //     };
        /**
         * This is manual binding in-case we want to define a function like this  >>> handlePoints () {}
         */

        // this.handlePoints = this.handlePoints.bind(this)
    }
    handlePoints=()=>{
        // this.setState({
        //                         club: {points : 150}
        //                     }
        //              );

        //DOD:don't use setState

        this.setState(prveState => {return{
                    points:prveState.points = 150

              }

            })


    };

    inputChangeHandler=(event)=>{
        this.setState({
                        [event.target.name]:event.target.value
            }
        )
    }
    // static getDerivedStateFromProps(props, state) {
    //     /**
    //      * Enable this to see the state being changed and also dont use setState Method by react
    //      * Note: this is a life cycle method that will be called on component mounting and will return state
    //      */
    //     // return {
    //     //     club : {points: 57}
    //     // }
    //
        //DOD : Implement this in a way where you will not affect the rest of the state values
    // }

    render() {

        return (
            <div>
                <p>point {this.state.points}  <button onClick={this.handlePoints}> chnage point </button></p>

              <form>
                  <h3>Add club information </h3>
                  <input type="text" name="points" placeholder="Point" onChange={this.inputChangeHandler}/><br/>
                  <input type="text" name="name" placeholder="Club Name" onChange={this.inputChangeHandler}/><br/>
                  <input type="text" name="color" placeholder="Color" onChange={this.inputChangeHandler}/><br/>
                  <input type="text" name="gamesPlayed" placeholder="Games Played" onChange={this.inputChangeHandler}/><br/>
                  <input type="text" name="currentStanding" placeholder="Current Standing" onChange={this.inputChangeHandler}/><br/>

              </form>
                <div className="card">
                    <p>points :- {this.state.points}</p>
                    <p>Club Name :- {this.state.name}</p>
                    <p>Color :- {this.state.color}</p>
                    <p>Games Played :- {this.state.gamesPlayed}</p>
                    <p>Current Standing :- {this.state.currentStanding}</p>
                </div>
            </div>

        )

    }


    /**
     * DOD:
     * 1/ Display all the information in the club and add a form to accept user input to change the values displayed.
     * DoD/ Change the values of the display panel as the user is adjusting the changes
     *     Stretch :  Use Bootstrap in your component
     */
}
export default PlugMe;