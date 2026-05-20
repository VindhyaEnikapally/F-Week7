import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import ProductsList from './components/ProductsList'

function App(){

  const routingObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children:[
        {
          path: "/",
          element: <Home />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "technologies",
          element: <Technologies />,
          children: [
            {
              path: "java",
              element: <Java />
            },
            {
              path: "nodejs",
              element: <Nodejs />
            },
            {
              path: "vue",
              element: <Vue />
            },
            {
              path:"",
              element:<Navigate to="java"/>
            }
          ]
        }
      ]
    }
  ])
  return <RouterProvider router={routingObj} />
}

export default App

