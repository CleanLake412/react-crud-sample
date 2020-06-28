import React, { Component } from 'react';
//import logo from './logo.svg';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing(3),
        overflowX: "auto"
    },
    table: {
        minWidth: 1080
    },

    progress: {
        margin: theme.spacing(2)
    }
});

class App extends Component {
    state = {
        customers: '',
        completed: 0
    }

    componentDidMount() {
        this.timer = setInterval(this.progress, 20);
        this.callApi()
            .then(res => this.setState({customers: res}))
            .catch(err => console.log(err));
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    callApi = async () => {
        const response = await fetch('/api/customers');
        const body = await response.json();
        return body;
    }

    progress = () => {
        const { completed } = this.state;
        this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
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
                        {this.state.customers ? this.state.customers.map(c => {
                            return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
                        }) :
                        <TableRow>
                            <TableCell colSpan="6" align="center">
                                <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed} />
                            </TableCell>
                        </TableRow>}
                    </TableBody>
                </Table>
            </Paper>
            <CustomerAdd/>
            </div>
        );
    }
}

export default withStyles(styles)(App);
