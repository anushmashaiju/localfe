import './post.css'
import React, { useState } from 'react'
import { Favorite, MoreVert, ThumbUp } from '@mui/icons-material'
import { Users } from "../../dummyData";

function Post({ post }) {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };

    const [fav, setFav] = useState(post.fav);
    const [isFavorite, setIsFavorite] = useState(false);

    const favHandler = () => {
        setFav(isFavorite ? fav - 1 : fav + 1);
        setIsFavorite(!isFavorite);
    };

    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={Users.filter((u) => u.id === post?.id)[0].profilePicture} alt="" />
                        <span className="postUsername">{Users.filter((u) => u.id === post?.id)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.description}</span>
                    <img src={PF+post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <ThumbUp htmlColor="blue" className='likeIcon' onClick={likeHandler} />
                        <span className="postLikeCounter">{like}</span>
                        <Favorite htmlColor="red" className='favIcon' onClick={favHandler} />
                        <span className="postFavCounter">{fav}</span>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Post
