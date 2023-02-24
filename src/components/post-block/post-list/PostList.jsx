import {React, useState} from "react";
import ButtonArrow from "../../UI/button-arrow/ButtonArrow";
import PostItem from "../post-item/PostItem";
import './PostList.css'

function PostList ({posts, }) {
  const [displayChildren, setDisplayChildren] = useState({});

  const filterListPostForDescription = () => {
    let list = [];
    let listSortElem = []

    posts.forEach((element) => list.push(element.description))
    const makeUniq = (arr) => [...new Set(arr)];
    list = makeUniq(list)
    list.map((elem) => {
     let thislistElem =[];
      posts.forEach((elemPost) =>{
         if (elem === elemPost.description) {
           thislistElem.push(elemPost)
         }
      })
      listSortElem.push(thislistElem)
    })
    return listSortElem; 
}


  return (
    <div>
      {filterListPostForDescription().map((item) => {
        return (
          <div key={item.description} className='block-post'>
            <div className="header-block">
            {item && (
              <button className={displayChildren[item[0].description]? 'button-arrow': 'button-arrow-active'}
                onClick={() => {
                  setDisplayChildren({
                    ...displayChildren,
                    [item[0].description]: !displayChildren[item[0].description],
                  });
                }}
              >
              </button>
            )}
            {item[0].description}
            </div>
            {displayChildren[item[0].description] ?  <PostItem posts={item}/>:''}
          </div>
        );
      })}
    </div>
  );
}
export default PostList;