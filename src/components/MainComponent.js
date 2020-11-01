import React, { Component } from 'react';


class MainComponent extends Component {
   constructor(props) {
      super(props)
      this.register = this.register.bind(this); 
  }



   register(){
      this.props.history.push('/user');
  }

   render() {
      return (
         <div>
              <div className = "row">
                    <button className = "btn-btn-primary" onClick = {this.register}>register</button>
                </div>
         </div>
      );
   }
}

export default MainComponent;