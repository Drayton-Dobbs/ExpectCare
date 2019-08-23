import React from 'react';
import './styles.css'

class AboutTheOwner extends React.Component {

  render() {
    return (
      <div style={{backgroundColor: 'rgb(236,236,236)'}}>
        <h3 className="ownerTitle brandFont">About the Owner</h3>
        <div className="ownerContainer">
          <div className="ownerPledge">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus neque in leo fermentum sollicitudin. Vestibulum sed libero nisl. Quisque lectus lectus, pharetra feugiat gravida ac, aliquam lacinia diam. Vestibulum id dignissim enim. Quisque et consectetur lacus, sit amet venenatis eros. Nunc venenatis felis ac gravida cursus. In bibendum sollicitudin pretium. Ut sit amet felis consectetur, ultricies urna in, vestibulum arcu. Phasellus aliquam lorem maximus eros placerat pretium quis et dolor. Proin semper dapibus lectus, accumsan faucibus nisi scelerisque ut. Aliquam pretium auctor ex, sit amet placerat ante blandit in. Aliquam purus diam, sagittis eleifend dui eget, bibendum finibus sapien. Sed sollicitudin lobortis enim, ut tempus metus congue in."</div>
          <div className="ownerPicture"></div>
        </div>

      </div>

    )
  }
}

export default AboutTheOwner