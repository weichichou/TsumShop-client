import React from 'react'
import internet from 'superagent'
import {connect} from 'react-redux'
import {getSingleAd} from '../actions/adsAction'
import {Link} from 'react-router-dom'

class DetailPage extends React.Component {
  state = { 
    id: this.props.match.params.id,
    title:'',
    pictureUrl:'',
    price: 0,
    desc: '',
    userId: 1,
    userName: '',
    userEmail:'',
    userPhone:0
}
  
  componentDidMount() {
    console.log('mounting?')
    console.log(this.props.match.params.id)
    internet.get(`http://localhost:4000/ads/${this.state.id}`) 
      .then(res => {
        console.log('res.body:',res.body)
        this.props.getSingleAd(res.body)
        this.setState({
            title: res.body.title,
            pictureUrl: res.body.pictureUrl,
            price: res.body.price,
            desc: res.body.desc,
            userId: res.body.userId,
            userName: res.body.user.username,
            userEmail: res.body.user.email,
            userPhone: res.body.user.phone})
      })
  }

  render() {
    if(!this.props.ads){
      return <p>Loading...</p>
    }else{
      return <div>
        <Link to='/' >
            <p>Back to Homepage</p>
        </Link>
        <h2>Product Title: {this.state.title}</h2>
        <img src={this.state.pictureUrl} alt={this.state.title} height='300px'/>
        <h4>{this.state.desc}</h4>
        <h4>Price: {this.state.price} €</h4>
        <div>
            <h2>Seller's info</h2>
            <h4>Seller: {this.state.userName}</h4>
            <h4>Email: {this.state.userEmail}</h4>
            <h4>Phone: {this.state.userPhone}</h4>
        </div>
        
      </div> 
    }
  }
}

const mapStateToProps = state => ({
  ads: state.ads,
})

const mapDispatchToProps = {getSingleAd}

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage)