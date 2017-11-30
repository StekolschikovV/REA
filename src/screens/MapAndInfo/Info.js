import React, {Component} from 'react';

class Info extends Component {

    constructor(props) {
        super(props)

        this.content = this.props.data
        this.id = this.props.id
        this.contentKeys = Object.keys(this.content)

        this.state = {
            showImg: 0
        }
    }

    render() {
        return (
            <div id="info">
                <div className="slider">
                    <ul>
                        {
                            this.content[this.id].imgs.map((key, i) => {
                                    console.log(`../../img/data/${this.content[this.id].imgs[i]}`)
                                    return (
                                        <li key={i} className={ this.state.showImg === i ? 'show' : '' }
                                            style={{backgroundImage: "url(" + require(`../../img/data/${this.content[this.id].imgs[i]}`) + ")"}}></li>
                                    )
                                }
                            )
                        }
                    </ul>

                    <div className="controls">
                        <button className={ 'previous ' + (this.state.showImg > 0? '' : 'hide') } onClick={ () => {
                            this.setState({showImg: --this.state.showImg})
                        }}>Previous
                        </button>

                        <button className={ 'next ' + (this.state.showImg < this.content[this.id].imgs.length - 1 ? '' : 'hide') } onClick={ () => {
                            this.setState({showImg: ++this.state.showImg})
                        }}>Next
                        </button>
                    </div>
                </div>
                <div className="textBlock">
                    <div className="adresLikePrice">
                        <div className="address">{this.content[this.id].address}</div>
                        <div className="likePrice">
                            <div className="like">Save</div>
                            <div className="price">{this.content[this.id].price}</div>
                        </div>
                    </div>
                    <div className="description">{this.content[this.id].description}</div>
                    <div className="attributes">
                        {this.content[this.id].isGarage ? <span>Garage</span> : ''}
                        {this.content[this.id].isAirConditioning ? <span>Air conditioning</span> : ''}
                        {this.content[this.id].isAlarmSystem ? <span>Alarm system</span> : ''}
                        {this.content[this.id].isBuildInWardrobes ? <span>Build in wardrobes</span> : ''}
                        {this.content[this.id].isCityViews ? <span>City Views</span> : ''}
                        {this.content[this.id].isConcierge ? <span>Concierge</span> : ''}
                        {this.content[this.id].isParking ? <span>Parking</span> : ''}
                        {this.content[this.id].isGuestApartment ? <span>Guest apartment</span> : ''}
                        {this.content[this.id].isGym ? <span>Gym</span> : ''}
                        {this.content[this.id].isHomeAppliances ? <span>Home Appliances</span> : ''}
                        {this.content[this.id].isHeating ? <span>Heating</span> : ''}
                        {this.content[this.id].isJacuzzi ? <span>Jacuzzi</span> : ''}
                        {this.content[this.id].isSolarium ? <span>Solarium</span> : ''}
                        {this.content[this.id].isSwimmingPool ? <span>Swimming pool</span> : ''}
                        {this.content[this.id].isTennisCourt ? <span>Tennis court</span> : ''}
                        {this.content[this.id].isUtilityRoom ? <span>Utility room</span> : ''}
                        {this.content[this.id].isViewsToPark ? <span>Views to park</span> : ''}
                    </div>
                </div>
            </div>

        )
    }
}

export default Info