import React, { Component } from 'react';
//import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing.unit * 3,
        overflowX: "auto"
    },
    table: {
        minWidth: 1080
    }
});

const customers = [
    {
        'id': 1,
        'image': 'https://placeimg.com/64/64/1',
        'name': '山本太郎',
        'birthday': '961222',
        'gender': '男性',
        'job': '大学生'
    },
    {
        'id': 2,
        'image': 'https://placeimg.com/64/64/2',
        'name': '花島三郎',
        'birthday': '960508',
        'gender': '男性',
        'job': '開発者'
    },
    {
        'id': 3,
        'image': 'https://placeimg.com/64/64/3',
        'name': '久保田',
        'birthday': '961127',
        'gender': '男性',
        'job': 'デザイナー'
    }
]

class App extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>写真</TableCell>
                            <TableCell>名前</TableCell>
                            <TableCell>生年月日</TableCell>
                            <TableCell>性別</TableCell>
                            <TableCell>職業</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customers.map(c => {
                            return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default withStyles(styles)(App);
