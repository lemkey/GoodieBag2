import React from 'react';
import {fetchCandy} from '../reducers/index'
import {connect} from 'react-redux'

export class AllCandy extends React.Component {


useEffect() {
  console.log("CDM props", this.props);
    this.props.loadCandy();
  }

  render() {
    console.log(this.props);
    if (!this.props.candy) return null;
    const candy = this.props.candy;
    return (
      <div>
        <h1>CANDY STORE</h1>
         {candy.map((theCandy) => {
           console.log("theCandy", theCandy);
          return (
            <div className="candy" key={candy.id}>
              <h3>Candy: {theCandy.name}</h3>
              <h3>Description: {theCandy.description}</h3>
              <img src={theCandy.imageUrl} />
            </div>
          );
        })
      }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("MSTP props", state);
  return {
  candy: state.candy
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
  loadCandy: () => dispatch(fetchCandy())
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(AllCandy)
