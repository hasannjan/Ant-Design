import { useState } from 'react'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Title from 'antd/lib/skeleton/Title';
import './App.css';
import Welcome from './Pages/Authentication/Welcome';
import Signup from './View/Forms/Signup';
import Login from './View/Login';

const state = {
  LOGIN: "LOGIN",
  SIGN_UP: "SIGN_UP",
  DASHBOARD: "DASHBOARD"
}

function App() {
  const [view, setView] = useState("LOGIN")


  {/* <Login /> */ }
  {/* <Signup /> */ }
  {/* < Welcome /> */ }

  switch (view) {
    case state.LOGIN:
      return <Login setView={setView} />
      break;
    case state.SIGN_UP:
      return <Signup setView={setView} />
      break;
    case state.DASHBOARD:
      return <Welcome />
      break;
  }
}

export default App;
