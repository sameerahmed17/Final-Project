import React from "react";
import { Avatar, Box, Button, Card, TextField } from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import ArticleIcon from "@mui/icons-material/Article";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import RepeatIcon from "@mui/icons-material/Repeat";
import Image1 from '../../assets/unnamed.jpg'

const PostSection = () => {


    const posts = [
        {
          id: 1,
          name: "Abdul",
          role: "Software Developer in Training",
          content: "Alhamdulillah  Thrilled to share that I've been selected as a Senior Student in the xWave Friday Slot!",
          avatar: "/path/to/user.jpg",
          image: Image1 ,
        },
        {
          id: 2,
          name: "Sameer",
          role: "Software Developer in Training",
          content: "Excited to begin my new journey in web development!",
          avatar: "/path/to/user.jpg",
          image: Image1 ,
        },
        {
          id: 3,
          name: "salar",
          role: "Software Developer in Training",
          content: "Learning React has been an amazing experience!",
          avatar: "/path/to/user.jpg",
          image: Image1 ,
        },
   
      ];


    return (
    <Box>
    <Box
      sx={{
        p: 3,
        border: "1px solid",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        backgroundColor: "white",
      }}
    >
      {/* Flex container for image and input */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Avatar src="/path/to/user.jpg" alt="User" />
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Start a post"
          sx={{
            borderRadius: 20,
            "& .MuiOutlinedInput-root": {
              borderRadius: 20,
            },
          }}
        />
      </Box>

      {/* Buttons for Video, Photo, and Article */}
      <Box className="d-flex flex-wrap justify-content-evenly">
        <Button color="black" startIcon={<VideoCallIcon style={{ color: "green" }} />}>Video</Button>
        <Button color="black" startIcon={<PhotoCameraIcon style={{ color: "blue" }} />}>Photo</Button>
        <Button color="black" startIcon={<ArticleIcon style={{ color: "orange" }} />}> article</Button>
      </Box>
    </Box>

    <hr />

    {posts.map((post) => (
      <Card key={post.id} className="mb-3 p-3">
        <div className="d-flex align-items-center">
          <Avatar src={post.avatar} alt="User" className="me-2" />
          <div>
            <h6>{post.name}</h6>
            <p className="text-muted">{post.role}</p>
          </div>
        </div>
        <p className="mt-3">{post.content}</p>
        {post.image && <img src={post.image} alt="Post" style={{ width: "100%", borderRadius: "10px" }} className="mt-3" />}
        <Box className="d-flex flex-wrap justify-content-between mt-2">
          <Button variant="text" startIcon={<ThumbUpIcon />} className="text-muted">
            Like
          </Button>
          <Button variant="text" startIcon={<CommentIcon />} className="text-muted">
            Comment
          </Button>
          <Button variant="text" startIcon={<ShareIcon />} className="text-muted">
            Share
          </Button>
          <Button variant="text" startIcon={<RepeatIcon />} className="text-muted">
            Repost
          </Button>
        </Box>
      </Card>
    ))}
  </Box>
  )
}

export default PostSection
