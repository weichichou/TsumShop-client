import React from 'react'
import internet from 'superagent'
import {connect} from 'react-redux'
import {fetchAds} from '../actions/adsAction'

class DetailPage extends React.Component {
  state = { 
    id: this.props.match.params.id,
    title:'',
    pictureUrl:'',
    price: 0,
    desc: '',
    userId: 1}
  
  componentDidMount() {
    console.log('mounting?')
    console.log(this.props.match.params.id)
    internet.get(`http://localhost:4000/ads/${this.state.id}`) 
      .then(res => {
        console.log('res.body:',res.body)
        this.props.fetchAds(res.body)
        this.setState({
            title: res.body.title,
            pictureUrl: res.body.pictureUrl,
            price: res.body.price,
            desc: res.body.desc,
            userId: res.body.userId})
      })
  }

  render() {
    console.log(this.state.title)
    if(!this.props.ads){
      return <p>Loading...</p>
    }else{
      return <div>
        <h2>This is Detail Page</h2>
        <h3>Product Title: {this.state.title}</h3>
        <img src={this.state.pictureUrl} alt={this.state.title} height='300px'/>
        <h4>{this.state.desc}</h4>
        <h4>Price: {this.state.price} €</h4>
        <div>
            <h3>Seller's info</h3>
            <h4>Seller: {this.state.userId}</h4>
            <h4>Email: </h4>
            <h4>Phone: </h4>
        </div>
        
      </div> 
    }
  }
}

const mapStateToProps = state => ({
  ads: state.ads
})

const mapDispatchToProps = {fetchAds}

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage)