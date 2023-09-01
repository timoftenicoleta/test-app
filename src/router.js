import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Posts from './components/Posts';
import ProtectedRoute from './components/ProtectedRoute';
import Blog from './components/Blog';
import Favorite from './components/Favorite';

const router = createBrowserRouter([{
    path:'/',
    element: <App/>,
    children:[
        {
        index: true,
        element: <Home/>
    },
    {
        element: <ProtectedRoute><About/></ProtectedRoute>,
        path: 'about'
    },
    {
        path:'posts',
        element: <ProtectedRoute><Posts/></ProtectedRoute>,
        action: async ({request})=> {
            let data = null;
            
            try{
                const response = await fetch('https://reqbin.com/echo/put/json',{
                    method:'PUT',
                    body: await request.formData()
                });
                const resp = await response.json();
                if(resp.success) { 
                    data = 'Succesfully submitted'
                } else {
                    throw Error('Not submitted');
                }
            } catch(error){
                console.log(error)
            }
            return data;
        }
    },
    {
        element: <ProtectedRoute><Blog/></ProtectedRoute>,
        path: 'blog'
    },
    {
        element: <ProtectedRoute><Favorite/></ProtectedRoute>,
        path: 'favorite'
    }
]
}]);

export default router;