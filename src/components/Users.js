import { Grid, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Table, withStyles, ButtonGroup, Button } from "@material-ui/core";
import { React, useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from '../actions/user';
import UserForm from './UserForm';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useToasts } from "react-toast-notifications";

const styles = theme => ({
    root: {
        "& .MuiTableCell-head": {
            fontSize: "1.25rem"
        }
    },
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
})

const Users = ({classes, ...props}) => {
    const [currentId, setCurrentId] = useState(0)

    useEffect(()=> {
        props.fetchAllUsers()
    }, [])

    const { addToast } = useToasts()

    const onDelete = id => {
        if (window.confirm('Are you sure to delete this record?'))
            props.deleteUser(id,()=>addToast("Deleted successfully", { appearance: 'info' }))
    }

    return (
        <Paper className={classes.paper} elevation={24}>
            <Grid container>
                <Grid item xs={6}>
                    <UserForm {...({ currentId, setCurrentId })}  />
                </Grid>
                <Grid item xs={6}>
                    <TableContainer>
                        <Table >
                            <TableHead className={classes.root}>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Mobile</TableCell>
                                    <TableCell>Blood Group</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.userList.map((record, index) => {
                                        return (<TableRow key={index} hover>
                                            <TableCell>{record.fullName}</TableCell>
                                            <TableCell>{record.mobile}</TableCell>
                                            <TableCell>{record.bloodGroup}</TableCell>
                                            <TableCell>
                                                <ButtonGroup variant="text">
                                                    <Button><EditIcon color="primary"
                                                        onClick={() => { setCurrentId(record.id) }} /></Button>
                                                    <Button><DeleteIcon color="secondary"
                                                        onClick={() => onDelete(record.id)} /></Button>
                                                </ButtonGroup>
                                            </TableCell>
                                        </TableRow>)
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>
    );
}

const mapStateToProps = state => ({
    userList: state.user.list
})

const mapActionToProps = {
    fetchAllUsers: actions.fetchAll,
    deleteUser: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Users));