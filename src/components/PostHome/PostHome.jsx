import './PostHome.css'
import React, { useContext, useEffect, useState } from 'react'
import { MoreVert, ThumbUp } from '@mui/icons-material'
import axios from 'axios';
import { format } from "timeago.js"
import { AuthContext } from '../../context/AuthContext';
import { BASE_URL } from '../../constants/constants';

function Post({ post, postchange, setPostchange }) {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [editedDescription, setEditedDescription] = useState(post.description);
    const [editedImage, setEditedImage] = useState(post.image);
    const [editedLocation, setEditedLocation] = useState(post.location);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user: currentUser } = useContext(AuthContext)

    const isCurrentUserPost = post.userId === currentUser._id;

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id))

    }, [currentUser._id, post.likes]);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`${BASE_URL}/api/users/${post.userId}`)
            setUser(res.data)
        };
        fetchUser()
    }, [post.userId])

    const likeHandler = async () => {
        try {
            await axios.put(`${BASE_URL}/api/posts/${post._id}/like`, { userId: currentUser._id });
        } catch (err) {
    
        }
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };

    const deleteHandler = async () => {
        try {
            await axios.delete(`${BASE_URL}/api/posts/${post._id}`, { data: { userId: currentUser._id } });
            setPostchange(!postchange);
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };
    const editHandler = async () => {
        try {
            const formData = new FormData();
            formData.append("userId", currentUser._id);
            formData.append("description", editedDescription);
            formData.append("location", editedLocation); 

            if (editedImage instanceof File) {
                formData.append("image", editedImage);
            } else {
           
                formData.append("image", post.image);
            }
            const res = await axios.put(`${BASE_URL}/api/posts/${post._id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log("Server Response:", res);
            setPostchange(!postchange);
            setIsEditOpen(false);
        } catch (error) {
            console.error('Error editing post:', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
            }
        }
    };
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg"
                            src={user.profilePicture ? PF + user.profilePicture : PF + "dp/default-avatar-profile-icon-social-600nw-1677509740.webp"}
                            alt=""
                            onError={(e) => {
                                console.error("Image failed to load:", e.target.src)
                            }} />
                        <span className="postUsername">{user.userName}</span>
                        <span className='postLocation'>{post.location}</span>
                    </div>
                    <div className="postTopRight">

                        {isCurrentUserPost && (
                            <>
                                <MoreVert onClick={() => setIsDeleteOpen(!isDeleteOpen)} />
                                {isDeleteOpen && (
                                    <div className="deleteConfirmation">
                                        <button onClick={deleteHandler}>Delete</button>
                                        <button onClick={() => setIsEditOpen(true)}>Edit</button>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
                <div className="postCenter">
                    {isEditOpen ? (
                        <>
                            <label>Edit Text</label>
                            <textarea className='editTextArea' value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />
                            <label>Edit Location</label>
                            <input type="text" name="location" value={editedLocation} onChange={(e) => setEditedLocation(e.target.value)} />
                            <label>Edit Images</label>
                            <input type='file' id="file" accept='.png,.jpeg,.jpg' onChange={(e) => setEditedImage(e.target.files[0])} />
                        </>
                    ) : (
                        <div>
                            <span className='postText'>{editedDescription}</span>
                            <img src={`data:image/jpeg;base64,${isEditOpen ? editedImage : post.image}`} alt='' className='postImg' />
                        </div>
                    )}
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <ThumbUp htmlColor="blue" className='likeIcon' onClick={likeHandler} />
                        <span className="postLikeCounter">{like}</span>
                    </div>
                    <span className='postDate'>{format(post.postDate)}</span>
                    {isCurrentUserPost && isEditOpen && (
                       <div>
                       <button className='editButton' onClick={editHandler}>Save</button>
                       <button className='cancelButton' onClick={() => setIsEditOpen(false)}>Cancel</button>
                       </div>
                    )}
                    <span className="postDate">{new Date(post.postDate).toLocaleString()}</span>
                </div>
            </div>
        </div>
    )
}

export default Post
