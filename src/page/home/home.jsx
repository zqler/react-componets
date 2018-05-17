import React from "react";
import "./home.scss"
class Home extends React.Component {
  componentWillMount() {
    let obj = { id: 1, name: "zqler", age: 20, sex: "男" };
    console.log(Object.assign({}, obj, { age: 27 }), "新的一个开心");
  }
  render() {
    return <h1> Hi，欢迎你进入主页面,一起学习react,123321132</h1>;
  }
}

export default Home;
