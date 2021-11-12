import React, { Component } from 'react'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { connect } from 'react-redux';

class Counter extends Component {
    render() {
        var dispatch = this.props.dispatch;
        console.log(this.props);
        return (
            <div>
                <Button onClick={e => dispatch({type: "decrement", step: 3})}><MinusOutlined /></Button>
                    <div>{this.props.my_counter}</div>
                <Button onClick={e => {
                    dispatch({
                        type: "decrement",
                        step: 3
                    })
                }}><PlusOutlined /></Button>
                <Button onClick={e => {
                    // Envois une action au store pour etre traité par les reducers
                    dispatch({
                        type: "increment",
                        step: 1 // Param supplimentaire, on peut rajouter autant qu'on veut
                    })
                }}><PlusOutlined /></Button>
            </div>
        )
    }
}




const mapStateToProps = (state) => {
    console.log("Our store is", state);
    
    return {
        // alpha: "One"
        my_counter: state.conteur
    }
}



export default connect(mapStateToProps, null)(Counter);