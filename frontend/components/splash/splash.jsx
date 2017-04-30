import React from 'react';
import SearchFormContainer from '../search_form/search_form_container';

class Splash extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    window.setTimeout(() => {
      this.splash.querySelectorAll("*").forEach((el) => {
        el.classList.add("fade-in");
      });
    }, 100);
  }

  render(){
    return (
      <div id="splash" ref={ splash => this.splash = splash }>
        <div id="splash-welcome" className="to-fade-in-fast">Truck, Please! Bay Area</div>
        <SearchFormContainer />
      </div>
    )
  }
}

export default Splash;
