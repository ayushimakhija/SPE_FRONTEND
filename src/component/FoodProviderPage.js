import React, {Component} from "react";
import Alert from 'react-bootstrap/Alert';
import {Link} from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class FoodProviderPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            dishName:'',
            dishDescription:'',
            dishImage:'',
            dishPrice:'',
            day:'',

        }

        this.update = this.update.bind(this);
        this.create = this.create.bind(this);
        this.DishName = this.DishName.bind(this);
        this.DishDescription = this.DishDescription.bind(this);
        this.Day = this.Day.bind(this);
        this.DishImage = this.DishImage.bind(this);
        this.DishPrice = this.DishPrice.bind(this);
    }
    DishName= (event) => {
        this.setState({dishName: event.target.value});
    }
    Day= (event) => {
        this.setState({day: event.target.value});
    }
    DishImage= (event) => {
        this.setState({dishImage: event.target.value});
    }
    DishDescription= (event) => {
        this.setState({dishDescription: event.target.value});
    }
    DishPrice= (event) => {
        this.setState({dishPrice: event.target.value});
    }


    async update(event) {
        event.preventDefault();
        let Menu = {
            dishName: this.state.dishName,
            dishDescription: this.state.dishDescription,
            dishImage: this.state.dishImage,
            dishPrice: this.state.dishPrice,
            day: this.state.day,
        }
        const res = await axios.put('http://localhost:8082/api/updateMenu/1', Menu)
        console.log(res.data.json);

        {
            this.props.history.push('/');
            alert("updated sucessfully")
        }

        alert("updated sucessfully")

    }
    create(event){
        event.preventDefault();

        let Menu = {
            dishName: this.state.dishName,
            dishDescription: this.state.dishDescription,
            dishImage: this.state.dishImage,
            dishPrice: this.state.dishPrice,
            day: this.state.day,
        }
        axios.post('http://localhost:8082/api/createMenu', Menu)
            .then(response => {
                console.log(response);
                console.log(response.data);
                {
                    this.props.history.push('/');
                    alert("created succesfully");
                }
            })


    }
    render(){
        return (

            <div>
                <Form>
                    <Form.Group  controlId="formGridEmail">
                        <Form.Label>Dish Name</Form.Label>
                        <Form.Control type="Dish Name" placeholder="Enter dish Name" value={this.state.dishName}
                                      onChange={this.DishName}/>
                    </Form.Group>
                    <Form.Group  controlId="formGridPassword">
                        <Form.Label>Dish Price</Form.Label>
                        <Form.Control type="dish price" placeholder="enter price" value={this.state.dishPrice}
                                      onChange={this.DishPrice} />
                    </Form.Group>
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Dish Description</Form.Label>
                        <Form.Control placeholder="my favourite" value={this.state.dishDescription}
                                      onChange={this.DishDescription}/>
                    </Form.Group>
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Day</Form.Label>
                        <Form.Control placeholder="Monday" value={this.state.day}
                                      onChange={this.Day}/>
                    </Form.Group>

                    <Form.Group controlId="formGridCompany">
                        <Form.Label>Dish Image</Form.Label>
                        <Form.Control placeholder="Image" value={this.state.dishImage}
                                      onChange={this.DishImage}/>
                    </Form.Group>


                    <br/>
                    <Button variant="primary" type="submit" onClick={this.update}>
                        update
                    </Button>
                    <br/>
                    <br/>
                    <Button variant="primary" type="submit" onClick={this.create}>
                        Create
                    </Button>
                </Form>


            </div>


        )
    }
}
export default FoodProviderPage
