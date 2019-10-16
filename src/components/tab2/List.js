import React, { Component } from 'react';
import Form from './form/Form';
import Table from './table/Table';

class List extends Component {
    render() {
        return (
            <div>
                <Form />
                <Table />
            </div>
        );
    }
}

export default List;