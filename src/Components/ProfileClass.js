import React from "react";
class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        //create state
        this.state = {
            userInfo : {
                name: "Dummy Name",
                location: "Dummy Location",
            },
        };
        console.log("Child-Constructor"+this.props.name);
    }
    //First Constructor is called then Render then componentDidMount - React Life Cycle
    async componentDidMount() {
        //API call here 
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        this.setState(
            {
                userInfo: json,
            });
            console.log("Child- componentDidMount"+this.props.name);
    }
    componentDidUpdate() {
        this.timer = setInterval(() => {
            console.log("Interval started!!");
        },1000);

        console.log("Component Did Update");
    }
    componentWillUnmount() {
        clearInterval(this.timer);
        
        console.log("Component will Unmount");
    }
    render()
    {
        console.log("render")
        return (
        <div>
            <h1>Profile Class Component</h1>
            
            <img src ={this.state.userInfo.avatar_url}></img>
            <h2>Name: {this.state.userInfo.name}</h2>
            <h2>Location: {this.state.userInfo.location}</h2>
        </div>
    )}
}
export default ProfileClass;

/**
 * <Render cycle>
 * Child - constructor
 * child - render
 * Child -componentDidMount
 * 
 * Dom updated
 * API call
 * setState
 * 
 * <Update Cycle>
 * render
 * componentDidUpdate
 * componentWillUnmount <When we move to another page the mount will break>
 */