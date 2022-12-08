import './App.css';
import Layout from './components/Layout/Layout'
import { Route, Switch } from 'react-router-dom';
import Dashboard from './containers/Dashboard/Dashboard';
import Doctors from './containers/Doctors/Doctors';
import Medicines from './containers/Medicine/Medicines';
import Patients from './containers/Patients/Patients';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import Counter from './containers/Counter/Counter';
import { PersistGate } from 'redux-persist/integration/react'
import PromiseExample from './containers/Examples/PromiseExample';

function App() {
  const {store, persistor} = configureStore();
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SnackbarProvider maxSnack={3}>
            <Layout>
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/doctors" component={Doctors} />
                <Route exact path="/medicines" component={Medicines} />
                <Route exact path="/patients" component={Patients} />
                <Route exact path="/counter" component={Counter} />
                <Route exact path="/promise_example" component={PromiseExample} />
              </Switch>
            </Layout>
          </SnackbarProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
