import React, { Component } from 'react';
//import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';

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
        return (
            <div>
                {customers.map(customer => {
                    return <Customer
                        id={customer.id}
                        image={customer.image}
                        name={customer.name}
                        birthday={customer.birthday}
                        gender={customer.gender}
                        job={customer.job}
                    />
                })}
            </div>
        );
    }
}

export default App;
