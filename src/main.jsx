
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import DashBoard from './components/Dashboard/DashBoard';
import BookDetails from './components/bookDetails/BookDetails';
import ListedBooks from './components/listedBooks/ListedBooks';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement : <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
         path : 'books/:bookId',
         element : <BookDetails/>,
         loader : () => fetch('./booksData.json')  // not an idal way to fetch data but for now it's ok
      },
      {
        path : 'listedBooks',
        element : <ListedBooks/>,
        loader : () => fetch('./booksData.json')  // not an idal way to fetch data but for now it's ok
      },
      {
        path : 'dashboard',
        element : <DashBoard/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} /> 
)
