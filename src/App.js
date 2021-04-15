import React, { Component } from 'react';
import {Card} from './components/Card';
import {Modal} from './components/modal';
class App extends Component {
  constructor(){
    super();
    this.state={
      launchpads:[],
      launches:{id:"",name:"",details:"",date:"",cores:[{reused:0}],},
      url:"",
      check:false,
    }
    
  }
  onClickHandler(ele){
    this.setState({url:'https://api.spacexdata.com/v4/launches/'+ele, check:true})
  }
  componentDidMount(){
    fetch('https://api.spacexdata.com/v4/launchpads')
    .then((response)=>(response.json()))
    .then(launchpads=>this.setState({launchpads:launchpads}))
  }
  componentDidUpdate(){
    if(this.state.check){
      fetch(this.state.url).then((response)=>(response.json())).then(data=>this.setState({launches:data,check:false}))}
      // console.log(this.state.launches)
  }
  render() { 
    return (
      <div className="container" >
        {this.state.launchpads.map((launchpads)=>(
          <div>
            
          <Card launchpads={launchpads} click={(event)=>this.onClickHandler(event.target.innerText)}/>
          <Modal launch={this.state.launches} id={launchpads.launches.id}/>
         
</div>
        ))
      }    
      </div>
     )}}
      
 
export default App;

