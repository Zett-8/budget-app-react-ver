import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DelItem } from '../actions';

class ItemList extends React.Component{
    calTotalInc(){
        let total = 0;
        this.props.Items.forEach(value => {
            if (value.type === 'inc') {
                total += parseInt(value.value, 10);
            }
        });
        return total;
    }

    formatNum(n){
        return String(n).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    }

    renderList(){
        return this.props.Items.map(value => {
            if (value.type === 'exp'){
                return (
                    <div className="item clearfix" key={value.id}>
                        <div className="item__description">{value.des}</div>
                        <div className="right clearfix">
                            <div className="item__value">- {this.formatNum(value.value)}</div>
                            <div className="item__percentage">
                                {this.calTotalInc()? Math.round(value.value / this.calTotalInc() * 100) : '--'}%
                            </div>
                            <div className="item__delete">
                                <button className="item__delete--btn" onClick={() => this.props.DelItem(value.id)}>
                                    <i className="ion-ios-close-outline"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                );
            }
            return null;
        })
    }

    render(){
        return <div>{this.renderList()}</div>;
    }
}

function mapStateToProps(state) {
    return{
        Items: state
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        DelItem: DelItem
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemList);

