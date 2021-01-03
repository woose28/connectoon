import React from 'react';
import './home.css';
import { connect } from 'react-redux';
import { load_info_before, requestLoad } from '../store/modules/load_info';

import Writers from '../Writer/writers';

const Home = (props) => {
    const loadData = () => {
        props.requestLoad();
    }
    return(
        <div className="home-container">
            <Writers
                idLoading={props.isLoading}
                isSuccess={props.isSuccess}
                loadData={loadData}
                userData={props.data}
                final_id={props.final_id}
                />            
        </div>
    );
}

const mapStateToProps = (state) => ({
    isLoading: state.load_info.isLoading,
    isSuccess: state.load_info.isSuccess,
    data: state.load_info.info.data,
    length: state.load_info.info.length,
    final_id: state.load_info.info.final_id,
});

const mapDispatchToProps = (dispatch) => ({
    load_info_before: () => { dispatch(load_info_before()) },
    requestLoad: () => { dispatch(requestLoad()) },
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);
