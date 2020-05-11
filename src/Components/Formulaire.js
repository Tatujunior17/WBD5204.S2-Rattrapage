import React, {Component} from 'react';

class Formulaire extends Component {
    state = {
        name: null,
        username: null,
        email: null,
        website: null,
        phone: null,
        street: null,
        city: null,
        zipcode: null
    };

    change = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    submit = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.addUser(this.state);
    };

    render(){
        return(
            <div>
                <form onSubmit={this.submit}>
                    <label htmlFor="name"> Name</label>
                    <input type="text" id="name" onChange={this.change} />
                    <label htmlFor="name"> Username</label>
                    <input type="text" id="username" onChange={this.change} />
                    <label htmlFor="name"> Email</label>
                    <input type="text" id="email" onChange={this.change} />
                    <label htmlFor="name"> Website</label>
                    <input type="text" id="website" onChange={this.change} />
                    <label htmlFor="name"> Phone</label>
                    <input type="text" id="phone" onChange={this.change} />
                    <label htmlFor="name"> Street</label>
                    <input type="text" id="street" onChange={this.change} />
                    <label htmlFor="name"> City</label>
                    <input type="text" id="city" onChange={this.change} />
                    <label htmlFor="name"> Zipcode</label>
                    <input type="text" id="zipcode" onChange={this.change} />
                    <button>Enregistrer</button>
                </form>
            </div>
        )
    }
}
export default Formulaire;
