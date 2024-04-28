import logo from './logo.svg';
import './App.css';
// import Header from './Component/Header';
// import Sidbar from './Component/Sidbar';
// import Footer from './Component/Footer';
// import First_assigment from './Es5_Es6_array/First_assigment';
// import Firstboostrap from './Firstboostrap/Firstboostrap';
import Sessationstorage from './Crud_operation/Sessationstorage';
import Crud_Localsession from './Crud_operation/Crud_Localsession';
// import Comment from './form/Comment'
// import Control from './form/Control'
// import Uncontrol from './form/Uncontrol'
// import ArrayandArrayofObject from './event/ArrayandArrayofObject';
// import Button from './event/Button';
// import Ckeckbox from './event/Ckeckbox';
// import Toggle from './event/Toggle';



function App() {
  return (
    <div >
      {/* <Firstboostrap/> */}
      {/* <First_assigment/> */}
      {/* <Header/>
      <Sidbar/>
      <Footer/>
      <ArrayandArrayofObject/>
      <Button/>
      <Ckeckbox/>
      <Toggle/>
      <Comment/>
      <Control/>
      <Uncontrol/> */}
      <Crud_Localsession/>
      <br/>
      <br/>

      <Sessationstorage/>
    </div>
  );
}

export default App;
