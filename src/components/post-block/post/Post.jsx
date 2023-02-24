import {React, useState} from "react";
import './post.css';
import ButtonArrow from "../../UI/button-arrow/ButtonArrow";

const Post = (props) => {

    const [isActive, setActive] = useState(false);
    const ToggleClass = () => {
      setActive(!isActive); 
    };

    return (
        <div className="post" >
            <div className="PostContent">
                <div
                    className="header-post"
                    onClick={ToggleClass}
                >
                    <ButtonArrow status={isActive}/>
                    <h2>{props.post.title}</h2>
                </div>
                <div
                    className={isActive ? "post-body" : 'post-body-null'}
                >
                    <p>{props.post.body}</p>
                </div>

            </div>

        </div>
    )
}

export default Post;