import React from 'react'
import {Link} from 'react-router-dom'

export default class AdsList extends React.Component {
    render(){
        const list = this.props.ads.map(ad => {
            return <div key={ad.id}>
                    
                   <Link to={`/ads/${ad.id}`} >
                     <h3>{ad.title}</h3>
                     <img src={ad.pictureUrl} alt={ad.title} width='150px'/>
                   </Link>
                   <h4>Price: {ad.price} €</h4>
                  </div>
        })

        return(
            <div>
                {list}
            </div>
        )
    }
}