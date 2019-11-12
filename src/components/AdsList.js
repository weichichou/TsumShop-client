import React from 'react'
import {Link} from 'react-router-dom'

export default class AdsList extends React.Component {
    render(){
        const list = this.props.ads.map(ad => {
            return <h5 key={ad.id}>
                   <Link to={`/ads/${ad.id}`} >
                     {ad.title}
                   </Link>
                  </h5>
        })

        return(
            <div>
                {list}
            </div>
        )
    }
}