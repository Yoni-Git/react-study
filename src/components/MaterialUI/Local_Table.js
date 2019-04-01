import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

class Local_Table  extends React.Component {

     styles = theme => ({
        root: {
            width: '100%',
            marginTop: theme.spacing.unit * 3,
            overflowX: 'auto',
        },
        table: {
            minWidth: 700,
        },
    });
    constructor(){
        super();
            this.createData('Frozen yoghurt', 159, 6.0, 24, 4.0);
            this.createData('Ice cream sandwich', 237, 9.0, 37, 4.3);
            this.createData('Eclair', 262, 16.0, 24, 6.0);
            this.createData('Cupcake', 305, 3.7, 67, 4.3);
            this.createData('Gingerbread', 356, 16.0, 49, 3.9);

    }
    rows = [];

     createData =(name, calories, fat, carbs, protein)=> {
        this.rows.push({  name, calories, fat, carbs, protein });
    };
    render (){
         return (
             <Paper >
                 <Table>
                     <TableHead>
                         <TableRow>
                             <TableCell>Dessert (100g serving)</TableCell>
                             <TableCell align="right">Calories</TableCell>
                             <TableCell align="right">Fat (g)</TableCell>
                             <TableCell align="right">Carbs (g)</TableCell>
                             <TableCell align="right">Protein (g)</TableCell>
                         </TableRow>
                     </TableHead>
                     <TableBody>
                         {this.rows.map((row , index)=> (
                             <TableRow key={index}>
                                 <TableCell component="th" scope="row">
                                     {row.name}
                                 </TableCell>
                                 <TableCell align="right">{row.calories}</TableCell>
                                 <TableCell align="right">{row.fat}</TableCell>
                                 <TableCell align="right">{row.carbs}</TableCell>
                                 <TableCell align="right">{row.protein}</TableCell>
                             </TableRow>
                         ))}
                     </TableBody>
                 </Table>
             </Paper>
         )

    }
}
export default (Local_Table);