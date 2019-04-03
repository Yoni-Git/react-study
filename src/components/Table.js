import  React ,{Component} from 'react'

class Table extends Component{


    render(){
        return(
            <div>
                <table>
                    <tbody className='table'>
                    {this.props.header.map((items,i) => {return(<th key={i}>{items}</th>)})}
                    </tbody>
                    <tbody>
                    {this.props.user.map((data,i) =>{return(<tr>
                        <td key={i}>{data.id}</td>
                        <td key={i}>{data.first_name}</td>
                        <td key={i}>{data.last_name}</td>
                        <td key={i}>{data.avatar}</td>

                    </tr>

                                                            )})}
                    </tbody>

                </table>
            </div>

        )
    }
}
export default Table