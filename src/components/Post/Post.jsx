import './post.css'
import React, { useContext, useEffect, useState } from 'react'
import { Favorite, MoreVert, ThumbUp } from '@mui/icons-material'
import axios from 'axios';
import { format } from "timeago.js"
import { AuthContext } from '../../context/AuthContext';
//import { Users } from "../../dummyData";

function Post({ post }) {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [fav, setFav] = useState(post.fav.length)
    const [isFavorite, setIsFavorite] = useState(false);
    const [user, setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user: currentUser } = useContext(AuthContext)

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id))
    }, [currentUser._id, post.likes]);
    
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`users/${post.userId}`)
            setUser(res.data)
        };
        fetchUser()
    }, [post.userId])

    const likeHandler = () => {
        try {
            axios.put("/posts/" + post._id + "/like", { userId: currentUser._id })
        }
        catch (err) { }
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };

    const favHandler = () => {
        try {
            axios.put("/posts/" + post._id + "/like", { userId: currentUser._id })
        }
        catch (err) { }
        setFav(isFavorite ? fav - 1 : fav + 1);
        setIsFavorite(!isFavorite);
    };

    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg"
                            //src={Users.filter((u) => u.id === post?.id)[0].profilePicture}
                            src={user.profilePicture ? PF + user.profilePicture : PF + "dp/default-avatar-profile-icon-social-600nw-1677509740.webp"}
                            alt=""
                            onError={(e) => {
                                console.error("Image failed to load:", e.target.src)
                            }} />
                        {/*<span className="postUsername">{Users.filter((u) => u.id === post?.id)[0].username}</span>*/}
                        <span className="postUsername">{user.userName}</span>

                        {/* <span className="postDate">{post.date}</span> */}
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.description}</span>
                    <img src={PF + post.image} alt="" className="postImg"  />
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
