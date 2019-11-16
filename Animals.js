
/*class Animal {
    name;
    order;
    age;
    constructor() {
        this.name = "Max";
        this.order = "carnivora"
       this.age = 3
    }
    walk(){
        alert('${this.name} is walking')
        alert(this.order)
        alert(this.age)
    }
    growup(){
        this.age +=1
    }
}
class Dogs extends Animal {

}*/

/*
    getJob() {

    }

    leaveJob() {

    }

    learnNewSkill() {

    }

    forgetSkill() {

    }

*/
/*
import React from 'react';
export default class ImprovedButton extends React.Component {
render(){

  return <button
  onClick={this.props.onClick }
  >
    {this.props.children}
    </button>
}


}*/
import React from 'react';
export default class  ImprovedButton extends React.Component {
 componentDidMount(){

    setTimeout(function(){  alert("Hello message"); }, 2000);
   
 }
 componentWillUnmount(){
     
     alert("Goodbye")
 }
 render(){
 return (<div></div>)

}
}