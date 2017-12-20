import React from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            course: {title: ''}
        };
    
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    // TODO: Step through redux flow. Then copy this to new flux-folder


    onTitleChange(event){
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course:course})

    }

    onClickSave() {
        //alert(`Saving ${this.state.course.title}`);
        this.props.dispatch(courseActions.createCourse(this.state.course));
    }

    courseRow(course, index){
        return(<div id={index}>{course.title}</div>)
    }

    render() {
        debugger;
        return(
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add course</h2>
                <input  type="text"
                        onChange={this.onTitleChange}
                        value={this.state.course.title} />
                <input  type="submit"
                        onClick={this.onClickSave}
                        value="Save" />
                        
            
            </div>
        );
    }
}
function mapStateToProps(state, ownProps) {
    debugger;
    return {
        courses: state.courses // En instans av vår courseProvider, se courseProvder.js
    }

}

// CoursesPage.propTypes = {
//     dispatch: PropTypes.func.isRequired,
//     courses: PropTypes.array.isRequired
// }

export default connect(mapStateToProps)(CoursesPage);