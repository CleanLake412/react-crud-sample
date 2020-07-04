import React from 'react'
import { post } from 'axios';

class CustomerAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: ''
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleFileChange = this.handleFileChange.bind(this)
        this.handleValueChange = this.handleValueChange.bind(this)
        this.addCustomer = this.addCustomer.bind(this)
    }

    handleFormSubmit(e) {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
                this.props.stateRefresh();
            })
        this.setState({
            file: null,
            userName: "",
            birthday: "",
            gender: "",
            job: "",
            fileName: ""
        })

        //window.location.reload();
    }

    handleFileChange(e) {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        });
    }

    handleValueChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addCustomer(){
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('image', this.state.file)
        formData.append('name', this.state.userName)
        formData.append('birthday', this.state.birthday)
        formData.append('gender', this.state.gender)
        formData.append('job', this.state.job)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config)
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h1>New customer</h1>
                Photo: <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} /><br/>
                Name: <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange} /><br/>
                Birthday: <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange} /><br/>
                Gender: <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange} /><br/>
                Job: <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange} /><br/>
                <button type="submit">Add</button>
            </form>
        )
    }
}

export default CustomerAdd
