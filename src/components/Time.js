import React, { Component } from 'react'
import {connect} from 'react-redux'
import {setIsTimeClear, setTime} from '../redux/actions'

class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
              isShowTime: true
            };

        this.changeTimeVisibilityHandler = this.changeTimeVisibilityHandler.bind(this);
     }    

     changeTimeVisibilityHandler= event => {
        event.persist()
        this.setState({
            isShowTime: this.state.isShowTime ? false : true
        })
             
      
        
    }

     render(){
        
        return(
            <div className="form-check form-switch">             
                
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={this.changeTimeVisibilityHandler} checked={this.state.isShowTime && "checked"}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><h6 className={this.state.isShowTime ? "vis-time" : "invis-time"}>{this.props.hour < 10 ? "0"+this.props.hour : this.props.hour}:{this.props.min < 10 ? "0" + this.props.min : this.props.min}:{this.props.sec < 10 ? "0" + this.props.sec : this.props.sec}</h6></label>
                
            </div>
            
        )
    }
}

const mapDispatchToProps = {
    setIsTimeClear, setTime
}


const mapStateToProps = state => {
    
    return {
        isTimeClear: state.time.isTimeClear,
        sec: state.time.sec,
        min: state.time.min,
        hour: state.time.hour
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Time) 
