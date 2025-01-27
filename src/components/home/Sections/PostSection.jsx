import React from "react";
import { Avatar, Box, Button, Card, TextField } from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import ArticleIcon from "@mui/icons-material/Article";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import Image1 from '../../assets/unnamed.jpg';
import Image2 from '../../assets/unnamed.jpg';
import Image3 from '../../assets/unnamed.jpg';
import Image4 from '../../assets/unnamed.jpg';
import Image5 from '../../assets/unnamed.jpg';
import Image6 from '../../assets/unnamed.jpg';
import Image7 from '../../assets/unnamed.jpg';
import Image8 from '../../assets/unnamed.jpg';
import Image9 from '../../assets/unnamed.jpg';
import Image10 from '../../assets/unnamed.jpg';
import ProfileLogo from "../../assets/unnamed.jpg"

const PostSection = () => {


    const posts = [
        {
          id: 1,
          name: "Abdul",
          role: "Software Developer in Training",
          content: "Alhamdulillah  Thrilled to share that I've been selected as a Senior Student in the xWave Friday Slot! Alhamdulillah  Thrilled to share that I've been selected as a Senior Student in the xWave Friday Slot!",
          avatar: "/path/to/user.jpg",
          image: Image1 ,
        },
        {
          id: 2,
          name: "Sameer",
          role: "Software Developer in Training",
          content: "Excited to begin my new journey in web development!",
          avatar: "/path/to/user.jpg",
          image: Image2 ,
        },
        {
          id: 3,
          name: "salar",
          role: "Software Developer in Training",
          content: "Learning React has been an amazing experience!",
          avatar: "/path/to/user.jpg",
          image: Image3 ,
        },
        {
          id: 4,
          name: "salar",
          role: "Software Developer in Training",
          content: "Learning React has been an amazing experience!",
          avatar: "/path/to/user.jpg",
          image: Image4 ,
        },
        {
          id: 5,
          name: "salar",
          role: "Software Developer in Training",
          content: "Learning React has been an amazing experience!",
          avatar: "/path/to/user.jpg",
          image: Image5 ,
        },
        {
          id: 6,
          name: "salar",
          role: "Software Developer in Training",
          content: "Learning React has been an amazing experience!",
          avatar: "/path/to/user.jpg",
          image: Image6 ,
        },
        {
          id: 7,
          name: "salar",
          role: "Software Developer in Training",
          content: "Learning React has been an amazing experience!",
          avatar: "/path/to/user.jpg",
          image: Image7 ,
        },
        {
          id: 8,
          name: "salar",
          role: "Software Developer in Training",
          content: "Learning React has been an amazing experience!",
          avatar: "/path/to/user.jpg",
          image: Image8 ,
        },
        {
          id: 9,
          name: "salar",
          role: "Software Developer in Training",
          content: "Learning React has been an amazing experience!",
          avatar: "/path/to/user.jpg",
          image: Image9 ,
        },
        {
          id: 10,
          name: "salar",
          role: "Software Developer in Training",
          content: "Learning React has been an amazing experience!",
          avatar: "/path/to/user.jpg",
          image: Image10 ,
        },
   
      ];


    return (
    <Box>
    <Box className="p-3 border-black rounded-2 d-flex flex-column gap-2 bg-white">
      <Box className="d-flex align-items-center gap-2">
        <Avatar src={ProfileLogo} alt="Sameer Ahmed" />
        <TextField fullWidth variant="outlined" placeholder="Start a post" sx={{
            borderRadius: 20,
            "& .MuiOutlinedInput-root": {
              borderRadius: 20,
            },}}
        />
      </Box>
      <Box className="d-flex flex-wrap justify-content-evenly">
        <Button color="black" startIcon={<VideoCallIcon sx={{ color: "green" }} />}>Video</Button>
        <Button color="black" startIcon={<PhotoCameraIcon sx={{ color: "blue" }} />}>Photo</Button>
        <Button color="black" startIcon={<ArticleIcon sx={{ color: "orange" }} />}> article</Button>
      </Box>
    </Box>
    <hr />
    {posts.map((post) => (
      <Card key={post.id} className="mb-3 p-3 rounded-3">
        <Box className="d-flex align-items-center">
          <Avatar src={post.avatar} alt="User" className="me-2" />
          <Box>
            <h6>{post.name}</h6>
            <p className="text-muted">{post.role}</p>
          </Box>
        </Box>
        <p className="mt-2">{post.content}</p>
        {post.image && <img src={post.image} alt="Post" className=" w-100 rounded-2" />}
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
        </Box>
      </Card>
    ))}
  </Box>
  )
}

export default PostSection