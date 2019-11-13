import React from 'react'
import {Link} from 'react-router-dom'
import internet from 'superagent'
import{deleteAd} from '../actions/adsAction'
import {connect} from 'react-redux'

class AdsList extends React.Component {
    handleDelete = (ad) => () => {
        console.log('button got clicked?')
        internet
            .delete(`http://localhost:4000/ads/${ad.id}`)
            //.then(() => console.log(ad))
            .then(() => this.props.deleteAd(ad)) 
    }
    
    render(){
        const list = this.props.ads.map(ad => {
            return <div key={ad.id}>
                    
                   <Link to={`/ads/${ad.id}`} >
                     <h3>{ad.title}</h3>
                     <img src={ad.pictureUrl} alt={ad.title} width='150px'/>
                   </Link>
                   <h4>Price: {ad.price} €</h4>
                   <div className='seller-action'>
                        <button>Edit</button>
                        <button onClick={this.handleDelete(ad)}>Delete</button>
                   </div>
                  </div>
        })

        return(
            <div>
                {list}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ads: state.ads
  })
  
  const mapDispatchToProps = {deleteAd}
  
  export default connect(mapStateToProps, mapDispatchToProps)(AdsList)