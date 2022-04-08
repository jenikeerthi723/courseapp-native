import React from 'react';
import ReactDOM from 'react-dom';

class Demo{
  methodone(){
    var a=10;
    var b=15;
    c =a +b;
    document.getElementById('root').innerHTML=c;

  }
}
 var mydemo =new Demo();
 mydemo = methodone();


export default Demo;