import React from 'react'
import internet from 'superagent'
import {connect} from 'react-redux'
import AdsList from './AdsList'
import {fetchAds} from '../actions/adsAction'
import CreateAdForm from './CreateAdForm'

class AdsListContainer extends React.Component {
  state = { value: ''}
  
  componentDidMount() {
    console.log('mounting?')
    internet.get('http://localhost:4000/ads') 
      .then(res => {
        console.log('res.body:',res.body)
        this.props.fetchAds(res.body)
      })
  }

  render() {
    if(!this.props.ads){
      return <p>Loading...</p>
    }else{
      return <div>
        <CreateAdForm />
        <AdsList ads={this.props.ads} />
      </div> 
    }
  }
}

const mapStateToProps = state => ({
  ads: state.ads
})

const mapDispatchToProps = {fetchAds}

export default connect(mapStateToProps, mapDispatchToProps)(AdsListContainer)