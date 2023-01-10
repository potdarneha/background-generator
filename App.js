// import CategoryItem from '../category-item/category-item.component';
// import Directory from './components/directory/directory.component';

// import './categories.styles.css';
import { useEffect,lazt,Suspense, lazy } from "react";
import { useDispatch } from "react-redux";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import {Routes,Route} from 'react-router-dom';
  // import Navigation from './routes/navigation/navigation.component';
// import Authentication from './routes/authentication/authentication.component';
// import Shop from './routes/shop/shop.component'; 
// import Checkout from './routes/checkout/checkout.component';
import Spinner from "./components/spinner/spinner.component";
import { checkUserSession } from "./store/user/user.action";
// import Home from './routes/home/home.component';  

const Shop=lazy(()=> import('./routes/shop/shop.component'));

const Checkout=lazy(()=> import('./routes/checkout/checkout.component'));

const Navigation=lazy(()=> import('./routes/navigation/navigation.component'));

const Home=lazy(()=> import('./routes/home/home.component'));

const Authentication=lazy(()=>import('./routes/authentication/authentication.component'))


// const Shop=()=>{
//   return <h1>I am the shop page</h1>;
// }
const App = () => {
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
    // const unsubscribe = onAuthStateChangedListener((user) => {
    //   if (user) {
    //     createUserDocumentFromAuth(user);
    //   }
    //   dispatch(setCurrentUser(user));
    // });
    // return unsubscribe;
  }, []);
  return(
    <Suspense callback={<Spinner/>}>
    <Routes>
      <Route path='/' element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path='shop/*'element={<Shop/>} />
      <Route path='auth'element={<Authentication/>} />
      <Route path='checkout'element={<Checkout/>}/>
      </Route>
     </Routes>

    </Suspense>
  );
  
};
export default App;

  // const categories = [
  //   {
  //   id :1,
  //   title :' hats',
  //   imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
  //   },

  //   {
  //     id :2,
  //     title :' jackets',
  //     imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
  //   },

  //   {
  //       id :3,
  //       title :' sneakers',
  //       imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
  //   },

  //   {
  //         id :4,
  //         title :' womens', 
  //         imageUrl:'https://i.ibb.co/GCCdy8t/womens.png',
  //   },

  //   {
  //           id :5,
  //           title :' mens',
  //           imageUrl:'https://i.ibb.co/R70vBrQ/men.png',
  //   },
  // ];
  // return <Directory categories={categories}/>;

  
    // <div className="categories-container">
    //    {categories.map((category) => (
    //     <CategoryItem key={category.id} category={category}/>
    //   ))}
      {/* {categories.map(({title ,id,imageUrl}) => (
        <div key={id} className="category-container">
          <div className="background-image"
           style={{
             backgroundImage: `url(${imageUrl})`,
           }}
          />
        <div className="category-body-container">
          <h2>{title}</h2>
           <p>Shop Now</p>
        </div>
      </div> */}

      
      // </div>

    //  );



