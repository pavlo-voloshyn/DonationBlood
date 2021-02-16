import {store} from '../actions/store';
import {Provider} from 'react-redux';
import Users from './Users';
import {Container} from '@material-ui/core';
import { ToastProvider } from "react-toast-notifications";
import MenuAppBar from './MenuAppBar'

const Home = (props) => {
  return (
    <Provider store={store}>
       <ToastProvider autoDismiss={true}>
      <Container maxWidth="lg">
        <Users/>
      </Container>
      </ToastProvider>
    </Provider>
  );
}

export default Home;