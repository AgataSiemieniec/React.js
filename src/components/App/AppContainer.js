import {connect} from 'react-redux';
import App from './App';

const mapStateToProps = state => ({ //w stałej mapStateToProps zapisujemy funkcję, która definiuje powiązanie propsów ze stanem
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
});

export default connect(mapStateToProps)(App); //w ostatniej parze nawiasów musimy podać komponent, który jest wykorzystywany w tym kontenerze.
// AppContainer.js - importuje komponent, dla którego jest kontenerem – w tym wypadku App. 