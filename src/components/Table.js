import React, { Component } from 'react'
import './Table.css';
import Input from './Input'
import Time from './Time'
import Score from './Score'
import {connect} from 'react-redux'
import {setVerb, setVoice, setPerson, setIsTimeClear, setTime, clearScore} from '../redux/actions'


var verbList = 
[
    ['arise','arose' ,'arisen' ,'arising','arises'  ],
    ['awake','awoke' ,'awaken' ,'awaking', 'awakes' ],
    ['bear' ,'bore'  ,'born'   ,'bearing', 'bears'  ],
    ['beat' ,'beat'  ,'beaten' ,'beating', 'beats'  ],
    ['become','became','become','becoming', 'becomes' ],
    ['begin','began' ,'begun'  ,'beginning', 'begins'],
    ['bind' ,'bound' ,'bound'  ,'binding', 'binds' ],
    ['bite' ,'bit'   ,'bitten' ,'biting', 'bites'  ],
    ['bleed','bled'  ,'bled'   ,'bleeding', 'bleeds' ],
    ['blow' ,'blew'  ,'blown'  ,'blowing', 'blows'  ],
    ['break','broke' ,'broken' ,'breaking', 'breaks' ],
    ['breed','bred'  ,'bred'   ,'breeding', 'breeds' ],   
    ['bring','brought','brought' ,'bringing', 'brings'],
    ['build','built' ,'built'  ,'building', 'builds' ],
    ['burn' ,'burnt' ,'burnt'  ,'burning', 'burns'  ],
    ['burst','burst' ,'burst'  ,'bursting', 'bursts' ],
    ['buy'  ,'bought','bought' ,'buying', 'buys'   ],
    ['cast' ,'cast'  ,'cast'   ,'casting', 'casts'  ],
    ['catch','caught','caught' ,'catching', 'catches' ],
    ['choose','chose','chosen' ,'choosing', 'chooses' ], 
    ['cling','clung' ,'clung'  ,'clinging', 'clings' ],
    ['come' ,'came'  ,'come'   ,'coming', 'comes'   ],
    ['cost' ,'cost'  ,'cost'   ,'costing', 'costs'  ],
    ['creep','crept' ,'crept'  ,'creeping', 'creeps' ],
    ['cut'  ,'cut'   ,'cut'    ,'cutting', 'cuts'  ],
    ['deal' ,'dealt' ,'dealt'  ,'dealing', 'deals' ],
    ['dig'  ,'dug'   ,'dug'    ,'digging', 'digs'  ],
    ['do'   ,'did'   ,'done'   ,'doing', 'does' ],
    ['draw' ,'drew'  ,'drawn'  ,'drawing', 'draws'  ],
    ['drink','drank' ,'drunk'  ,'drinking', 'drinks' ],
    ['drive','drove' ,'driven' ,'driving', 'drives'  ],
    ['dwell','dwelt' ,'dwelt'  ,'dwelling', 'dwells' ],
    ['eat'  ,'ate'   ,'eaten'  ,'eating', 'eats'   ],
    ['fall' ,'fell'  ,'fallen' ,'falling', 'falls'  ],
    ['feed' ,'fed'   ,'fed'    ,'feeding', 'feeds'  ],
    ['feel' ,'felt'  ,'felt'   ,'feeling', 'feels'  ],
    ['fight','fought','fought' ,'fighting', 'fights' ],
    ['find' ,'found' ,'found'  ,'finding', 'finds'  ],
    ['flee' ,'fled'  ,'fled'   ,'fleeing', 'flees'  ],
    ['fling','flung' ,'flung'  ,'flinging', 'flings' ],
    ['fly'  ,'flew'  ,'flown'  ,'flying', 'flies'],
    ['forbid' ,'forbade','forbidden','forbidding', 'forbids'],
    ['forget' ,'forgot' ,'forgotten','forgetting', 'forgets'],
    ['forgive','forgave','forgiven' ,'forgiving', 'forgives' ],
    ['forsake','forsook','forsaken' ,'forsaking', 'forsakes' ],
    ['freeze' ,'froze'  ,'frozen'   ,'freezing', 'freezes'  ],
    ['get'  ,'got'   ,'got'    ,'getting', 'gets'  ],
    ['give' ,'gave'  ,'given'  ,'giving', 'gives'   ],
    ['go'   ,'went'  ,'gone'   ,'going', 'goes' ],
    ['grind','ground','ground' ,'grinding', 'grinds' ],
    ['grow' ,'grew'  ,'grown'  ,'growing', 'grows'  ],
    ['have' ,'had'   ,'had'    ,'having', 'has'  ],
    ['hear' ,'heard' ,'heard'  ,'hearing', 'hears'  ],
    ['hide' ,'hid'   ,'hidden' ,'hiding', 'hides'   ],
    ['hit'  ,'hit'   ,'hit'    ,'hitting', 'hits'  ],
    ['hold' ,'held'  ,'held'   ,'holding', 'holds'  ],
    ['hurt' ,'hurt'  ,'hurt'   ,'hurting', 'hurts'  ],
    ['keep' ,'kept'  ,'kept'   ,'keeping', 'keeps'  ],
    ['know' ,'knew'  ,'known'  ,'knowing', 'knows'  ],
    ['kneel','knelt' ,'knelt'  ,'kneeling', 'kneels' ],
    ['lay'  ,'laid'  ,'laid'   ,'laying', 'lays'  ],
    ['lead' ,'led'   ,'led'    ,'leading', 'leads'  ], 
    ['learn','learnt','learnt' ,'learning', 'learns' ], 
    ['leave','left'  ,'left'   ,'leaving', 'leaves'  ], 
    ['lend' ,'lent'  ,'lent'   ,'lending', 'lends'  ], 
    ['lie'  ,'lay'   ,'lain'   ,'lying', 'lies'    ],
    ['lose' ,'lost'  ,'lost'   ,'losing' , 'loses' ],
    ['make' ,'made'  ,'made'   ,'making' , 'makes'  ],
    ['mean' ,'meant' ,'meant'  ,'meaning', 'means'  ],
    ['meet' ,'met'   ,'met'    ,'meeting', 'meets'  ],
    ['mistake'  ,'mistook'  ,'mistaken'  ,'mistaking', 'mistakes'  ],
    ['overcome' ,'overcame' ,'overcome'  ,'overcoming', 'overcomes'  ],
    ['overtake' ,'overtook' ,'overtaken' ,'overtaking', 'overtakes'  ],
    ['overthrow','overthrew','overthrown','overthrowing', 'overthrows'],
    ['pay'  ,'paid'  ,'paid'   ,'paying', 'pays'   ],
    ['put'  ,'put'   ,'put'    ,'putting', 'puts'  ],
    ['read' ,'read'  ,'read'   ,'reading', 'reads'  ],
    ['relay','relaid','relaid' ,'relaying', 'relays' ],
    ['rid'  ,'rid'   ,'rid'    ,'ridding', 'rids'  ],
    ['ride' ,'rode'  ,'ridden' ,'riding', 'rides'   ],
    ['ring' ,'rang'  ,'rung'   ,'ringing', 'rings'  ],
    ['rise' ,'rose'  ,'risen'  ,'rising', 'rises'   ],
    ['run'  ,'ran'   ,'run'    ,'running', 'runs'  ],
    ['say'  ,'said'  ,'said'   ,'saying', 'says'   ],
    ['see'  ,'saw'   ,'seen'   ,'seeing', 'sees'   ],
    ['seek' ,'sought','sought' ,'seeking', 'seeks'  ],
    ['sell' ,'sold'  ,'sold'   ,'selling', 'sells'  ],
    ['send' ,'sent'  ,'sent'   ,'sending', 'sends'  ],
    ['set'  ,'set'   ,'set'    ,'setting', 'sets'  ],
    ['shake','shook' ,'shaken' ,'shaking', 'shakes'  ],
    ['shed' ,'shed'  ,'shed'   ,'shedding', 'sheds' ],
    ['shine','shone' ,'shone'  ,'shining', 'shines' ],
    ['shoot','shot'  ,'shot'   ,'shooting', 'shoots' ],
    ['show' ,'showed','shown'  ,'showing', 'shows' ],
    ['shrink','shrank','shrunk','shrinking', 'shrinks'],
    ['shut' ,'shut'   ,'shut'  ,'shutting', 'shuts' ],
    ['sing' ,'sang'  ,'sung'   ,'singing', 'sings' ],
    ['sink' ,'sank'  ,'sunk'   ,'sinking', 'sinks'  ],
    ['sit'  ,'sat'   ,'sat'    ,'sitting', 'sits'  ],
    ['slay' ,'slew'  ,'slain'  ,'slaying', 'slays'  ], 
    ['sleep' ,'slept','slept'  ,'sleeping', 'sleeps' ],
    ['slide','slid'  ,'slid'   ,'sliding', 'slides'  ],
    ['sling','slung' ,'slung'  ,'slinging', 'slings' ],
    ['speak','spoke' ,'spoken' ,'speaking', 'speaks' ],
    ['spend','spent' ,'spent'  ,'spending', 'spends' ],
    ['spin' ,'span'  ,'spun'   ,'spinning', 'spins' ],
    ['spit' ,'spat'  ,'spat'   ,'spitting', 'spits' ],
    ['spread','spread','spread','spreading', 'spreads'],
    ['spring','sprang','sprung','springing', 'springs'],
    ['stand' ,'stood' ,'stood' ,'standing', 'stands' ],
    ['steal' ,'stole' ,'stolen','stealing', 'steals' ],
    ['stick' ,'stuck' ,'stuck' ,'sticking', 'sticks' ],
    ['sting' ,'stung' ,'stung' ,'stinging', 'stings' ],
    ['stride','strode','stridden','striding', 'strides'],
    ['strike','struck','struck','striking', 'strikes' ],
    ['strive','strove','striven','striving', 'strives'],
    ['swear' ,'swore' ,'sworn' ,'swearing', 'swears' ],
    ['sweep' ,'swept' ,'swept' ,'sweeping', 'sweeps' ],
    ['swell' ,'swelled','swollen','swelling', 'swells' ],
    ['swim'  ,'swam'  ,'swum'  ,'swimming', 'swims' ],
    ['swing' ,'swung' ,'swung' ,'swinging', 'swings' ],
    ['take'  ,'took'  ,'taken' ,'taking', 'takes'  ],
    ['tear'  ,'tore'  ,'torn'  ,'tearing ', 'tears' ],
    ['teach' ,'taught','taught','teaching', 'teaches' ],
    ['tell'  ,'told'  ,'told'  ,'telling', 'tells'  ],
    ['think' ,'thought','thought','thinking', 'thinks'],
    ['throw' ,'threw' ,'thrown','throwing', 'throws' ],
    ['thrust','thrust','thrust','thrusting', 'thrusts'],
    ['tread' ,'trod'  ,'trodden','treading', 'treads'], 
    ['understand','understood','understood','understanding', 'understands'],
    ['undo'  ,'undid' ,'undone','undoing', 'undoes'  ],
    ['upset' ,'upset' ,'upset' ,'upsetting', 'upsets'],
    ['wear'  ,'wore'  ,'worn'  ,'wearing', 'wears'  ],
    ['weave' ,'wove'  ,'woven' ,'weaving', 'weaves'  ],
    ['weep'  ,'wept'  ,'wept'  ,'weeping', 'weeps'  ],
    ['win'   ,'won'   ,'won'   ,'winning', 'wins'  ],
    ['wind'  ,'wound' ,'wound' ,'winding', 'winds'  ],
    ['withdraw' ,'withdrew','withdrawn','withdrawing', 'withdraws' ],
    ['withhold' ,'withheld','withheld' ,'withholding', 'withholds' ],
    ['withstand','withstood','withstood','withstanding', 'withstands' ],
    ['wring' ,'wrung' ,'wrung' ,'wringing', 'wrings' ],
    ['write' ,'wrote' ,'written','writing', 'writes' ]
]



class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
              selectedVerb: -1,
              selectedVoice: "ACTIVE",
              selectedPerson: "I",
              isTimeClear: false
            };
        this.changeVerbHandler = this.changeVerbHandler.bind(this);
        this.changeVoiceHandler = this.changeVoiceHandler.bind(this);
        this.changePersonHandler = this.changePersonHandler.bind(this);
        this.tick = this.tick.bind(this);
        // this.submitHandler = this.submitHandler.bind(this);
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
        this.setState(prev => ({...prev,...{
             selectedVerb: event.target.value
        }}))


        
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
        this.setState(prev => ({...prev,...{
              selectedVoice: event.target.value
        }}))
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
        this.setState(prev => ({...prev,...{
              selectedPerson: event.target.value
        }}))
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
                    <select className="form-select"  name="octane" value={this.props.indI} onChange={this.changeVerbHandler}>
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
                      checked={this.state.selectedVoice === "ACTIVE"}
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
                      checked={this.state.selectedVoice === "PASSIVE"}
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
                {/* <label className="mdl-textfield__label" htmlFor="person">Лицо</label> */}
                    <select className="form-select " 
                        id="person" 
                        name="person" 
                        value={this.state.selectedPerson} 
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
                {/* <button type="submit" className="btn btn-success">Войти</button> */}
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
