import React from 'react';
import ExpList from '../containers/exp-list';

export default function () {
    return (
        <div className="expenses">
            <h2 className="expenses__title">Expenses</h2>
            <div className="expenses__list">

                <ExpList />

            </div>
        </div>
    );
}