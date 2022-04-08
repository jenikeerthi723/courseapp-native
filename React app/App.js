import React from 'react';

// import HelloWorld from './HelloWorld';
// import ParentChild from './ParentChild';
// import PropChildExample from './PropChildExample'
// import PropTypesExample from './PropTypesExample'
//import ChildParent from './ChildParent'
// import TempCalc from './TempCalc/TempCalc'
// import TodoApp from './TodoApp'
// import RefsExample from './RefsExample'
// import GlobalStyleExample from './Styles/GlobalStyleExample'
// import InlineStyleExample1 from './Styles/InlineStyleExample1'
// import InlineStyleExample2 from './Styles/InlineStyleExample2'
// import ExternalCSSExample from './Styles/ExternalCSSExample'
// import CssModuleExample from './Styles/CssModuleExample'
// import SingleElementForm from './SingleElementForm'
// import TwoElementForm from './TwoElementForm'
// import MultiSelect from './MultiSelect'
// import FormContainer1 from './FormContainer/FormContainer1/FormContainer1'
// import LifeCycleExample1 from './LifeCycle/LifeCycleExample1'
// import Timer from './Timer'
// import LifeCycleExample2 from './LifeCycle/LifeCycleExample2'
// import FormContainer2 from './FormContainer/FormContainer2/FormContainer2'
// import FormExample from './FormContainer/FormExample/FormExample'
// import PureComp from './LifeCycle/PureComp'

// import StateHookExample from './Hooks/StateHookExample'
// import MultipleStateHookExample from './Hooks/MultipleStateHookExample'
// import EffectHookExample from './Hooks/EffectHookExample'
// import EffectHookCleanupExample from './Hooks/EffectHookCleanupExample'
// import UseContextHookExample from './Hooks/UseContextHookExample'
// import UseRefHookExample from './Hooks/UseRefHookExample'
// import UseRefHookExample1 from './Hooks/UseRefHookExample1'
// import UseRefHookExample2 from './Hooks/UseRefHookExample2'
// import ExamplewithoutuseCallback from './Hooks/ExamplewithoutuseCallback'
// import UseCallbackHookExample from './Hooks/UseCallbackHookExample'
// import UseMemoHookExample from './Hooks/UseMemoHookExample'
// import UseCallbackUseMemoExample from './Hooks/UseCallbackUseMemoExample'
// import UseLayoutEffectExample from './Hooks/UseLayoutEffectExample'
// import UseReducerHookExample1 from './Hooks/UseReducerHookExamples/UseReducerHookExample1'
// import UseReducerHookExample2 from './Hooks/UseReducerHookExamples/UseReducerHookExample2'
// import UseReducerHookExample3 from './Hooks/UseReducerHookExamples/UseReducerHookExample3'
// import CustomHookExample1 from './Hooks/CustomHookExample1'
// import HOCExample1 from './HOC/HOCExample1'
// import HOCExample2 from './HOC/HOCExample2'
// import HOCExample3 from './HOC/HOCExample3'
// import AxiosGetExample from './AxiosExamples/AxiosGetExample'
// import AxiosPostExample from './AxiosExamples/AxiosPostExample'
// import AxiosDeleteExample from './AxiosExamples/AxiosDeleteExample'
// import AxiosDeleteExample1 from './AxiosExamples/AxiosDeleteExample1'
// import AxiosInteceptorsExample from './AxiosExamples/AxiosInteceptorsExample'
// import RoutingExample1 from './Routing/RoutingExample1'
// import RoutingExample2 from './Routing/RoutingExample2'
// import RoutingExample3 from './Routing/RoutingExample3'
// import RoutingExample4 from './Routing/RoutingExample4'

// import StatewithoutRedux from './ReduxExamples/StatewithoutRedux'

// import { createStore , combineReducers} from 'redux'
// import { Provider } from 'react-redux'
// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import reduxexample1reducer from './ReduxExamples/ReduxExample1/Reducer'
// import ReduxExample1 from './ReduxExamples/ReduxExample1/ReduxExample1'
// import reduxexample2reducer from './ReduxExamples/ReduxExample2/Reducer'
// import ReduxExample2 from './ReduxExamples/ReduxExample2/ReduxExample2'
// import reduxexample3reducer from './ReduxExamples/ReduxExample3/Reducer'
// import ReduxExample3 from './ReduxExamples/ReduxExample3/ReduxExample3'
// import reduxexample4counterreducer from './ReduxExamples/ReduxExample4/CounterReducer'
// import reduxexample4resultreducer from './ReduxExamples/ReduxExample4/ResultReducer'
// import ReduxExample4 from './ReduxExamples/ReduxExample4/ReduxExample4'
// import reduxexample5todoreducer from './ReduxExamples/ReduxExample5/ToDoReducer'
// import reduxexample5visibilityreducer from './ReduxExamples/ReduxExample5/VisibilityReducer'
// import ReduxExample5 from './ReduxExamples/ReduxExample5/ReduxExample5'
// import reduxhooksreducer from './ReduxExamples/ReduxHooks/Reducer'
// import ReduxHooks from './ReduxExamples/ReduxHooks/ReduxHooks'

// import thunk from 'redux-thunk'
// import reduxthunkexample1counterreducer from './ReduxThunkExamples/ReduxThunkExample1/CounterReducer'
// import reduxthunkexample1resultreducer from './ReduxThunkExamples/ReduxThunkExample1/ResultReducer'
// import ReduxThunkExample1 from './ReduxThunkExamples/ReduxThunkExample1/ReduxThunkExample1'
// import reduxthunkexample2todoreducer from './ReduxThunkExamples/ReduxThunkExample2/ToDoReducer'
// import reduxthunkexample2visibilityreducer from './ReduxThunkExamples/ReduxThunkExample2/VisibilityReducer'
// import ReduxThunkExample2 from './ReduxThunkExamples/ReduxThunkExample2/ReduxThunkExample2'
// import reduxthunkexample3reducer from './ReduxThunkExamples/ReduxThunkExample3/Reducer'
// import ReduxThunkExample3 from './ReduxThunkExamples/ReduxThunkExample3/ReduxThunkExample3'
// import reduxthunkexample4reducer from './ReduxThunkExamples/ReduxThunkExample4/Reducer'
// import ReduxThunkExample4 from './ReduxThunkExamples/ReduxThunkExample4/ReduxThunkExample4'
import I18Example from './I18nExample/I18Example'


// const reduxexample4reducer = combineReducers({
//   ctr: reduxexample4counterreducer,
//   res: reduxexample4resultreducer
// });

// const reduxexample5reducer = combineReducers({
//   todos: reduxexample5todoreducer,
//   visibilityfilter: reduxexample5visibilityreducer
// }); 

// const reduxthunkexample1reducer = combineReducers({
//   ctr: reduxthunkexample1counterreducer,
//   res: reduxthunkexample1resultreducer
// });

// const reduxthunkexample2reducer = combineReducers({
//   todos: reduxthunkexample2todoreducer,
//   visibilityfilter: reduxthunkexample2visibilityreducer
// });

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//    const store = createStore( 
//     reduxthunkexample4reducer
//      //,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
//     //,applyMiddleware(thunk)
//     ,composeEnhancers( applyMiddleware(thunk) )
//      ); 

function App() {
  return (
    // <Provider store={store}>
        <I18Example  />
  //  </Provider>
  );
}

export default App;
