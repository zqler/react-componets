import React from "react";

class Home extends React.Component {
  componentWillMount() {
    let obj = { id: 1, name: "张权", age: 20, sex: "男" };
    console.log(Object.assign({}, obj, { age: 27 }), "测试Js新的API");
  }
  render() {
    return <h1> Hi，欢迎你进入主页面,一起学习react,吃午饭了</h1>;
  }
}

export default Home;
