import React from 'react';

class LeavingRoom  extends React.Component {
    render (){
       const  {tv, lamp} = this.props.leavingRoom;
        return (<div>Tv : {tv} <br /> Lamp : {lamp} </div>);

            }
}
export default LeavingRoom;
