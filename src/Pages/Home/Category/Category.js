import React from 'react';
import './Category.css'
import photo1 from '../../../images/category/photo-1.jpg'
import photo2 from '../../../images/category/photo-2.jpg'
import photo3 from '../../../images/category/photo-3.jpg'
import photo4 from '../../../images/category/photo-4.jpg'
import Categorys from '../Categorys/Categorys';

const Category = () => {
  const category = [
    {id: 1, img:photo1},
    {id: 2, img:photo2},
    {id: 3, img:photo3},
    {id: 4, img:photo4}
  ]
  return (
    <div id='category'>
      <h2 className='my-5 text-center services-title'>SHOP IN-STOCK BY CATEGORY</h2>
      <div className='category-container container'>
        {
         category.map(stoke => <Categorys
          key={stoke.id}
          stoke={stoke}
         ></Categorys>)
        }
        </div>
    </div>
  );
};

export default Category;