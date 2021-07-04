import React, { Component } from 'react'
import './Input.css';
import {connect} from 'react-redux'
import {addToAllFields, addToTrueFields, deleteFromTrueFields, deleteFromAllFields} from '../redux/actions'

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
    ['shrink','shrank','shrunk','shrinking'],
    ['shut' ,'shut'   ,'shut'  ,'shutting', 'shrinks' ],
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

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fildText: "" ,
            isTrue0: false,
            isTrue: 0,
            wrapClassName: this.props.voice === "ACTIVE" ? "cell" : "cell invis"
            };
        this.changeInputHandler = this.changeInputHandler.bind(this);
        this.blurInputHandler = this.blurInputHandler.bind(this);
     }



    blurInputHandler = (event,i,fildNum) => {
        if(this.props.indI !== -1){
            event.persist()
            this.setState({
                isTrue  : fildNum === 0 && this.props.voice === "ACTIVE" ? verbList[i][0] === event.target.value ? true : false 
                        : fildNum === 1 && this.props.voice === "ACTIVE" ? ("be "+verbList[i][3]) === event.target.value ? true : false
                        : fildNum === 2 && this.props.voice === "ACTIVE" ? ("have "+verbList[i][2]) === event.target.value ? true : false
                        : fildNum === 3 && this.props.voice === "ACTIVE" ? ("have been "+verbList[i][3]) === event.target.value ? true : false
                        : fildNum === 4 && this.props.voice === "ACTIVE" ? (["He","She","It"].indexOf(this.props.person) > -1 ? verbList[i][4] : verbList[i][0]) === event.target.value ? true : false
                        : fildNum === 5 && this.props.voice === "ACTIVE" ? ((["I"].indexOf(this.props.person) > -1 ? "am " : ["You","We","They"].indexOf(this.props.person) > -1 ? "are ":"is ")+verbList[i][3]) === event.target.value || ((["I"].indexOf(this.props.person) > -1 ? "'m " : ["You","We","They"].indexOf(this.props.person) > -1 ? "'re ":"'s ")+verbList[i][3]) === event.target.value ?  true : false
                        : fildNum === 6 && this.props.voice === "ACTIVE" ? ((["I","You","We","They"].indexOf(this.props.person) > -1 ? "have " : "has ")+verbList[i][2]) === event.target.value || ((["I","You","We","They"].indexOf(this.props.person) > -1 ? "'ve " :"'s ")+verbList[i][2]) === event.target.value ?  true : false
                        : fildNum === 7 && this.props.voice === "ACTIVE" ? ((["I","You","We","They"].indexOf(this.props.person) > -1 ? "have been " : "has been ")+verbList[i][3]) === event.target.value || ((["I","You","We","They"].indexOf(this.props.person) > -1 ? "'ve been " :"'s been ")+verbList[i][3]) === event.target.value ?  true : false
                        : fildNum === 8 && this.props.voice === "ACTIVE" ? verbList[i][1] === event.target.value ? true : false
                        : fildNum === 9 && this.props.voice === "ACTIVE" ? ((["You","We","They"].indexOf(this.props.person) > -1 ? "were " : "was ")+verbList[i][3]) === event.target.value ?  true : false 
                        : fildNum === 10 && this.props.voice === "ACTIVE"? ("had "+verbList[i][2]) === event.target.value ? true : false
                        : fildNum === 11 && this.props.voice === "ACTIVE"? "had been "+verbList[i][3] === event.target.value ? true : false
                        : fildNum === 12 && this.props.voice === "ACTIVE"? "will "+verbList[i][0] === event.target.value || ("'ll "+verbList[i][0]) === event.target.value || (["I","We"].indexOf(this.props.person) > -1 && ("shall "+verbList[i][0]) === event.target.value) ? true : false
                        : fildNum === 13 && this.props.voice === "ACTIVE"? "will be "+verbList[i][3] === event.target.value || "'ll be "+verbList[i][3] === event.target.value || (["I","We"].indexOf(this.props.person) > -1 && "shall be "+verbList[i][3] === event.target.value) ? true : false
                        : fildNum === 14 && this.props.voice === "ACTIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ?"will has ":"will have ")+verbList[i][2] === event.target.value || (["He","She","It"].indexOf(this.props.person) > -1 ?"'ll has ":"'ll have ")+verbList[i][2] === event.target.value || (["I","We"].indexOf(this.props.person) > -1 && "shall have "+verbList[i][2] === event.target.value) ? true : false
                        : fildNum === 15 && this.props.voice === "ACTIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ?"will has been ":"will have been ")+verbList[i][3] === event.target.value || (["He","She","It"].indexOf(this.props.person) > -1 ?"'ll has been ":"'ll have been ")+verbList[i][3] === event.target.value ||(["I","We"].indexOf(this.props.person) > -1 && "shall have been "+verbList[i][3] === event.target.value) ? true : false
                        : fildNum === 16 && this.props.voice === "ACTIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ?"Does ":"Do ")+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" "+verbList[i][0] === event.target.value ? true : false
                        : fildNum === 17 && this.props.voice === "ACTIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ?"Is ": ["You","We","They"].indexOf(this.props.person)> -1 ?"Are ":"Am ")+("I".indexOf(this.props.person) > -1 ?this.props.person:this.props.person.toLowerCase())+" "+verbList[i][3] === event.target.value ? true : false
                        : fildNum === 18 && this.props.voice === "ACTIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ?"Has ": "Have ")+("I".indexOf(this.props.person) > -1 ?this.props.person:this.props.person.toLowerCase())+" "+verbList[i][2] === event.target.value ? true : false
                        : fildNum === 19 && this.props.voice === "ACTIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ?"Has ": "Have ")+("I".indexOf(this.props.person) > -1 ?this.props.person:this.props.person.toLowerCase())+" been "+verbList[i][3] === event.target.value ? true : false
                        : fildNum === 20 && this.props.voice === "ACTIVE"? "Did "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" "+verbList[i][0] === event.target.value ? true : false
                        : fildNum === 21 && this.props.voice === "ACTIVE"? (["We","You","They"].indexOf(this.props.person) > -1 ?"Were ":"Was ")+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" "+verbList[i][3] === event.target.value ? true : false
                        : fildNum === 22 && this.props.voice === "ACTIVE"? "Had "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" "+verbList[i][2] === event.target.value ? true : false
                        : fildNum === 23 && this.props.voice === "ACTIVE"? "Had "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" been "+verbList[i][3] === event.target.value ? true : false
                        : fildNum === 24 && this.props.voice === "ACTIVE"? "Will "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" "+verbList[i][0] === event.target.value || (["I","We"].indexOf(this.props.person) > -1 && "Shall "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" "+verbList[i][0] === event.target.value) ? true : false
                        : fildNum === 25 && this.props.voice === "ACTIVE"? "Will "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" be "+verbList[i][3] === event.target.value || (["I","We"].indexOf(this.props.person) > -1 && "Shall "+("I".indexOf(this.props.person)> -1 ? this.props.person:this.props.person.toLowerCase())+" be "+verbList[i][3] === event.target.value) ? true : false
                        : fildNum === 26 && this.props.voice === "ACTIVE"? "Will "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+(["He","She","It"].indexOf(this.props.person) > -1 ? " has ":" have ")+verbList[i][2] === event.target.value || (["I","We"].indexOf(this.props.person) > -1 && "Shall "+("I".indexOf(this.props.person)> -1 ? this.props.person : this.props.person.toLowerCase())+" have "+verbList[i][2] === event.target.value) ? true : false
                        : fildNum === 27 && this.props.voice === "ACTIVE"? "Will "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+(["He","She","It"].indexOf(this.props.person) > -1 ? " has ":" have ")+ "been "+verbList[i][3] === event.target.value || (["I","We"].indexOf(this.props.person) > -1 && "Shall "+("I".indexOf(this.props.person)> -1 ? this.props.person : this.props.person.toLowerCase())+" have been "+verbList[i][3] === event.target.value) ? true : false
                        : fildNum === 28 && this.props.voice === "ACTIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ? "does not ":"do not ")+verbList[i][0] === event.target.value || (["He","She","It"].indexOf(this.props.person)> -1 ? "doesn't ":"don't ")+verbList[i][0] === event.target.value ? true : false
                        : fildNum === 29 && this.props.voice === "ACTIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ? "is not ": "I".indexOf(this.props.person)> -1 ? "am not " : "are not ")+verbList[i][3] === event.target.value || (["He","She","It"].indexOf(this.props.person)> -1 ? "'s not ": "I".indexOf(this.props.person)> -1 ? "'m not " : "'re not ")+verbList[i][3] === event.target.value ? true : false
                        : fildNum === 30 && this.props.voice === "ACTIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ? "has not ":"have not ")+verbList[i][2] === event.target.value || (["He","She","It"].indexOf(this.props.person)> -1 ? "hasn't ":"haven't ")+verbList[i][2] === event.target.value ? true : false
                        : fildNum === 31 && this.props.voice === "ACTIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ? "has not ":"have not ")+"been "+verbList[i][3] === event.target.value || (["He","She","It"].indexOf(this.props.person)> -1 ? "hasn't ":"haven't ")+"been "+verbList[i][3] === event.target.value ? true : false
                        : fildNum === 32 && this.props.voice === "ACTIVE"? "did not "+verbList[i][0] === event.target.value || "didn't "+verbList[i][0] === event.target.value ? true : false
                        : fildNum === 33 && this.props.voice === "ACTIVE"? (["I","He","She","It"].indexOf(this.props.person)> -1 ? "was not ":  "were not ")+verbList[i][3] === event.target.value || (["I","He","She","It"].indexOf(this.props.person)> -1 ? "wasn't ": "weren't ")+verbList[i][3] === event.target.value ? true : false
                        : fildNum === 34 && this.props.voice === "ACTIVE"? "had not "+verbList[i][2] === event.target.value || "hadn't "+verbList[i][2] === event.target.value ? true : false
                        : fildNum === 35 && this.props.voice === "ACTIVE"? "had not been "+verbList[i][3] === event.target.value || "hadn't been "+verbList[i][3] === event.target.value ? true : false
                        : fildNum === 36 && this.props.voice === "ACTIVE"? "will not "+verbList[i][0] === event.target.value || "won't "+verbList[i][0] === event.target.value || (["I","We"].indexOf(this.props.person) > -1 && "shall not "+verbList[i][0] === event.target.value) ? true : false
                        : fildNum === 37 && this.props.voice === "ACTIVE"? "will not be "+verbList[i][3] === event.target.value || "won't be "+verbList[i][3] === event.target.value || (["I","We"].indexOf(this.props.person) > -1 && "shall not be "+verbList[i][3] === event.target.value) ? true : false
                        : fildNum === 38 && this.props.voice === "ACTIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ?"will not has ":"will not have ")+verbList[i][2] === event.target.value || (["He","She","It"].indexOf(this.props.person) > -1 ?"won't has ":"won't have ")+verbList[i][2] === event.target.value ||(["I","We"].indexOf(this.props.person) > -1 && "shall not have "+verbList[i][2] === event.target.value) ? true : false
                        : fildNum === 39 && this.props.voice === "ACTIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ?"will not has been ":"will not have been ")+verbList[i][3] === event.target.value || (["He","She","It"].indexOf(this.props.person) > -1 ?"won't has been ":"won't have been ")+verbList[i][3] === event.target.value ||(["I","We"].indexOf(this.props.person) > -1 && "shall not have been "+verbList[i][3] === event.target.value) ? true : false
                        : fildNum === 0 && this.props.voice === "PASSIVE" ? "be "+verbList[i][2] === event.target.value ? true : false
                        : fildNum === 1 && this.props.voice === "PASSIVE" ? "be being "+verbList[i][2] === event.target.value ? true : false
                        : fildNum === 2 && this.props.voice === "PASSIVE" ? (["He","She","It"].indexOf(this.props.person)> -1 ? "has been " : "have been ")+verbList[i][2] === event.target.value ? true : false
                        : fildNum === 4 && this.props.voice === "PASSIVE" ? (["I"].indexOf(this.props.person) > -1 ? "am " : ["You","We","They"].indexOf(this.props.person) > -1 ? "are ":"is ")+verbList[i][2] === event.target.value || (["I"].indexOf(this.props.person) > -1 ? "'m " : ["You","We","They"].indexOf(this.props.person) > -1 ? "'re ":"'s ")+verbList[i][2] === event.target.value ?  true : false
                        : fildNum === 5 && this.props.voice === "PASSIVE" ? (["I"].indexOf(this.props.person) > -1 ? "am " : ["You","We","They"].indexOf(this.props.person) > -1 ? "are ":"is ")+"being "+verbList[i][2] === event.target.value || (["I"].indexOf(this.props.person) > -1 ? "'m " : ["You","We","They"].indexOf(this.props.person) > -1 ? "'re ":"'s ")+"being "+verbList[i][2] === event.target.value ?  true : false
                        : fildNum === 6 && this.props.voice === "PASSIVE" ? (["I","You","We","They"].indexOf(this.props.person) > -1 ? "have been " : "has been ")+verbList[i][2] === event.target.value || (["I","You","We","They"].indexOf(this.props.person) > -1 ? "'ve been " :"'s been ")+verbList[i][2] === event.target.value ?  true : false
                        : fildNum === 8 && this.props.voice === "PASSIVE" ? (["You","We","They"].indexOf(this.props.person) > -1 ? "were " : "was ")+verbList[i][2] === event.target.value ?  true : false
                        : fildNum === 9 && this.props.voice === "PASSIVE" ? (["You","We","They"].indexOf(this.props.person) > -1 ? "were " : "was ")+"being "+verbList[i][2] === event.target.value ?  true : false
                        : fildNum === 10 && this.props.voice === "PASSIVE"? "had been "+verbList[i][2] === event.target.value ?  true : false
                        : fildNum === 12 && this.props.voice === "PASSIVE"? "will be "+verbList[i][2] === event.target.value || "'ll be "+verbList[i][2] === event.target.value || (["I","We"].indexOf(this.props.person) > -1 && "shall be "+verbList[i][2] === event.target.value) ? true : false
                        : fildNum === 13 && this.props.voice === "PASSIVE"? "will be being "+verbList[i][2] === event.target.value || "'ll be being "+verbList[i][2] === event.target.value || (["I","We"].indexOf(this.props.person) > -1 && "shall be being "+verbList[i][2] === event.target.value) ? true : false
                        : fildNum === 14 && this.props.voice === "PASSIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ?"will has ":"will have ")+"been "+verbList[i][2] === event.target.value || (["He","She","It"].indexOf(this.props.person) > -1 ?"'ll has ":"'ll have ")+"been "+verbList[i][2] === event.target.value ||(["I","We"].indexOf(this.props.person) > -1 && "shall have been "+verbList[i][2] === event.target.value) ? true : false
                        : fildNum === 16 && this.props.voice === "PASSIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ?"Is ": ["You","We","They"].indexOf(this.props.person)> -1 ?"Are ":"Am ")+("I".indexOf(this.props.person) > -1 ? this.props.person:this.props.person.toLowerCase())+" "+verbList[i][2] === event.target.value ? true : false
                        : fildNum === 17 && this.props.voice === "PASSIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ?"Is ": ["You","We","They"].indexOf(this.props.person)> -1 ?"Are ":"Am ")+("I".indexOf(this.props.person) > -1 ?this.props.person:this.props.person.toLowerCase())+" being "+verbList[i][2] === event.target.value ? true : false
                        : fildNum === 18 && this.props.voice === "PASSIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ?"Has ": "Have ")+("I".indexOf(this.props.person) > -1 ? this.props.person:this.props.person.toLowerCase())+" been "+verbList[i][2] === event.target.value ? true : false
                        : fildNum === 20 && this.props.voice === "PASSIVE"? (["We","You","They"].indexOf(this.props.person) > -1 ?"Were ":"Was ")+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" "+verbList[i][2] === event.target.value ? true : false
                        : fildNum === 21 && this.props.voice === "PASSIVE"? (["We","You","They"].indexOf(this.props.person) > -1 ?"Were ":"Was ")+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" being "+verbList[i][2] === event.target.value ? true : false
                        : fildNum === 22 && this.props.voice === "PASSIVE"? "Had "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" been "+verbList[i][2] === event.target.value ? true : false
                        : fildNum === 24 && this.props.voice === "PASSIVE"? "Will "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" be "+verbList[i][2] === event.target.value || (["I","We"].indexOf(this.props.person) > -1 && "Shall "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" be "+verbList[i][2] === event.target.value) ? true : false
                        : fildNum === 25 && this.props.voice === "PASSIVE"? "Will "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" be being "+verbList[i][2] === event.target.value || (["I","We"].indexOf(this.props.person) > -1 && "Shall "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" be being "+verbList[i][2] === event.target.value) ? true : false
                        : fildNum === 26 && this.props.voice === "PASSIVE"? "Will "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+(["He","She","It"].indexOf(this.props.person) > -1 ? " has ":" have ")+ "been "+verbList[i][2] === event.target.value || (["I","We"].indexOf(this.props.person) > -1 && "Shall "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" have been "+verbList[i][2] === event.target.value) ? true : false
                        : fildNum === 28 && this.props.voice === "PASSIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ? "is not ": "I".indexOf(this.props.person)> -1 ? "am not " : "are not ")+verbList[i][2] === event.target.value || (["He","She","It"].indexOf(this.props.person)> -1 ? "'s not ": "I".indexOf(this.props.person)> -1 ? "'m not " : "'re not ")+verbList[i][2] === event.target.value ? true : false
                        : fildNum === 29 && this.props.voice === "PASSIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ? "is not ": "I".indexOf(this.props.person)> -1 ? "am not " : "are not ")+"being "+verbList[i][2] === event.target.value || (["He","She","It"].indexOf(this.props.person)> -1 ? "'s not ": "I".indexOf(this.props.person)> -1 ? "'m not " : "'re not ")+"being "+verbList[i][2] === event.target.value ? true : false
                        : fildNum === 30 && this.props.voice === "PASSIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ? "has not ":"have not ")+"been "+verbList[i][2] === event.target.value || (["He","She","It"].indexOf(this.props.person)> -1 ? "hasn't ":"haven't ")+"been "+verbList[i][2] === event.target.value ? true : false
                        : fildNum === 32 && this.props.voice === "PASSIVE"? (["I","He","She","It"].indexOf(this.props.person)> -1 ? "was not ":  "were not ")+verbList[i][2] === event.target.value || (["I","He","She","It"].indexOf(this.props.person)> -1 ? "wasn't ": "weren't ")+verbList[i][2] === event.target.value ? true : false
                        : fildNum === 33 && this.props.voice === "PASSIVE"? (["I","He","She","It"].indexOf(this.props.person)> -1 ? "was not ":  "were not ")+"being "+verbList[i][2] === event.target.value || (["I","He","She","It"].indexOf(this.props.person)> -1 ? "wasn't ": "weren't ")+"being "+verbList[i][2] === event.target.value ? true : false
                        : fildNum === 34 && this.props.voice === "PASSIVE"? "had not been "+verbList[i][2] === event.target.value || "hadn't been "+verbList[i][2] === event.target.value ? true : false
                        : fildNum === 36 && this.props.voice === "PASSIVE"? "will not be "+verbList[i][2] === event.target.value || "won't be "+verbList[i][2] === event.target.value || (["I","We"].indexOf(this.props.person) > -1 && "shall not be "+verbList[i][2] === event.target.value) ? true : false
                        : fildNum === 37 && this.props.voice === "PASSIVE"? "will not be being "+verbList[i][2] === event.target.value || "won't be being "+verbList[i][2] === event.target.value || (["I","We"].indexOf(this.props.person) > -1 && "shall not be being "+verbList[i][2] === event.target.value) ? true : false
                        : fildNum === 38 && this.props.voice === "PASSIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ?"will not has been ":"will not have been ")+verbList[i][2] === event.target.value || (["He","She","It"].indexOf(this.props.person) > -1 ?"won't has been ":"won't have been ")+verbList[i][2] === event.target.value ||(["I","We"].indexOf(this.props.person) > -1 && "shall not have been "+verbList[i][2] === event.target.value) ? true : false
                        : false
            });
            let isTrue = fildNum === 0 && this.props.voice === "ACTIVE" ? verbList[i][0] === event.target.value ? true : false 
            : fildNum === 1 && this.props.voice === "ACTIVE" ? ("be "+verbList[i][3]) === event.target.value ? true : false
            : fildNum === 2 && this.props.voice === "ACTIVE" ? ("have "+verbList[i][2]) === event.target.value ? true : false
            : fildNum === 3 && this.props.voice === "ACTIVE" ? ("have been "+verbList[i][3]) === event.target.value ? true : false
            : fildNum === 4 && this.props.voice === "ACTIVE" ? (["He","She","It"].indexOf(this.props.person) > -1 ? verbList[i][4] : verbList[i][0]) === event.target.value ? true : false
            : fildNum === 5 && this.props.voice === "ACTIVE" ? ((["I"].indexOf(this.props.person) > -1 ? "am " : ["You","We","They"].indexOf(this.props.person) > -1 ? "are ":"is ")+verbList[i][3]) === event.target.value || ((["I"].indexOf(this.props.person) > -1 ? "'m " : ["You","We","They"].indexOf(this.props.person) > -1 ? "'re ":"'s ")+verbList[i][3]) === event.target.value ?  true : false
            : fildNum === 6 && this.props.voice === "ACTIVE" ? ((["I","You","We","They"].indexOf(this.props.person) > -1 ? "have " : "has ")+verbList[i][2]) === event.target.value || ((["I","You","We","They"].indexOf(this.props.person) > -1 ? "'ve " :"'s ")+verbList[i][2]) === event.target.value ?  true : false
            : fildNum === 7 && this.props.voice === "ACTIVE" ? ((["I","You","We","They"].indexOf(this.props.person) > -1 ? "have been " : "has been ")+verbList[i][3]) === event.target.value || ((["I","You","We","They"].indexOf(this.props.person) > -1 ? "'ve been " :"'s been ")+verbList[i][3]) === event.target.value ?  true : false
            : fildNum === 8 && this.props.voice === "ACTIVE" ? verbList[i][1] === event.target.value ? true : false
            : fildNum === 9 && this.props.voice === "ACTIVE" ? ((["You","We","They"].indexOf(this.props.person) > -1 ? "were " : "was ")+verbList[i][3]) === event.target.value ?  true : false 
            : fildNum === 10 && this.props.voice === "ACTIVE"? ("had "+verbList[i][2]) === event.target.value ? true : false
            : fildNum === 11 && this.props.voice === "ACTIVE"? "had been "+verbList[i][3] === event.target.value ? true : false
            : fildNum === 12 && this.props.voice === "ACTIVE"? "will "+verbList[i][0] === event.target.value || ("'ll "+verbList[i][0]) === event.target.value || (["I","We"].indexOf(this.props.person) > -1 && ("shall "+verbList[i][0]) === event.target.value) ? true : false
            : fildNum === 13 && this.props.voice === "ACTIVE"? "will be "+verbList[i][3] === event.target.value || "'ll be "+verbList[i][3] === event.target.value || (["I","We"].indexOf(this.props.person) > -1 && "shall be "+verbList[i][3] === event.target.value) ? true : false
            : fildNum === 14 && this.props.voice === "ACTIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ?"will has ":"will have ")+verbList[i][2] === event.target.value || (["He","She","It"].indexOf(this.props.person) > -1 ?"'ll has ":"'ll have ")+verbList[i][2] === event.target.value || (["I","We"].indexOf(this.props.person) > -1 && "shall have "+verbList[i][2] === event.target.value) ? true : false
            : fildNum === 15 && this.props.voice === "ACTIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ?"will has been ":"will have been ")+verbList[i][3] === event.target.value || (["He","She","It"].indexOf(this.props.person) > -1 ?"'ll has been ":"'ll have been ")+verbList[i][3] === event.target.value ||(["I","We"].indexOf(this.props.person) > -1 && "shall have been "+verbList[i][3] === event.target.value) ? true : false
            : fildNum === 16 && this.props.voice === "ACTIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ?"Does ":"Do ")+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" "+verbList[i][0] === event.target.value ? true : false
            : fildNum === 17 && this.props.voice === "ACTIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ?"Is ": ["You","We","They"].indexOf(this.props.person)> -1 ?"Are ":"Am ")+("I".indexOf(this.props.person) > -1 ?this.props.person:this.props.person.toLowerCase())+" "+verbList[i][3] === event.target.value ? true : false
            : fildNum === 18 && this.props.voice === "ACTIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ?"Has ": "Have ")+("I".indexOf(this.props.person) > -1 ?this.props.person:this.props.person.toLowerCase())+" "+verbList[i][2] === event.target.value ? true : false
            : fildNum === 19 && this.props.voice === "ACTIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ?"Has ": "Have ")+("I".indexOf(this.props.person) > -1 ?this.props.person:this.props.person.toLowerCase())+" been "+verbList[i][3] === event.target.value ? true : false
            : fildNum === 20 && this.props.voice === "ACTIVE"? "Did "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" "+verbList[i][0] === event.target.value ? true : false
            : fildNum === 21 && this.props.voice === "ACTIVE"? (["We","You","They"].indexOf(this.props.person) > -1 ?"Were ":"Was ")+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" "+verbList[i][3] === event.target.value ? true : false
            : fildNum === 22 && this.props.voice === "ACTIVE"? "Had "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" "+verbList[i][2] === event.target.value ? true : false
            : fildNum === 23 && this.props.voice === "ACTIVE"? "Had "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" been "+verbList[i][3] === event.target.value ? true : false
            : fildNum === 24 && this.props.voice === "ACTIVE"? "Will "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" "+verbList[i][0] === event.target.value || (["I","We"].indexOf(this.props.person) > -1 && "Shall "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" "+verbList[i][0] === event.target.value) ? true : false
            : fildNum === 25 && this.props.voice === "ACTIVE"? "Will "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" be "+verbList[i][3] === event.target.value || (["I","We"].indexOf(this.props.person) > -1 && "Shall "+("I".indexOf(this.props.person)> -1 ? this.props.person:this.props.person.toLowerCase())+" be "+verbList[i][3] === event.target.value) ? true : false
            : fildNum === 26 && this.props.voice === "ACTIVE"? "Will "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+(["He","She","It"].indexOf(this.props.person) > -1 ? " has ":" have ")+verbList[i][2] === event.target.value || (["I","We"].indexOf(this.props.person) > -1 && "Shall "+("I".indexOf(this.props.person)> -1 ? this.props.person : this.props.person.toLowerCase())+" have "+verbList[i][2] === event.target.value) ? true : false
            : fildNum === 27 && this.props.voice === "ACTIVE"? "Will "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+(["He","She","It"].indexOf(this.props.person) > -1 ? " has ":" have ")+ "been "+verbList[i][3] === event.target.value || (["I","We"].indexOf(this.props.person) > -1 && "Shall "+("I".indexOf(this.props.person)> -1 ? this.props.person : this.props.person.toLowerCase())+" have been "+verbList[i][3] === event.target.value) ? true : false
            : fildNum === 28 && this.props.voice === "ACTIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ? "does not ":"do not ")+verbList[i][0] === event.target.value || (["He","She","It"].indexOf(this.props.person)> -1 ? "doesn't ":"don't ")+verbList[i][0] === event.target.value ? true : false
            : fildNum === 29 && this.props.voice === "ACTIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ? "is not ": "I".indexOf(this.props.person)> -1 ? "am not " : "are not ")+verbList[i][3] === event.target.value || (["He","She","It"].indexOf(this.props.person)> -1 ? "'s not ": "I".indexOf(this.props.person)> -1 ? "'m not " : "'re not ")+verbList[i][3] === event.target.value ? true : false
            : fildNum === 30 && this.props.voice === "ACTIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ? "has not ":"have not ")+verbList[i][2] === event.target.value || (["He","She","It"].indexOf(this.props.person)> -1 ? "hasn't ":"haven't ")+verbList[i][2] === event.target.value ? true : false
            : fildNum === 31 && this.props.voice === "ACTIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ? "has not ":"have not ")+"been "+verbList[i][3] === event.target.value || (["He","She","It"].indexOf(this.props.person)> -1 ? "hasn't ":"haven't ")+"been "+verbList[i][3] === event.target.value ? true : false
            : fildNum === 32 && this.props.voice === "ACTIVE"? "did not "+verbList[i][0] === event.target.value || "didn't "+verbList[i][0] === event.target.value ? true : false
            : fildNum === 33 && this.props.voice === "ACTIVE"? (["I","He","She","It"].indexOf(this.props.person)> -1 ? "was not ":  "were not ")+verbList[i][3] === event.target.value || (["I","He","She","It"].indexOf(this.props.person)> -1 ? "wasn't ": "weren't ")+verbList[i][3] === event.target.value ? true : false
            : fildNum === 34 && this.props.voice === "ACTIVE"? "had not "+verbList[i][2] === event.target.value || "hadn't "+verbList[i][2] === event.target.value ? true : false
            : fildNum === 35 && this.props.voice === "ACTIVE"? "had not been "+verbList[i][3] === event.target.value || "hadn't been "+verbList[i][3] === event.target.value ? true : false
            : fildNum === 36 && this.props.voice === "ACTIVE"? "will not "+verbList[i][0] === event.target.value || "won't "+verbList[i][0] === event.target.value || (["I","We"].indexOf(this.props.person) > -1 && "shall not "+verbList[i][0] === event.target.value) ? true : false
            : fildNum === 37 && this.props.voice === "ACTIVE"? "will not be "+verbList[i][3] === event.target.value || "won't be "+verbList[i][3] === event.target.value || (["I","We"].indexOf(this.props.person) > -1 && "shall not be "+verbList[i][3] === event.target.value) ? true : false
            : fildNum === 38 && this.props.voice === "ACTIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ?"will not has ":"will not have ")+verbList[i][2] === event.target.value || (["He","She","It"].indexOf(this.props.person) > -1 ?"won't has ":"won't have ")+verbList[i][2] === event.target.value ||(["I","We"].indexOf(this.props.person) > -1 && "shall not have "+verbList[i][2] === event.target.value) ? true : false
            : fildNum === 39 && this.props.voice === "ACTIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ?"will not has been ":"will not have been ")+verbList[i][3] === event.target.value || (["He","She","It"].indexOf(this.props.person) > -1 ?"won't has been ":"won't have been ")+verbList[i][3] === event.target.value ||(["I","We"].indexOf(this.props.person) > -1 && "shall not have been "+verbList[i][3] === event.target.value) ? true : false
            : fildNum === 0 && this.props.voice === "PASSIVE" ? "be "+verbList[i][2] === event.target.value ? true : false
            : fildNum === 1 && this.props.voice === "PASSIVE" ? "be being "+verbList[i][2] === event.target.value ? true : false
            : fildNum === 2 && this.props.voice === "PASSIVE" ? (["He","She","It"].indexOf(this.props.person)> -1 ? "has been " : "have been ")+verbList[i][2] === event.target.value ? true : false
            : fildNum === 4 && this.props.voice === "PASSIVE" ? (["I"].indexOf(this.props.person) > -1 ? "am " : ["You","We","They"].indexOf(this.props.person) > -1 ? "are ":"is ")+verbList[i][2] === event.target.value || (["I"].indexOf(this.props.person) > -1 ? "'m " : ["You","We","They"].indexOf(this.props.person) > -1 ? "'re ":"'s ")+verbList[i][2] === event.target.value ?  true : false
            : fildNum === 5 && this.props.voice === "PASSIVE" ? (["I"].indexOf(this.props.person) > -1 ? "am " : ["You","We","They"].indexOf(this.props.person) > -1 ? "are ":"is ")+"being "+verbList[i][2] === event.target.value || (["I"].indexOf(this.props.person) > -1 ? "'m " : ["You","We","They"].indexOf(this.props.person) > -1 ? "'re ":"'s ")+"being "+verbList[i][2] === event.target.value ?  true : false
            : fildNum === 6 && this.props.voice === "PASSIVE" ? (["I","You","We","They"].indexOf(this.props.person) > -1 ? "have been " : "has been ")+verbList[i][2] === event.target.value || (["I","You","We","They"].indexOf(this.props.person) > -1 ? "'ve been " :"'s been ")+verbList[i][2] === event.target.value ?  true : false
            : fildNum === 8 && this.props.voice === "PASSIVE" ? (["You","We","They"].indexOf(this.props.person) > -1 ? "were " : "was ")+verbList[i][2] === event.target.value ?  true : false
            : fildNum === 9 && this.props.voice === "PASSIVE" ? (["You","We","They"].indexOf(this.props.person) > -1 ? "were " : "was ")+"being "+verbList[i][2] === event.target.value ?  true : false
            : fildNum === 10 && this.props.voice === "PASSIVE"? "had been "+verbList[i][2] === event.target.value ?  true : false
            : fildNum === 12 && this.props.voice === "PASSIVE"? "will be "+verbList[i][2] === event.target.value || "'ll be "+verbList[i][2] === event.target.value || (["I","We"].indexOf(this.props.person) > -1 && "shall be "+verbList[i][2] === event.target.value) ? true : false
            : fildNum === 13 && this.props.voice === "PASSIVE"? "will be being "+verbList[i][2] === event.target.value || "'ll be being "+verbList[i][2] === event.target.value || (["I","We"].indexOf(this.props.person) > -1 && "shall be being "+verbList[i][2] === event.target.value) ? true : false
            : fildNum === 14 && this.props.voice === "PASSIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ?"will has ":"will have ")+"been "+verbList[i][2] === event.target.value || (["He","She","It"].indexOf(this.props.person) > -1 ?"'ll has ":"'ll have ")+"been "+verbList[i][2] === event.target.value ||(["I","We"].indexOf(this.props.person) > -1 && "shall have been "+verbList[i][2] === event.target.value) ? true : false
            : fildNum === 16 && this.props.voice === "PASSIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ?"Is ": ["You","We","They"].indexOf(this.props.person)> -1 ?"Are ":"Am ")+("I".indexOf(this.props.person) > -1 ? this.props.person:this.props.person.toLowerCase())+" "+verbList[i][2] === event.target.value ? true : false
            : fildNum === 17 && this.props.voice === "PASSIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ?"Is ": ["You","We","They"].indexOf(this.props.person)> -1 ?"Are ":"Am ")+("I".indexOf(this.props.person) > -1 ?this.props.person:this.props.person.toLowerCase())+" being "+verbList[i][2] === event.target.value ? true : false
            : fildNum === 18 && this.props.voice === "PASSIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ?"Has ": "Have ")+("I".indexOf(this.props.person) > -1 ? this.props.person:this.props.person.toLowerCase())+" been "+verbList[i][2] === event.target.value ? true : false
            : fildNum === 20 && this.props.voice === "PASSIVE"? (["We","You","They"].indexOf(this.props.person) > -1 ?"Were ":"Was ")+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" "+verbList[i][2] === event.target.value ? true : false
            : fildNum === 21 && this.props.voice === "PASSIVE"? (["We","You","They"].indexOf(this.props.person) > -1 ?"Were ":"Was ")+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" being "+verbList[i][2] === event.target.value ? true : false
            : fildNum === 22 && this.props.voice === "PASSIVE"? "Had "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" been "+verbList[i][2] === event.target.value ? true : false
            : fildNum === 24 && this.props.voice === "PASSIVE"? "Will "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" be "+verbList[i][2] === event.target.value || (["I","We"].indexOf(this.props.person) > -1 && "Shall "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" be "+verbList[i][2] === event.target.value) ? true : false
            : fildNum === 25 && this.props.voice === "PASSIVE"? "Will "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" be being "+verbList[i][2] === event.target.value || (["I","We"].indexOf(this.props.person) > -1 && "Shall "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" be being "+verbList[i][2] === event.target.value) ? true : false
            : fildNum === 26 && this.props.voice === "PASSIVE"? "Will "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+(["He","She","It"].indexOf(this.props.person) > -1 ? " has ":" have ")+ "been "+verbList[i][2] === event.target.value || (["I","We"].indexOf(this.props.person) > -1 && "Shall "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" have been "+verbList[i][2] === event.target.value) ? true : false
            : fildNum === 28 && this.props.voice === "PASSIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ? "is not ": "I".indexOf(this.props.person)> -1 ? "am not " : "are not ")+verbList[i][2] === event.target.value || (["He","She","It"].indexOf(this.props.person)> -1 ? "'s not ": "I".indexOf(this.props.person)> -1 ? "'m not " : "'re not ")+verbList[i][2] === event.target.value ? true : false
            : fildNum === 29 && this.props.voice === "PASSIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ? "is not ": "I".indexOf(this.props.person)> -1 ? "am not " : "are not ")+"being "+verbList[i][2] === event.target.value || (["He","She","It"].indexOf(this.props.person)> -1 ? "'s not ": "I".indexOf(this.props.person)> -1 ? "'m not " : "'re not ")+"being "+verbList[i][2] === event.target.value ? true : false
            : fildNum === 30 && this.props.voice === "PASSIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ? "has not ":"have not ")+"been "+verbList[i][2] === event.target.value || (["He","She","It"].indexOf(this.props.person)> -1 ? "hasn't ":"haven't ")+"been "+verbList[i][2] === event.target.value ? true : false
            : fildNum === 32 && this.props.voice === "PASSIVE"? (["I","He","She","It"].indexOf(this.props.person)> -1 ? "was not ":  "were not ")+verbList[i][2] === event.target.value || (["I","He","She","It"].indexOf(this.props.person)> -1 ? "wasn't ": "weren't ")+verbList[i][2] === event.target.value ? true : false
            : fildNum === 33 && this.props.voice === "PASSIVE"? (["I","He","She","It"].indexOf(this.props.person)> -1 ? "was not ":  "were not ")+"being "+verbList[i][2] === event.target.value || (["I","He","She","It"].indexOf(this.props.person)> -1 ? "wasn't ": "weren't ")+"being "+verbList[i][2] === event.target.value ? true : false
            : fildNum === 34 && this.props.voice === "PASSIVE"? "had not been "+verbList[i][2] === event.target.value || "hadn't been "+verbList[i][2] === event.target.value ? true : false
            : fildNum === 36 && this.props.voice === "PASSIVE"? "will not be "+verbList[i][2] === event.target.value || "won't be "+verbList[i][2] === event.target.value || (["I","We"].indexOf(this.props.person) > -1 && "shall not be "+verbList[i][2] === event.target.value) ? true : false
            : fildNum === 37 && this.props.voice === "PASSIVE"? "will not be being "+verbList[i][2] === event.target.value || "won't be being "+verbList[i][2] === event.target.value || (["I","We"].indexOf(this.props.person) > -1 && "shall not be being "+verbList[i][2] === event.target.value) ? true : false
            : fildNum === 38 && this.props.voice === "PASSIVE"? (["He","She","It"].indexOf(this.props.person)> -1 ?"will not has been ":"will not have been ")+verbList[i][2] === event.target.value || (["He","She","It"].indexOf(this.props.person) > -1 ?"won't has been ":"won't have been ")+verbList[i][2] === event.target.value ||(["I","We"].indexOf(this.props.person) > -1 && "shall not have been "+verbList[i][2] === event.target.value) ? true : false
            : false;
            this.props.addToAllFields(fildNum);
            
            if(isTrue){
                this.props.addToTrueFields(fildNum);
            }else{
                this.props.deleteFromTrueFields(fildNum); 
            }
            
        }
    }

    changeInputHandler = (event,i,fildNum) => {
        if(this.props.indI !== -1){
            event.persist()
            this.setState(prev => ({...prev,...{
             [event.target.name]: event.target.value,
             isTrue0 : fildNum === 0 && this.props.voice === "ACTIVE" ? verbList[i][0].indexOf(event.target.value) === -1 ? false : true 
                     : fildNum === 1 && this.props.voice === "ACTIVE" ? ("be "+verbList[i][3]).indexOf(event.target.value) === -1 ? false : true
                     : fildNum === 2 && this.props.voice === "ACTIVE" ? ("have "+verbList[i][2]).indexOf(event.target.value) === -1 ? false : true
                     : fildNum === 3 && this.props.voice === "ACTIVE" ? ("have been "+verbList[i][3]).indexOf(event.target.value) === -1 ? false : true
                     : fildNum === 4 && this.props.voice === "ACTIVE" ? (["He","She","It"].indexOf(this.props.person) > -1 ? verbList[i][4] : verbList[i][0]).indexOf(event.target.value) === -1 ? false : true
                     : fildNum === 5 && this.props.voice === "ACTIVE" ? ((["I"].indexOf(this.props.person) > -1 ? "am " : ["You","We","They"].indexOf(this.props.person) > -1 ? "are ":"is ")+verbList[i][3]).indexOf(event.target.value) > -1 || ((["I"].indexOf(this.props.person) > -1 ? "'m " : ["You","We","They"].indexOf(this.props.person) > -1 ? "'re ":"'s ")+verbList[i][3]).indexOf(event.target.value) > -1 ?  true : false
                     : fildNum === 6 && this.props.voice === "ACTIVE" ? ((["I","You","We","They"].indexOf(this.props.person) > -1 ? "have " : "has ")+verbList[i][2]).indexOf(event.target.value) > -1 || ((["I","You","We","They"].indexOf(this.props.person) > -1 ? "'ve " :"'s ")+verbList[i][2]).indexOf(event.target.value) > -1 ?  true : false
                     : fildNum === 7 && this.props.voice === "ACTIVE" ? ((["I","You","We","They"].indexOf(this.props.person) > -1 ? "have been " : "has been ")+verbList[i][3]).indexOf(event.target.value) > -1 || ((["I","You","We","They"].indexOf(this.props.person) > -1 ? "'ve been " :"'s been ")+verbList[i][3]).indexOf(event.target.value) > -1 ?  true : false
                     : fildNum === 8 && this.props.voice === "ACTIVE" ? verbList[i][1].indexOf(event.target.value) === -1 ? false : true
                     : fildNum === 9 && this.props.voice === "ACTIVE" ? ((["You","We","They"].indexOf(this.props.person) > -1 ? "were " : "was ")+verbList[i][3]).indexOf(event.target.value) > -1 ?  true : false               
                     : fildNum === 10 && this.props.voice === "ACTIVE"? ("had "+verbList[i][2]).indexOf(event.target.value) === -1 ? false : true
                     : fildNum === 11 && this.props.voice === "ACTIVE"? ("had been "+verbList[i][3]).indexOf(event.target.value) === -1 ? false : true
                     : fildNum === 12 && this.props.voice === "ACTIVE"? ("will "+verbList[i][0]).indexOf(event.target.value) > -1 || ("'ll "+verbList[i][0]).indexOf(event.target.value) > -1 || (["I","We"].indexOf(this.props.person) > -1 && ("shall "+verbList[i][0]).indexOf(event.target.value) > -1) ? true : false
                     : fildNum === 13 && this.props.voice === "ACTIVE"? ("will be "+verbList[i][3]).indexOf(event.target.value) > -1 || ("'ll be "+verbList[i][3]).indexOf(event.target.value) > -1 || (["I","We"].indexOf(this.props.person) > -1 && ("shall be "+verbList[i][3]).indexOf(event.target.value) > -1) ? true : false
                     : fildNum === 14 && this.props.voice === "ACTIVE"? ((["He","She","It"].indexOf(this.props.person)> -1 ?"will has ":"will have ")+verbList[i][2]).indexOf(event.target.value) > -1 || ((["He","She","It"].indexOf(this.props.person) > -1 ?"'ll has ":"'ll have ")+verbList[i][2]).indexOf(event.target.value) > -1 ||(["I","We"].indexOf(this.props.person) > -1 && ("shall have "+verbList[i][2]).indexOf(event.target.value) > -1) ? true : false
                     : fildNum === 15 && this.props.voice === "ACTIVE"? ((["He","She","It"].indexOf(this.props.person)> -1 ?"will has been ":"will have been ")+verbList[i][3]).indexOf(event.target.value) > -1 || ((["He","She","It"].indexOf(this.props.person) > -1 ?"'ll has been ":"'ll have been ")+verbList[i][3]).indexOf(event.target.value) > -1 ||(["I","We"].indexOf(this.props.person) > -1 && ("shall have been "+verbList[i][3]).indexOf(event.target.value) > -1) ? true : false
                     : fildNum === 16 && this.props.voice === "ACTIVE"? ((["He","She","It"].indexOf(this.props.person)> -1 ?"Does ":"Do ")+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" "+verbList[i][0]).indexOf(event.target.value) > -1 ? true : false
                     : fildNum === 17 && this.props.voice === "ACTIVE"? ((["He","She","It"].indexOf(this.props.person)> -1 ?"Is ": ["You","We","They"].indexOf(this.props.person)> -1 ?"Are ":"Am ")+("I".indexOf(this.props.person) > -1 ?this.props.person:this.props.person.toLowerCase())+" "+verbList[i][3]).indexOf(event.target.value) > -1 ? true : false
                     : fildNum === 18 && this.props.voice === "ACTIVE"? ((["He","She","It"].indexOf(this.props.person)> -1 ?"Has ": "Have ")+("I".indexOf(this.props.person) > -1 ?this.props.person:this.props.person.toLowerCase())+" "+verbList[i][2]).indexOf(event.target.value) > -1 ? true : false
                     : fildNum === 19 && this.props.voice === "ACTIVE"? ((["He","She","It"].indexOf(this.props.person)> -1 ?"Has ": "Have ")+("I".indexOf(this.props.person) > -1 ?this.props.person:this.props.person.toLowerCase())+" been "+verbList[i][3]).indexOf(event.target.value) > -1 ? true : false
                     : fildNum === 20 && this.props.voice === "ACTIVE"? ("Did "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" "+verbList[i][0]).indexOf(event.target.value) > -1 ? true : false
                     : fildNum === 21 && this.props.voice === "ACTIVE"? ((["We","You","They"].indexOf(this.props.person) > -1 ?"Were ":"Was ")+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" "+verbList[i][3]).indexOf(event.target.value) > -1 ? true : false
                     : fildNum === 22 && this.props.voice === "ACTIVE"? ("Had "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" "+verbList[i][2]).indexOf(event.target.value) > -1 ? true : false
                     : fildNum === 23 && this.props.voice === "ACTIVE"? ("Had "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" been "+verbList[i][3]).indexOf(event.target.value) > -1 ? true : false
                     : fildNum === 24 && this.props.voice === "ACTIVE"? ("Will "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" "+verbList[i][0]).indexOf(event.target.value) > -1 || (["I","We"].indexOf(this.props.person) > -1 && ("Shall "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" "+verbList[i][0]).indexOf(event.target.value) > -1) ? true : false
                     : fildNum === 25 && this.props.voice === "ACTIVE"? ("Will "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" be "+verbList[i][3]).indexOf(event.target.value) > -1 || (["I","We"].indexOf(this.props.person) > -1 && ("Shall "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" be "+verbList[i][3]).indexOf(event.target.value) > -1) ? true : false
                     : fildNum === 26 && this.props.voice === "ACTIVE"? ("Will "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+(["He","She","It"].indexOf(this.props.person) > -1 ? " has ":" have ")+verbList[i][2]).indexOf(event.target.value) > -1 || (["I","We"].indexOf(this.props.person) > -1 && ("Shall "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" have "+verbList[i][2]).indexOf(event.target.value) > -1) ? true : false
                     : fildNum === 27 && this.props.voice === "ACTIVE"? ("Will "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+(["He","She","It"].indexOf(this.props.person) > -1 ? " has ":" have ")+ "been "+verbList[i][3]).indexOf(event.target.value) > -1 || (["I","We"].indexOf(this.props.person) > -1 && ("Shall "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" have been "+verbList[i][3]).indexOf(event.target.value) > -1) ? true : false
                     : fildNum === 28 && this.props.voice === "ACTIVE"? ((["He","She","It"].indexOf(this.props.person)> -1 ? "does not ":"do not ")+verbList[i][0]).indexOf(event.target.value) > -1 || ((["He","She","It"].indexOf(this.props.person)> -1 ? "doesn't ":"don't ")+verbList[i][0]).indexOf(event.target.value) > -1 ? true : false
                     : fildNum === 29 && this.props.voice === "ACTIVE"? ((["He","She","It"].indexOf(this.props.person)> -1 ? "is not ": "I".indexOf(this.props.person)> -1 ? "am not " : "are not ")+verbList[i][3]).indexOf(event.target.value) > -1 || ((["He","She","It"].indexOf(this.props.person)> -1 ? "'s not ": "I".indexOf(this.props.person)> -1 ? "'m not " : "'re not ")+verbList[i][3]).indexOf(event.target.value) > -1 ? true : false
                     : fildNum === 30 && this.props.voice === "ACTIVE"? ((["He","She","It"].indexOf(this.props.person)> -1 ? "has not ":"have not ")+verbList[i][2]).indexOf(event.target.value) > -1 || ((["He","She","It"].indexOf(this.props.person)> -1 ? "hasn't ":"haven't ")+verbList[i][2]).indexOf(event.target.value) > -1 ? true : false
                     : fildNum === 31 && this.props.voice === "ACTIVE"? ((["He","She","It"].indexOf(this.props.person)> -1 ? "has not ":"have not ")+"been "+verbList[i][3]).indexOf(event.target.value) > -1 || ((["He","She","It"].indexOf(this.props.person)> -1 ? "hasn't ":"haven't ")+"been "+verbList[i][3]).indexOf(event.target.value) > -1 ? true : false
                     : fildNum === 32 && this.props.voice === "ACTIVE"? ("did not "+verbList[i][0]).indexOf(event.target.value) > -1 || ("didn't "+verbList[i][0]).indexOf(event.target.value) > -1 ? true : false               
                     : fildNum === 33 && this.props.voice === "ACTIVE"? ((["I","He","She","It"].indexOf(this.props.person)> -1 ? "was not ":  "were not ")+verbList[i][3]).indexOf(event.target.value) > -1 || ((["I","He","She","It"].indexOf(this.props.person)> -1 ? "wasn't ": "weren't ")+verbList[i][3]).indexOf(event.target.value) > -1 ? true : false
                     : fildNum === 34 && this.props.voice === "ACTIVE"? ("had not "+verbList[i][2]).indexOf(event.target.value) > -1 || ("hadn't "+verbList[i][2]).indexOf(event.target.value) > -1 ? true : false
                     : fildNum === 35 && this.props.voice === "ACTIVE"? ("had not been "+verbList[i][3]).indexOf(event.target.value) > -1 || ("hadn't been "+verbList[i][3]).indexOf(event.target.value) > -1 ? true : false
                     : fildNum === 36 && this.props.voice === "ACTIVE"? ("will not "+verbList[i][0]).indexOf(event.target.value) > -1 || ("won't "+verbList[i][0]).indexOf(event.target.value) > -1 || (["I","We"].indexOf(this.props.person) > -1 && ("shall not "+verbList[i][0]).indexOf(event.target.value) > -1) ? true : false
                     : fildNum === 37 && this.props.voice === "ACTIVE"? ("will not be "+verbList[i][3]).indexOf(event.target.value) > -1 || ("won't be "+verbList[i][3]).indexOf(event.target.value) > -1 || (["I","We"].indexOf(this.props.person) > -1 && ("shall not be "+verbList[i][3]).indexOf(event.target.value) > -1) ? true : false
                     : fildNum === 38 && this.props.voice === "ACTIVE"? ((["He","She","It"].indexOf(this.props.person)> -1 ?"will not has ":"will not have ")+verbList[i][2]).indexOf(event.target.value) > -1 || ((["He","She","It"].indexOf(this.props.person) > -1 ?"won't has ":"won't have ")+verbList[i][2]).indexOf(event.target.value) > -1 ||(["I","We"].indexOf(this.props.person) > -1 && ("shall not have "+verbList[i][2]).indexOf(event.target.value) > -1) ? true : false
                     : fildNum === 39 && this.props.voice === "ACTIVE"? ((["He","She","It"].indexOf(this.props.person)> -1 ?"will not has been ":"will not have been ")+verbList[i][3]).indexOf(event.target.value) > -1 || ((["He","She","It"].indexOf(this.props.person) > -1 ?"won't has been ":"won't have been ")+verbList[i][3]).indexOf(event.target.value) > -1 ||(["I","We"].indexOf(this.props.person) > -1 && ("shall not have been "+verbList[i][3]).indexOf(event.target.value) > -1) ? true : false
                     : fildNum === 0 && this.props.voice === "PASSIVE" ? ("be "+verbList[i][2]).indexOf(event.target.value) > -1 ? true : false
                     : fildNum === 1 && this.props.voice === "PASSIVE" ? ("be being "+verbList[i][2]).indexOf(event.target.value) > -1 ? true : false
                     : fildNum === 2 && this.props.voice === "PASSIVE" ? ((["He","She","It"].indexOf(this.props.person)> -1 ?"has been ":"have been ")+verbList[i][2]).indexOf(event.target.value) > -1 ? true : false
                     : fildNum === 4 && this.props.voice === "PASSIVE" ? ((["I"].indexOf(this.props.person) > -1 ? "am " : ["You","We","They"].indexOf(this.props.person) > -1 ? "are ":"is ")+verbList[i][2]).indexOf(event.target.value) > -1 || ((["I"].indexOf(this.props.person) > -1 ? "'m " : ["You","We","They"].indexOf(this.props.person) > -1 ? "'re ":"'s ")+verbList[i][2]).indexOf(event.target.value) > -1 ?  true : false
                     : fildNum === 5 && this.props.voice === "PASSIVE" ? ((["I"].indexOf(this.props.person) > -1 ? "am " : ["You","We","They"].indexOf(this.props.person) > -1 ? "are ":"is ")+"being "+verbList[i][2]).indexOf(event.target.value) > -1 || ((["I"].indexOf(this.props.person) > -1 ? "'m " : ["You","We","They"].indexOf(this.props.person) > -1 ? "'re ":"'s ")+"being "+verbList[i][2]).indexOf(event.target.value) > -1 ?  true : false
                     : fildNum === 6 && this.props.voice === "PASSIVE" ? ((["I","You","We","They"].indexOf(this.props.person) > -1 ? "have been " : "has been ")+verbList[i][2]).indexOf(event.target.value) > -1 || ((["I","You","We","They"].indexOf(this.props.person) > -1 ? "'ve been " :"'s been ")+verbList[i][2]).indexOf(event.target.value) > -1 ?  true : false
                     : fildNum === 8 && this.props.voice === "PASSIVE" ? ((["You","We","They"].indexOf(this.props.person) > -1 ? "were " : "was ")+verbList[i][2]).indexOf(event.target.value) > -1 ?  true : false
                     : fildNum === 9 && this.props.voice === "PASSIVE" ? ((["You","We","They"].indexOf(this.props.person) > -1 ? "were " : "was ")+"being "+verbList[i][2]).indexOf(event.target.value) > -1 ?  true : false
                     : fildNum === 10 && this.props.voice === "PASSIVE" ? ("had been "+verbList[i][2]).indexOf(event.target.value) > -1 ?  true : false
                     : fildNum === 12 && this.props.voice === "PASSIVE"? ("will be "+verbList[i][2]).indexOf(event.target.value) > -1 || ("'ll be "+verbList[i][2]).indexOf(event.target.value) > -1 || (["I","We"].indexOf(this.props.person) > -1 && ("shall be "+verbList[i][2]).indexOf(event.target.value) > -1) ? true : false
                     : fildNum === 13 && this.props.voice === "PASSIVE"? ("will be being "+verbList[i][2]).indexOf(event.target.value) > -1 || ("'ll be being "+verbList[i][2]).indexOf(event.target.value) > -1 || (["I","We"].indexOf(this.props.person) > -1 && ("shall be being "+verbList[i][2]).indexOf(event.target.value) > -1) ? true : false
                     : fildNum === 14 && this.props.voice === "PASSIVE"? ((["He","She","It"].indexOf(this.props.person)> -1 ?"will has ":"will have ")+"been "+verbList[i][2]).indexOf(event.target.value) > -1 || ((["He","She","It"].indexOf(this.props.person) > -1 ?"'ll has ":"'ll have ")+"been "+verbList[i][2]).indexOf(event.target.value) > -1 ||(["I","We"].indexOf(this.props.person) > -1 && ("shall have been "+verbList[i][2]).indexOf(event.target.value) > -1) ? true : false
                     : fildNum === 16 && this.props.voice === "PASSIVE"? ((["He","She","It"].indexOf(this.props.person)> -1 ?"Is ": ["You","We","They"].indexOf(this.props.person)> -1 ?"Are ":"Am ")+("I".indexOf(this.props.person) > -1 ?this.props.person:this.props.person.toLowerCase())+" "+verbList[i][2]).indexOf(event.target.value) > -1 ? true : false
                     : fildNum === 17 && this.props.voice === "PASSIVE"? ((["He","She","It"].indexOf(this.props.person)> -1 ?"Is ": ["You","We","They"].indexOf(this.props.person)> -1 ?"Are ":"Am ")+("I".indexOf(this.props.person) > -1 ?this.props.person:this.props.person.toLowerCase())+" being "+verbList[i][2]).indexOf(event.target.value) > -1 ? true : false
                     : fildNum === 18 && this.props.voice === "PASSIVE"? ((["He","She","It"].indexOf(this.props.person)> -1 ?"Has ": "Have ")+("I".indexOf(this.props.person) > -1 ?this.props.person:this.props.person.toLowerCase())+" been "+verbList[i][2]).indexOf(event.target.value) > -1 ? true : false
                     : fildNum === 20 && this.props.voice === "PASSIVE"? ((["We","You","They"].indexOf(this.props.person) > -1 ?"Were ":"Was ")+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" "+verbList[i][2]).indexOf(event.target.value) > -1 ? true : false
                     : fildNum === 21 && this.props.voice === "PASSIVE"? ((["We","You","They"].indexOf(this.props.person) > -1 ?"Were ":"Was ")+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" being "+verbList[i][2]).indexOf(event.target.value) > -1 ? true : false
                     : fildNum === 22 && this.props.voice === "PASSIVE"? ("Had "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" been "+verbList[i][2]).indexOf(event.target.value) > -1 ? true : false
                     : fildNum === 24 && this.props.voice === "PASSIVE"? ("Will "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" be "+verbList[i][2]).indexOf(event.target.value) > -1 || (["I","We"].indexOf(this.props.person) > -1 && ("Shall "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" be "+verbList[i][2]).indexOf(event.target.value) > -1) ? true : false
                     : fildNum === 25 && this.props.voice === "PASSIVE"? ("Will "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" be being "+verbList[i][2]).indexOf(event.target.value) > -1 || (["I","We"].indexOf(this.props.person) > -1 && ("Shall "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" be being "+verbList[i][2]).indexOf(event.target.value) > -1) ? true : false
                     : fildNum === 26 && this.props.voice === "PASSIVE"? ("Will "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+(["He","She","It"].indexOf(this.props.person) > -1 ? " has ":" have ")+ "been "+verbList[i][2]).indexOf(event.target.value) > -1 || (["I","We"].indexOf(this.props.person) > -1 && ("Shall "+("I".indexOf(this.props.person)> -1 ?this.props.person:this.props.person.toLowerCase())+" have been "+verbList[i][2]).indexOf(event.target.value) > -1) ? true : false
                     : fildNum === 28 && this.props.voice === "PASSIVE"? ((["He","She","It"].indexOf(this.props.person)> -1 ? "is not ": "I".indexOf(this.props.person)> -1 ? "am not " : "are not ")+verbList[i][2]).indexOf(event.target.value) > -1 || ((["He","She","It"].indexOf(this.props.person)> -1 ? "'s not ": "I".indexOf(this.props.person)> -1 ? "'m not " : "'re not ")+verbList[i][2]).indexOf(event.target.value) > -1 ? true : false
                     : fildNum === 29 && this.props.voice === "PASSIVE"? ((["He","She","It"].indexOf(this.props.person)> -1 ? "is not ": "I".indexOf(this.props.person)> -1 ? "am not " : "are not ")+"being "+verbList[i][2]).indexOf(event.target.value) > -1 || ((["He","She","It"].indexOf(this.props.person)> -1 ? "'s not ": "I".indexOf(this.props.person)> -1 ? "'m not " : "'re not ")+"being "+verbList[i][2]).indexOf(event.target.value) > -1 ? true : false
                     : fildNum === 30 && this.props.voice === "PASSIVE"? ((["He","She","It"].indexOf(this.props.person)> -1 ? "has not ":"have not ")+"been "+verbList[i][2]).indexOf(event.target.value) > -1 || ((["He","She","It"].indexOf(this.props.person)> -1 ? "hasn't ":"haven't ")+"been "+verbList[i][2]).indexOf(event.target.value) > -1 ? true : false
                     : fildNum === 32 && this.props.voice === "PASSIVE"? ((["I","He","She","It"].indexOf(this.props.person)> -1 ? "was not ":  "were not ")+verbList[i][2]).indexOf(event.target.value) > -1 || ((["I","He","She","It"].indexOf(this.props.person)> -1 ? "wasn't ": "weren't ")+verbList[i][2]).indexOf(event.target.value) > -1 ? true : false
                     : fildNum === 33 && this.props.voice === "PASSIVE"? ((["I","He","She","It"].indexOf(this.props.person)> -1 ? "was not ":  "were not ")+"being "+verbList[i][2]).indexOf(event.target.value) > -1 || ((["I","He","She","It"].indexOf(this.props.person)> -1 ? "wasn't ": "weren't ")+"being "+verbList[i][2]).indexOf(event.target.value) > -1 ? true : false
                     : fildNum === 34 && this.props.voice === "PASSIVE"? ("had not been "+verbList[i][2]).indexOf(event.target.value) > -1 || ("hadn't been "+verbList[i][2]).indexOf(event.target.value) > -1 ? true : false
                     : fildNum === 36 && this.props.voice === "PASSIVE"? ("will not be "+verbList[i][2]).indexOf(event.target.value) > -1 || ("won't be "+verbList[i][2]).indexOf(event.target.value) > -1 || (["I","We"].indexOf(this.props.person) > -1 && ("shall not be "+verbList[i][2]).indexOf(event.target.value) > -1) ? true : false
                     : fildNum === 37 && this.props.voice === "PASSIVE"? ("will not be being "+verbList[i][2]).indexOf(event.target.value) > -1 || ("won't be being "+verbList[i][2]).indexOf(event.target.value) > -1 || (["I","We"].indexOf(this.props.person) > -1 && ("shall not be being "+verbList[i][2]).indexOf(event.target.value) > -1) ? true : false
                     : fildNum === 38 && this.props.voice === "PASSIVE"? ((["He","She","It"].indexOf(this.props.person)> -1 ?"will not has been ":"will not have been ")+verbList[i][2]).indexOf(event.target.value) > -1 || ((["He","She","It"].indexOf(this.props.person) > -1 ?"won't has been ":"won't have been ")+verbList[i][2]).indexOf(event.target.value) > -1 ||(["I","We"].indexOf(this.props.person) > -1 && ("shall not have been "+verbList[i][2]).indexOf(event.target.value) > -1) ? true : false
                     : false
         }}))
        }else{ //end if(this.props.indI !== -1)
            alert("Выберите глагол!!")
        }//end else if(this.props.indI !== -1)
        
    }//end changeInputHandler

    componentWillReceiveProps() {

          this.setState({
            fildText: '',
            isTrue0: false,
            isTrue: 0
          });

    }
    renderSwitch(param) { 
        
        switch (param) {
          case 0:     return (<div className="check">&nbsp;&nbsp;</div>);
          case true:  return (<div className="check" style={{"color":"green"}}>V</div>);
          case false: return (<div className="check" style={{"color":"red"}}>X</div>)
          default:    return (<div className="check">&nbsp;&nbsp;</div>);
    
        }
      }
     
    render() {

        return (
                <div className={this.props.voice === "ACTIVE" ? "cell" : "cell invis"}>
                    <span className="beforeText">{["0","1","2","3"].indexOf(this.props.fildNum)> -1 ? "to":["16","17","18","19","20","21","22","23","24","25","26","27"].indexOf(this.props.fildNum)> -1?"":this.props.person}</span>
                    <input 
                        className={this.state.isTrue0 ? "txtrue inp" : "txfalse inp"} 
                        type="text" name="fildText" value={this.state.fildText} 
                        onChange={(e)=>this.changeInputHandler(e,Number(this.props.indI),Number(this.props.fildNum))}
                        onBlur={(e)=>this.blurInputHandler(e,Number(this.props.indI),Number(this.props.fildNum))}
                        onFocus={()=>{this.setState({isTrue:0})}}
                         
                    />
                    <span className="afterText">{["16","17","18","19","20","21","22","23","24","25","26","27"].indexOf(this.props.fildNum)=== -1 ? "":"?"}</span>
                    <div>{this.renderSwitch(this.state.isTrue)}</div>
                </div>
          
        )
      }
}
const mapDispatchToProps = {
    addToAllFields, addToTrueFields, deleteFromTrueFields, deleteFromAllFields
}

const mapStateToProps = state => {
    
    return {
        indI: state.customization.verb,
        voice: state.customization.voice,
        person: state.customization.person
    }
    
}
export default connect(mapStateToProps,mapDispatchToProps)(Input) 
