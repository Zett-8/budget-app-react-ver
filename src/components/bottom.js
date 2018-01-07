import React from 'react';
import InputBar from '../containers/input';
import Fields from './fields';

export default function(){
    return (
        <div className='bottom'>
            <InputBar />
            <Fields />
        </div>
    );
}