import Add from "./Add"
import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";

function sayHello() {
    alert("Hello");
  }

const Assignment4 = () => {
 return(
   <>
     <h1>Assignment 4</h1>
     <Add a={1} b={2} />
     <ClickEvent/>
     <PassingDataOnEvent/>
     <PassingFunctions theFunction={sayHello}/>
     <EventObject/>
     <Counter/>
     <BooleanStateVariables/>
     <StringStateVariables/>
     <DateStateVariable/>
     <ObjectStateVariable/>
     <ArrayStateVariable/>
     <ParentStateComponent/>
     <ReduxExamples/>
   </>
 );
};
export default Assignment4