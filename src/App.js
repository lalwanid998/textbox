import React from "react";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        if (localStorage.getItem("uname")) {
            var a = localStorage.getItem("uname");
            this.setState({ msg: "Data is " + a});
        }
    }
    saveData() {
        var a =  this.state.txt1;
        localStorage.setItem("uname", a);
        this.setState({ msg: "Data Saved" });
    }
    getData() {
        if (localStorage.getItem("uname")) {
            var b = localStorage.getItem("uname");
            this.setState({ msg: "Hi," + b});
        }else{
            this.setState({ msg: "Data is Not Available"});
        }
    }
    removeData() {
        localStorage.removeItem("uname");
        this.setState({ msg: "Data Removed"});
    }
    render() {
        return(
            <>
                <h1>Local Storage</h1>
                {this.state.msg}<br />
                Name : <input type="text" onChange={(e) => this.setState({ txt1: e.target.value})} />
                <button onClick={this.saveData.bind(this)}>Save</button>
                <button onClick={this.getData.bind(this)}>Get</button>
                <button onClick={this.removeData.bind(this)}>remove</button>
            </>
        );
    }
}
export default App;