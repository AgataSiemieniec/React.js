import {connect} from 'react-redux';
import {createActionAddColumn, getColumnsForList } from '../../redux/columnsRedux';
import List from './List';

// export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);

const mapStateToProps = (state, props)=> ({
  columns: getColumnsForList(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => 
    dispatch(
      createActionAddColumn({
        listId: props.id,
        title,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);