import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Button } from 'antd';

export class Username extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        };
    }
    render() {
        let dispatch = this.props.dispatch;
        return (
            <div style={styles.user_name_container}>
                <Input size="large" onChange={e => this.setState({username: e.target.value})} value={this.state.username}/>
                <Button type="primary" onClick={e => dispatch({type: "set_username", username: this.state.username})}>Ok</Button>
            </div>
        )
    }
}


const styles = {
    user_name_container: {
        width: "40%"
    }
};

const mapStateToProps = (state) => ({
    
})



export default connect(mapStateToProps, null)(Username)
