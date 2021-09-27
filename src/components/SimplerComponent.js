import React from 'react'

// class SimplerComponent extends Component {
//     render() {
//       return (
//         <div> "I am just happy" </div>
//       );
//     }
//   }


const SimplerComponent = (props) => (

 <div onClick={props.handleClick}>I am just happy</div>

)

  
export default SimplerComponent
  