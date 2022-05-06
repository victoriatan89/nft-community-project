import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {ProfileProvider} from "./contexts/profile-context";
import NavBar from "./components/nav-bar";
import Home from './pages/home'
import Explore from './pages/explore'
import Profile from "./pages/profile";
import EditProfile from "./pages/edit-profile"
import UserProfile from "./pages/user-profile";
import Details from "./pages/details";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import PrivacyPolicy from "./pages/privacy-policy";
import SecureRoute from "./components/secure-route";
import postsReducer from "./reducers/posts-reducer"
import {createStore} from "redux"
import {Provider} from "react-redux";
const store = createStore(postsReducer);

function App() {
    return (
        <ProfileProvider>
            <Provider store={store}>
                <BrowserRouter>
                    <NavBar/>
                    <Routes>
                        <Route path="/"
                               element={<Home/>}/>
                        <Route path="signup"
                               element={<Signup/>}/>
                        <Route path="signin"
                               element={<Signin/>}/>
                        <Route path="explore"
                               element={<Explore/>}/>
                        <Route path="explore/:q"
                               element={<Explore/>}/>
                        <Route path="details/:slug/:address"
                               element={<Details/>}/>
                        <Route path="profile"
                               element={<SecureRoute><Profile/></SecureRoute>}/>
                        <Route path="profile/edit"
                               element={<EditProfile/>}/>
                        <Route path="profile/:id"
                               element={<UserProfile/>}/>
                        <Route path="privacy"
                               element={<PrivacyPolicy/>}/>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </ProfileProvider>
    );
}

export default App;
