import { connect } from 'react-redux';
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from '../../Redux/mountingReducer';
import Mounting from './Mounting';

let mapStateToProps = (state) => {
  return {
    posts: state.mountingPage.posts,
    newPostText: state.mountingPage.newPostText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewApplicationText: (text) => {
      dispatch(updateNewPostActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};
const MountingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Mounting);
export default MountingContainer;
