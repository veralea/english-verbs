import React, { Component } from 'react'
import {connect} from 'react-redux'

class Score extends Component {
    constructor(props) {
        super(props);
        this.state = {
               numTrueFields: 0,
               numAllFields: 0,
               isShowScore: true
            };

        this.changeScoreVisibilityHandler = this.changeScoreVisibilityHandler.bind(this);
     }    

     changeScoreVisibilityHandler= event => {
        event.persist()
        this.setState({
            isShowScore: this.state.isShowScore ? false : true
        })
   
    }
    
     render(){
        
        return(
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="switch2" onChange={this.changeScoreVisibilityHandler} checked={this.state.isShowScore && "checked"}/> 
                <label className="form-check-label" htmlFor="switch2">
                    <h6 className={this.state.isShowScore ? "vis-time" : "invis-time"}>{this.props.trueFields.length} / {this.props.allFields.length} 
                    </h6>
                </label>

            </div>
            
        )
    }
}
// const mapDispatchToProps = {
//     setIsAdmin
// }    

const mapStateToProps = state => {
    
    return {
        allFields : state.score.allFields,
        trueFields: state.score.trueFields
    }
    
}


export default connect(mapStateToProps,null)(Score)