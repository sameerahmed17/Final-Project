import  { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../../store/postSlice/postSlice";
import { toast } from "react-toastify";
import useProfilePage from "../../profile-details/profile-sections/useProfilePage";


const usePostSection = () => {
  const { avatar, } = useProfilePage()

    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
  
    const [open, setOpen] = useState(false);
    const [newPostContent, setNewPostContent] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const [image, setImage] = useState(null);
  
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
      setOpen(false);
      setNewPostContent("");
      setImage(null);
      setImagePreview(null);
    };
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result); 
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handlePost = () => {
      if (newPostContent.trim() === "") return;
    
      const newPost = {
        id: Date.now(),
        name: "Sameer Ahmed",
        role: "Front-End Web Developer | React.js | Next.js | Redux",
        content: newPostContent,
        avatar: avatar,
        image: image || null,
      };
    
      dispatch(addPost(newPost));
    
      // ✅ Show Success Toast Notification
      toast.success("Post added successfully!", {
        position: "top-right",
        autoClose: 2000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    
      handleClose();
    };
    
  

  return (
    {
        handleOpen, posts, setImagePreview, handleClose, setNewPostContent, newPostContent,  handleImageChange, imagePreview, handlePost, open
    }
  )
}

export default usePostSection
