import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/Single/Single";
import New from "./pages/New/New";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">

      

      <BrowserRouter>
    <Routes>
     <Route path="/">
      <Route index element={<Home/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="users" >
        <Route index element={<List/>} />
        <Route path=":userID" element={<Single/>} />
        <Route path="new" element={<New/>} />

      </Route>
      <Route path="products" >
        <Route index element={<List/>} />
        <Route path=":productID" element={<Single/>} />
        <Route path="new" element={<New/>} />

      </Route>

     </Route>
    </Routes>
  </BrowserRouter>,
      
    </div>
  );
}

export default App;
