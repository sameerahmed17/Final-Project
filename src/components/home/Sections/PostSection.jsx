import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../../store/postSlice/postSlice";
import {
  Avatar, Box, Button, Card, TextField, Modal, Typography
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import ProfileLogo from "../../assets/unnamed.jpg";

const PostSection = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  const [open, setOpen] = useState(false);
  const [newPostContent, setNewPostContent] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

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
      avatar: ProfileLogo,
      image: image || null,
    };

    dispatch(addPost(newPost));
    handleClose();
  };

  return (
    <Box>
      <Box className="p-3 border-black rounded-2 d-flex flex-column gap-2 bg-white">
        <Box className="d-flex align-items-center gap-2">
          <Avatar src={ProfileLogo} alt="Sameer Ahmed" />
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Start a post"
            onClick={handleOpen}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 8 } }}
          />
        </Box>
      </Box>
      <hr />

      {posts.map((post) => (
        <Card key={post.id} className="mb-3  rounded-3">
          <Box className="d-flex align-items-center px-3">
            <Avatar src={post.avatar} alt={post.name} className="me-2" />
            <Box>
              <h6>{post.name}</h6>
              <p className="text-muted">{post.role}</p>
            </Box>
          </Box>
          <p className=" px-3">{post.content}</p>
          {post.image && <img src={post.image} alt="Post" className="w-100" />}
          <Box className="d-flex justify-content-between  p-3">
            <Button variant="text" startIcon={<ThumbUpIcon />} className="text-muted">Like</Button>
            <Button variant="text" startIcon={<CommentIcon />} className="text-muted">Comment</Button>
            <Button variant="text" startIcon={<ShareIcon />} className="text-muted">Share</Button>
          </Box>
        </Card>
      ))}

      {/* Modal for Post Creation */}
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
        <Box
          className="position-absolute top-50 start-50 translate-middle bg-white shadow-lg p-4 rounded"
          style={{ width: "90%", maxWidth: "800px", maxHeight: "90vh", overflowY: "auto" }}
        >
          <Typography id="modal-title" variant="h6">Create a Post</Typography>
          <TextField
            fullWidth
            multiline
            rows={5}
            placeholder="What do you want to talk about?"
            variant="outlined"
            className="mt-2"
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
          />
          
          <input type="file" accept="image/*" className="mt-3" onChange={handleImageChange} />
          {imagePreview && <img src={imagePreview} alt="Preview" className="w-100 mt-2 rounded-2" />}
          
          <Box className="d-flex justify-content-end mt-3">
            <Button variant="outlined" color="secondary" onClick={handleClose}>Cancel</Button>
            <Button variant="contained" color="primary" className="ms-3" onClick={handlePost}>Post</Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default PostSection;
