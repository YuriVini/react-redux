import React from 'react';
import { connect } from 'react-redux';

const Video = ({ activeModule, activeLesson }) => (
    <div>
        <strong> Modulo {activeModule.title}</strong>
        <br/>
        <span>Aula {activeLesson.title}</span>
        <div style={{height: 50}}></div>
    </div>
);

export default connect(state => ({
    activeModule: state.course.activeModule,
    activeLesson: state.course.activeLesson,
}))(Video);