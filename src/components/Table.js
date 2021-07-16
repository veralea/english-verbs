import React, { Component } from 'react'
import './Table.css';
import Input from './Input'
import Time from './Time'
import Score from './Score'
import {connect} from 'react-redux'
import {setVerb, setVoice, setPerson, setIsTimeClear, setTime, clearScore} from '../redux/actions'
import verbList from '../constants/verbList'


class Table extends Component {
    constructor(props) {
        super(props);
        
        this.changeVerbHandler = this.changeVerbHandler.bind(this);
        this.changeVoiceHandler = this.changeVoiceHandler.bind(this);
        this.changePersonHandler = this.changePersonHandler.bind(this);
        this.tick = this.tick.bind(this);
       
     }


    tick() {
      this.props.setIsTimeClear(false);
      this.props.setTime(this.props.sec,this.props.min,this.props.hour);

  }

    changeVerbHandler = event => {
        event.persist()
        clearInterval(this.timerID);
        this.props.setVerb(event.target.value);
        this.props.setTime(0,0,0);
        this.props.clearScore();
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
    }
    changeVoiceHandler = event => {
      event.persist()
      clearInterval(this.timerID);
      this.props.setVoice(event.target.value);
      this.props.setTime(0,0,0);
      this.props.clearScore();
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
    changePersonHandler = event => {
      event.persist()
      clearInterval(this.timerID);
      this.props.setPerson(event.target.value);
      this.props.setTime(0,0,0);
      this.props.clearScore();
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
   
     
    render() {
        return (
            <>
              <div className="absolute">
                <Time />
                <Score />  
              </div>
              <div className="row2">
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <select className="form-select" onChange={this.changeVerbHandler}>       
                    <option>Выберите глагол из этого списка :</option>
                    {
                        verbList.map((verb, i) => <option value={i} key={i}>{verb[0]}</option> )
                    }
                    </select>
                </div>    
              </div>
              
              <div className="row2">
                <span className="border radio-box">
                  <div className="form-check form-check-inline">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="flexRadioDefault" 
                      id="flexRadioDefault1"
                      value="ACTIVE"
                      checked={this.props.voice === "ACTIVE"}
                      onChange={this.changeVoiceHandler}      
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Действительный залог
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="flexRadioDefault" 
                      id="flexRadioDefault2"
                      value="PASSIVE"
                      checked={this.props.voice === "PASSIVE"}
                      onChange={this.changeVoiceHandler} 
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Страдательный залог
                    </label>
                  </div>
                </span>
              </div>
              <div className="row2">
              
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <select className="form-select " 
                        id="person" 
                        onChange={this.changePersonHandler}
                    >
                        <option value="I">Выберите лицо из этого списка :</option>
                        <option value="I">I</option>
                        <option value="You">You</option>
                        <option value="He">He</option>
                        <option value="She">She</option>
                        <option value="It">It</option>
                        <option value="We">We</option>
                        <option value="You">You</option>
                        <option value="They">They</option>
                    </select>
                    
                </div>    
              </div>
              

            <div className="tbl mdl-shadow--2dp">
              <div className="row">
                <div className="cell1 corn">
                   {this.props.voice}   
                </div>
                <div className="cell head">
                    SIMPLE 
                </div>
                <div className="cell head">
                    CONTINUOUS (PROGRESSIVE)
                </div>
                <div className="cell head">
                    PERFECT SIMPLE
                </div>
                <div className="cell head" style={{"visibility":(this.props.voice === "ACTIVE" ? "visible":"hidden")}}>
                    PERFECT CONTINUOUS   
                </div>                                                                  
              </div>
              <div className="row bord">
                <div className="cell1"> 
                    Infinitive
                </div>  
                <Input fildNum="0" />
                <Input fildNum="1" />
                <Input fildNum="2" />
                <Input fildNum="3" />
              </div>
              <div className="row1">
                <span title="Утвердительная форма" dataBsToggle="tooltip" dataBsPlacement="bottom">Affirmative</span>
              </div>
              <div className="row">
                <div className="cell1">  
                    Present
                </div>  
                <Input fildNum="4"/>
                <Input fildNum="5"/>
                <Input fildNum="6"/>
                <Input fildNum="7"/>
              </div>  
              <div className="row">
                <div className="cell1">  
                    Past
                </div>  
                <Input fildNum="8"/>
                <Input fildNum="9"/>
                <Input fildNum="10"/>
                <Input fildNum="11"/>
              </div>
              <div className="row bord">
                <div className="cell1">  
                    Future
                </div>  
                <Input fildNum="12"/>
                <Input fildNum="13"/>
                <Input fildNum="14"/>
                <Input fildNum="15"/>
              </div>
              <div className="row1">
                <span title="Вопросительная форма" dataBsToggle="tooltip" dataBsPlacement="bottom">Interrogative</span>
              </div>              
              <div className="row">
                <div className="cell1">  
                    Present
                </div>   
                <Input fildNum="16"/>
                <Input fildNum="17"/>
                <Input fildNum="18"/>
                <Input fildNum="19"/>
              </div>  
              <div className="row">
                <div className="cell1">  
                    Past
                </div>   
                <Input fildNum="20"/>
                <Input fildNum="21"/>
                <Input fildNum="22"/>
                <Input fildNum="23"/>
              </div> 
              <div className="row bord">
                <div className="cell1">  
                    Future
                </div>  
                <Input fildNum="24"/>
                <Input fildNum="25"/>
                <Input fildNum="26"/>
                <Input fildNum="27"/>
              </div>
              <div className="row1">
                <span title="Отрицательная форма" dataBsToggle="tooltip" dataBsPlacement="bottom">Negative</span>
              </div>              
              <div className="row">
                <div className="cell1">  
                    Present
                </div>  
                <Input fildNum="28"/>
                <Input fildNum="29"/>
                <Input fildNum="30"/>
                <Input fildNum="31"/>
              </div> 
              <div className="row">
                <div className="cell1">  
                    Past
                </div>  
                <Input fildNum="32"/>
                <Input fildNum="33"/>
                <Input fildNum="34"/>
                <Input fildNum="35"/>
              </div>  
              <div className="row">
                <div className="cell1">  
                    Future
                </div>  
                <Input fildNum="36"/>
                <Input fildNum="37"/>
                <Input fildNum="38"/>
                <Input fildNum="39"/>
              </div>                                                                                                                            
            </div>
            </>
        )
      }
}
const mapDispatchToProps = {
    setVerb, setVoice, setPerson, setIsTimeClear, setTime, clearScore
}

const mapStateToProps = state => {
    
  return {
      isTimeClear: state.time.isTimeClear,
      sec: state.time.sec,
      min: state.time.min,
      hour: state.time.hour,
      voice: state.customization.voice
  }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(Table) 
