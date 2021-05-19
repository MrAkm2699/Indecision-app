import React from "react";
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render( <IndecisionApp/> ,document.getElementById('app'));

// const Layout = (props) =>{
//     return(
//         <div>
//         <h1>Title</h1>
//         <h2>Subtitle</h2>
//         {props.children}
//         </div>
//     );
// };


// ReactDOM.render(
//     <Layout>
//         <div>
//             <p>This is body of a child prop<br></br>(builtin prop)(children prop)</p>
//         </div>    
//     </Layout> ,
//      document.getElementById('app'));
