import React from 'react';
import LeavingRoom from './../LeavingRoomComponent/LeavingRoom';
class Home  extends React.Component {

    constructor(){
        super();
        this.state = {
            leavingRoom : {
                "tv" : "Black TV 60'" ,
                "lamp": "2pcs"
            },
            "bed" : "queen"
        }
    }

    render (){
        return (
            <LeavingRoom leavingRoom={this.state.leavingRoom} />
            );

    }
}
export default Home;

//State : Maintain some data :