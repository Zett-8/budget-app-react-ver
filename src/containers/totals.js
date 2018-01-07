import React from 'react';
import { connect } from 'react-redux';

class Totals extends React.Component{
    calTotalInc(){
        let total = 0;
        this.props.Items.forEach(value => {
            if (value.type === 'inc') {
                total += value.value;
            }
        });
        return total;
    }

    calTotalExp(){
        let total = 0;
        this.props.Items.forEach(value => {
            if (value.type === 'exp') {
                total += value.value;
            }
        });
        return total;
    }

    formatNums(n){
        return String(n).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    }

    render() {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const year = new Date().getFullYear();
        const month = new Date().getMonth();

        let totalInc = this.calTotalInc();
        let totalExp = this.calTotalExp();
        let current = totalInc - totalExp;
        const percent = totalInc? Math.round(totalExp / totalInc * 100) : '--';

        totalInc = this.formatNums(totalInc);
        totalExp = this.formatNums(totalExp);
        current = this.formatNums(current);

        return (
            <div className="top">
                <div className="budget">
                    <div className="budget__title">
                        Available Budget in <span className="budget__title--month">{months[month]}, {year}</span>:
                    </div>
                    <div className="budget__value">{current}</div>

                    <div className="budget__income clearfix">
                        <div className="budget__income--text">Income</div>
                        <div className="right">
                            <div className="budget__income--value">+ {totalInc}</div>
                            <div className="budget__income--percentage">&nbsp;</div>
                        </div>
                    </div>

                    <div className="budget__expenses clearfix">
                        <div className="budget__expenses--text">Expenses</div>
                        <div className="right clearfix">
                            <div className="budget__expenses--value">- {totalExp}</div>
                            <div className="budget__expenses--percentage">{ percent }%</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        Items: state
    }
}

export default connect(mapStateToProps)(Totals)

