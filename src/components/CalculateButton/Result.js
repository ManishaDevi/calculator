import React from 'react';
import { connect } from 'react-redux';

import './Result.scss';

function Result({result}) {
    return (
        <div className="result__wrapper">
            <span className="label">Result</span>
            <h2 className="result">{result}</h2>
        </div>
    );

}

// fetch calculated result from store
const mapStateToProps = state => ({
    result: state.result
})

export default connect(mapStateToProps)(Result);