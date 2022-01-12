import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

export default class ListCategories extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             categories: []
        }
    }
    
    componentDidMount() {
    axios
        .get(API_URL+'products')
        .then(res => {
            const menus = res.data;
            this.setState({ menus });
        })
        .catch(error => {
            console.log("Error yaaaaaaa, kasian deh lu!.. wkwkwkwk", error);
        })
    }

    render() {
        return (
            <Col md={2} mt="2">
                <h4><strong>Daftar Kategori</strong></h4>
                <hr />
            </Col>
        )
    }
}
