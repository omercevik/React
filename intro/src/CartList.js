import React, { Component } from 'react';
import {Table, Button} from "reactstrap"

class CartList extends Component {

    renderCard()
    {
        return (
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category Id</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.cart.map(cartItem=>(
                            <tr key={cartItem.product.id}>
                                <td></td>
                                <td>{cartItem.product.id}</td>
                                <td>{cartItem.product.author}</td>
                                <td>{cartItem.quantity}</td>
                                <td><Button color="danger"
                                onClick={()=>this.props.removeFromCart(cartItem.product)}>Remove</Button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        )
    }

    render() {
        return (
            <div>
                {this.renderCard()}
            </div>
        );
    }
}

export default CartList;