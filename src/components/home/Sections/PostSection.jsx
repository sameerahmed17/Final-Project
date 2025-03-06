import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  TextField,
  Modal,
  Typography,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import ArticleIcon from "@mui/icons-material/Article";
import usePostSection from "./usePostSection";
import { ToastContainer } from "react-toastify";
import useProfilePage from "../../profile-details/profile-sections/useProfilePage";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const PostSection = () => {
  const {
    handleOpen,
    posts,
    handleClose,
    setNewPostContent,
    newPostContent,
    handleImageChange,
    imagePreview,
    handlePost,
    open,
  } = usePostSection();

  const { avatar } = useProfilePage();

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Box>
        <Box className="p-3 rounded-2 d-flex flex-column gap-2 bg-white">
          <Box className="d-flex align-items-center gap-2">
            <Avatar src={avatar} />
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Start a post"
              onClick={handleOpen}
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: 8 } }}
            />
          </Box>
          <Box className="d-flex flex-wrap justify-content-evenly">
            <Button
              color="black"
              startIcon={<VideoCallIcon style={{ color: "green" }} />}
            >
              Video
            </Button>
            <Button
              color="black"
              startIcon={<PhotoCameraIcon style={{ color: "blue" }} />}
            >
              Photo
            </Button>
            <Button
              color="black"
              startIcon={<ArticleIcon style={{ color: "orange" }} />}
            >
              Write article
            </Button>
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
            {post.image && (
              <img src={post.image} alt="Post" className="w-100" />
            )}
            <Box className="d-flex justify-content-between  p-3">
              <Button
                variant="text"
                startIcon={<ThumbUpIcon />}
                className="text-muted"
              >
                Like
              </Button>
              <Button
                variant="text"
                startIcon={<CommentIcon />}
                className="text-muted"
              >
                Comment
              </Button>
              <Button
                variant="text"
                startIcon={<ShareIcon />}
                className="text-muted"
              >
                Share
              </Button>
            </Box>
          </Card>
        ))}

        {/* Modal for Post Creation */}
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
          <Box
            className="position-absolute top-50 start-50 translate-middle bg-white shadow-lg p-4 rounded"
            style={{
              width: "90%",
              maxWidth: "800px",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            <Typography id="modal-title" variant="h6">
              Create a Post
            </Typography>
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
            <Box className="mt-3">
              <label htmlFor="imageUpload">
                <CameraAltIcon sx={{cursor: 'pointer',}} />
              </label>
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                className="d-none"
                onChange={handleImageChange}
              />
            </Box>

            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-100 mt-2 rounded-2"
              />
            )}

            <Box className="d-flex justify-content-end mt-3">
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="ms-3"
                onClick={handlePost}
              >
                Post
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default PostSection;
