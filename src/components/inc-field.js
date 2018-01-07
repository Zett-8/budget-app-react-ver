import React from 'react';
import IncList from '../containers/inc-list';

export default function () {
    return (
        <div className="income">
            <h2 className="icome__title">Income</h2>
            <div className="income__list">

                <IncList />

            </div>
        </div>
    );
}