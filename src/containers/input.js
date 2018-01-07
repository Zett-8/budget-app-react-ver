import React from 'react';
import { InputType } from "../actions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Input extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            type: true,
            des: '',
            value: '',
        };
    }

    typeCatch(){
        this.setState({type: !this.state.type});
        Array.from(document.querySelectorAll('.cc')).forEach(value => value.classList.toggle('red-focus'));
        document.querySelector('.add__btn').classList.toggle('red');
        document.querySelector('.add__description').focus();
    }

    desCatch(event){
        this.setState({des: event.target.value});
    }

    valueCatch(event){
        this.setState({value: event.target.value});
    }

    render(){
        return (
            <div className="add">
                <div className="add__container">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        if (this.state.des && this.state.value) {
                            this.props.InputType(this.state.type, this.state.des, Math.abs(this.state.value));
                            this.setState({
                                des: '',
                                value: '',
                            });
                            document.querySelector('.add__description').focus();
                        }
                    }}>
                        <select className="add__type cc" onChange={() => this.typeCatch()}>
                            <option defaultValue="inc">+</option>
                            <option value="exp">-</option>
                        </select>
                        <input
                            type="text"
                            className="add__description cc"
                            placeholder="Add description"
                            value={this.state.des}
                            onChange={(event)=>this.desCatch(event)}
                        />
                        <input
                            type="number"
                            className="add__value cc"
                            placeholder="Value"
                            value={this.state.value}
                            onChange={(event)=>this.valueCatch(event)}
                        />
                        <button className="add__btn"><i className="ion-ios-checkmark-outline"></i></button>
                    </form>

                </div>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({
        InputType: InputType
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(Input);