import React from 'react'
import internet from 'superagent'
import{createAd} from '../actions/adsAction'
import {connect} from 'react-redux'

class CreateAdForm extends React.Component {
    state = {
        title: '',
        price: 0,
        desc: '',
        pictureUrl: '',
        userId: 1
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        internet
            .post('http://localhost:4000/ads')
            .send(this.state)
            .then(res => this.props.createAd(res.body))
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Product Title:
                    <input onChange={this.handleChange} type='text' name='title' value={this.state.name} required />
                </label>
                <label>Description:
                    <input onChange={this.handleChange} type='text' name='desc' value={this.state.desc} required />
                </label>
                <label>Price:
                    <input onChange={this.handleChange} type='number' name='price' value={this.state.price} required />
                </label>
                <label>Picture Url:
                    <input onChange={this.handleChange} type='text' name='pictureUrl' value={this.state.pictureUrl} required />
                </label>
                {/* TO-DO: user id should be automatically generated */}
                <label>User Id
                    <input onChange={this.handleChange} type='number' name='userId' value={this.state.UserId} required />
                </label>
                <button>Submit</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    ads: state.ads
  })
  
  const mapDispatchToProps = {createAd}
  
  export default connect(mapStateToProps, mapDispatchToProps)(CreateAdForm)