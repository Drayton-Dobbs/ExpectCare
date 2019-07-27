import React from 'react'
import InHomeBreif from '../InHomeCareBreif/InHomeCareBreif'
import HospiceBreif from '../HospiceBreif/HospiceBreif'
import Hands from '../../images/hands.jpg'
import InHomeCare from '../../images/InHomeCare.jpg'
import './styles.css'


class LandingPageCollapsible extends React.Component {
	constructor() {
		super()
		this.onChoice = this.onChoice.bind(this);
		this.state = {
			display: ''
		}
	}

	onChoice(e) {
		e.preventDefault()
		const id = e.currentTarget.getAttribute('id')
		console.log(id)
		if (id === 'HospiceBreif') {
			this.setState({display: id})
		} else {
			this.setState({display: id})
		}
	}

	render() {
		return (
			<div className="landingPageCollapsible">
				<div className="serviceItemWrapper">
					<div className="serviceItem" id="HospiceBreif" onClick={this.onChoice}>
						<img src={Hands} />
						<h2>Hospice Care</h2>
						<p>Your many hospice options should be discussed with professionals.</p>
					</div>

					<div className="serviceItem"  id="InHomeBreif" onClick={this.onChoice}>
						<img src={InHomeCare} />
						<h2>In-Home Care</h2>
						<p>Caring resources you can rely on and deserve.</p>
					</div>
				</div>
				{
					this.state.display === 'HospiceBreif' ? <HospiceBreif />
					: this.state.display === 'InHomeBreif' ? <InHomeBreif />
					: ''
				}
			</div>
		)
	}
}

export default LandingPageCollapsible