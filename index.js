import React, { Component } from 'react';
import { render } from 'react-dom';

const element
//const Hello = <h2 title='titulo'> Holaaaa </h2>
//console.log(Hello)
//render(Hello,document.getElementById('root'))

// React Component
function Hello (){
  return <h2>Holaaaa 2</h2>
}

render(<Hello/>, document.getElementById('root'))