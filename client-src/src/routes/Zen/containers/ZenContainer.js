import { connect } from 'react-redux';
import { requestZen, saveCurrentZen } from '../modules/zen';

import Zen from '../components/Zen';

const mapActionCreators = {
  requestZen,
  saveCurrentZen,
};

const mapStateToProps = (state) => ({
  zen: state.zen.zens.find(zen => zen.id === state.zen.current),
  saved: state.zen.zens.filter(zen => state.zen.saved.indexOf(zen.id) !== -1),
});

export default connect(mapStateToProps, mapActionCreators)(Zen);