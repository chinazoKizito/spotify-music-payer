import ApiRequest from "./components/ApiRequest";
import AppContainer from "./components/AppContainer";
import MainPage from "./components/main/MainPage";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";



function App() {
  return (
    <AppContainer>
      <div className="App">
        <Navbar/>
        <MainPage/>
        <Sidebar/>
      </div>
    </AppContainer>
    
  );
}

export default App;
