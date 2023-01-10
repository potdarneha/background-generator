// import SHOP_DATA from '../../shop-data.json'
// import { useContext } from "react";
// import { CategoriesContext } from "../../context/categories.context";
import { useEffect } from 'react';
import { Routes,Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { fetchCategoriesStart } from '../../store/categories/category.action';
// import { CategoriesProvider } from '../../context/categories.context';

// import './shop.styles.css';
const Shop=()=>{
  const dispatch=useDispatch();
  
  useEffect(()=>{
      dispatch(fetchCategoriesStart());
    },[]);

  
    return(
      
       <Routes>
        <Route index element={<CategoriesPreview/>}/>
        <Route path=":category" element={<Category/>}/>
    
    </Routes>
      );  
     

};
export default Shop;
