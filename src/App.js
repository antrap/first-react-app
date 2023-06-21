import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

function App() {
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById("root"));
/*const content = (
  <div>
    <h1>Hello Everyone!</h1>
    <p>This is a static page built using React.The goal of creating this project is:</p>
    <ul>
      <li>To know how JSX component works.</li>
      <li>To create a react app using create-react-app.</li>
      <li>To learn how HTML can be implemented using JS.</li>
    </ul>

  </div>
)*/

//document.getElementById("root").append(content);
//[object Object]---displayed in browser
//return JS object once JSON stringify added


//ReactDOM.render(content, document.getElementById("root"));
//returns real DOM object that Browser can interpret 