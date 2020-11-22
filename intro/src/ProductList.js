import React, { Component } from 'react';
import {Table, Button} from "reactstrap"

class ProductList extends Component {

    

    render() 
    {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <Table>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map(product=>
                                (
                                    <tr key = {product.id}>
                                       
                                        <th scope="row">{product.id}</th>
                                        <td>{product.author}</td>
                                        <td>{product.title}</td>
                                        <td>@mdo</td>
                                        <td><Button color="info" onClick={()=>this.props.addToCart(product)}>Add</Button></td>
                                    </tr>
                                ))
                        }
            
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default ProductList;