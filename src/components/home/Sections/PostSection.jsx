import React from "react";
import { Avatar, Box, Button, Card, TextField } from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import ArticleIcon from "@mui/icons-material/Article";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import Image1 from '../../assets/wardah noor.jpeg';
import Image2 from '../../assets/ijaz liaqat.jpeg';
import Image3 from '../../assets/misbah shafi.jpeg';
import Image4 from '../../assets/syed ommer.jpeg';
import Image5 from '../../assets/noor ud din.jpeg';
import Image6 from '../../assets/sania ijaz.jpeg';
import Image7 from '../../assets/shazia.jpeg';
import Image8 from '../../assets/salar.jpeg';
import Image9 from '../../assets/abeera.jpeg';
import Image10 from '../../assets/mudassir.png';
import ProfileLogo from "../../assets/unnamed.jpg"
import Logo1 from "../../assets/wardah profile logo.jpeg"
import Logo2 from "../../assets/ijaz profile logo.jpeg"
import Logo3 from "../../assets/misbah profile logo.jpeg"
import Logo4 from "../../assets/syed ommer profile logo.jpeg"
import Logo5 from "../../assets/noor ud din profile logo.jpeg"
import Logo6 from "../../assets/sania porfile logo.jpeg"
import Logo7 from "../../assets/shazia profile logo.jpeg"
import Logo8 from "../../assets/salar profile logo.jpeg"
import Logo9 from "../../assets/abeera profile logo.jpeg"
import Logo10 from "../../assets/mudassir profile logo.jpeg"

const PostSection = () => {


  const posts = [
    {
      id: 1,
      name: "Wardah Noor",
      role: "Upskilling & Empowering youth via tech skills | LUMS'24 | Acumen Fellow'23",
      content: "Short Courses ARE BIGGEST SCAMS! We all want shortcuts. We all want to climb up that ladder fast. However, sustainable impact can’t come overnight. Short courses are good for learning. If you are struggling with a specific concept, a short course might be ideal for you. However, if you want to master a skill and earn a good income from it, short courses are not for you. You need to invest time to build a good portfolio. At xWave , we have been struggling with this demand. Students ask us to shorten course duration. But despite our best efforts, a skill like UX design, frontend development or even video editing requires a minimum of six months. We don’t want to compromise on quality. We expect students to spend considerable time in building three portfolio projects and 20+ short projects. Practice makes us perfect and practice demands time. What do you think?",
      avatar: Logo1,
      image: Image1,
    },
    {
      id: 2,
      name: "Ijaz Liaqat",
      role: "React/Next Js Developer | Building efficient and scalable web applications | Educator",
      content: "Bundle of thanks Consultancy Outfit for this wonderful Eid Gift.",
      avatar: Logo2,
      image: Image2,
    },
    {
      id: 3,
      name: "Misbah Shafi",
      role: "Lead Learning and Development | L&D Strategy | LUMS'23 | xWave | Looking for React.js Developers? Reach out to me.",
      content: "Munir Niazi said this about me, Hamesha Dair Kar Deta Hon. But here is an exciting update from xWave! - Our 10 Video Editing students graduated in August 2024 and immediately landed jobs in an agency run by our alumni. - 20 UX Design students graduated in November 2024, and most of them have already started earning through freelance projects or paid internships. - 30 Frontend web development students completed their course in December 2024 and most of them are doing paid internships, and another 40 are set to graduate this month. During their courses, our students completed at least 5 real-world projects. They are proactive, hardworking, and brilliant individuals, and it’s always a pleasure to see them grow. Some of our talented Frontend and UX Design graduates are now looking for remote hashtag#internships to kickstart their careers. If you come across opportunities or are hashtag#hiring for your company, please reach out. We would love to explore hashtag#collaboration possibilities. ",
      avatar: Logo3,
      image: Image3,
    },
    {
      id: 4,
      name: "Syed Ommer Amer",
      role: "Talent Transformation | Apprenticeships | EdTech",
      content: "Yesterday, I met hashtag#alumni of Institute of Emerging Careers at Islamabad. These are our students of our pioneer batches and I met them for the first ever time. It was heartening to learn about their careers and how hashtag#IEC transformed them in last three years of operation. One student mentioned about the network support he received to run and scale his startup whereas other provided candid feedback on the alumni he hired through IEC. We work closely with hashtag#employers and incorporate their feedback to improve the quality of the grads that we produce. So far, IEC graduated 500 students and we have placed 316 in the market. This has been possible because of the work done by Asia Kanwal. All the leads that I generate, she is the one who converts them and helps us move forward and achieve the KPIs. I met her after two years of working online. Life at IEC is exciting! Join our community by enrolling at www.iec.org.pk",
      avatar: Logo4,
      image: Image4,
    },
    {
      id: 5,
      name: "Noor Ud Din",
      role: "UIUx Designer & Project Manager.",
      content: "How to Start a hashtag#YouTube hashtag#Channel Using AI:  On November 1, 2024, I hashtag#organized a session titled How to Start a YouTube Channel Using AI? with the help of Asvad Sagheer Asad. This session brought together video editing students from hashtag#Faisalabad and students from the hashtag#Arifwala lab, managed by M Waqas Raza and Muhammad Muzamil. Additionally, students joined from Sindh and various cities across Pakistan. Can You Guess the Number of Students? In the session, students received a step-by-step guide on launching and managing a YouTube channel using AI tools, followed by a Q&A session. Many xWave students are already experienced, with some managing client channels as part of their work. After monetization, a channel can earn an average income of 30,000 to 40,000 PKR per month, depending on the topic. Regular work can help monetize a channel in about 5-6 months.Being camera-shy isn’t an issue—one can run a channel using “hashtag#cash cow” videos. If you're considering starting your own channel, feel free to hashtag#DM me to discuss a personalized plan. So, what are you waiting for?",
      avatar: Logo5,
      image: Image5,
    },
    {
      id: 6,
      name: "Sania Ijaz",
      role: "Building SEO optimized Websites using WordPress & Elementor",
      content: "As project managers, our passion knows no bounds. At xWave, we're on a mission to exceed expectations, and this picture captures the energy and determination that fuels our journey. Standing tall, united in purpose, and fueled by passion A picture that encapsulates the unwavering passion we bring to every project. - We are the driving force behind project success at xWave! Join us at xWave and witness the magic of exceptional project management!",
      avatar: Logo6,
      image: Image6,
    },
    {
      id: 7,
      name: "Shazia Gul",
      role: "English Instructor | 2D Animator | Illustrator",
      content: "It's been a while since I last posted on social media. Today, I want to share my happy moments with you. I've been teaching spoken English at xWave for a year now. Let me share my journey with you. I only completed my matriculation due to personal issues that made me drop out of school. But I still had a passion for learning. Then I met Bilal Chatha from Chicago, who encouraged me to keep learning. As I learned, I decided to teach others too. For the past year, I've been teaching students at xWave. Last month, I wanted to take a break and visit Kashmir, but I didn't want to leave my classes. That's what motivates me every day to keep learning and teaching. My passion for teaching and my students are my driving forces! Seeing them learn and grow pushes me to keep going, even when I don't feel like it. What's your driving force that pushes you every day, even when you don't want to work or take a break? Tell me in the comments below!",
      avatar: Logo7,
      image: Image7,
    },
    {
      id: 8,
      name: "Salar Ahmed",
      role: "Frontend Web Developer | HTML5 | CSS3 | Bootstrap | JavaScript | React.js",
      content: "I am overjoyed to share my achievement of completing three months with the Pakistan Youth Leadership Initiative (PYLI) and receiving my certificate. This journey has been one of immense learning, growth, and teamwork. A heartfelt thanks to the Sewa Development Trust Sindh for giving me this incredible opportunity to become a Climate Change Leader. This life-changing training has empowered me to take meaningful actions for climate change and has shaped me into a more responsible leader. I am deeply grateful for the chance to make a difference and contribute to such an important cause. Special thanks to our amazing facilitators, Mariam Manghi and Sir Adnan Ahmed , whose guidance made this experience so impactful. I’m also thankful to Sir Raheel Hayder Burdi , Sir Ahsan Bhand , and the entire PYLI team for their constant support and motivation. This day became even more special as I celebrated with my incredible teammates From receiving the certificate and cherishing these moments together, it was truly unforgettable.",
      avatar: Logo8,
      image: Image8,
    },
    {
      id: 9,
      name: "Abeera Khan",
      role: "Developing Solutions Scholar | MA Educational Leadership and Management | Educator | Professional Development Services",
      content: "Join us for an enlightening webinar hosted by the Jatan Foundation. 𝐀𝐛𝐨𝐮𝐭 𝐭𝐡𝐞 𝐒𝐩𝐞𝐚𝐤𝐞𝐫 & 𝐓𝐨𝐩𝐢𝐜: We are excited to welcome Miss Maha a seasoned Clinical Psychologist and dedicated mental health advocate, to our webinar, Behind Closed Doors: Strategies for Overcoming Silent Struggles & Seeking Help. With a focus on youth problems, Maha has shared her expertise at esteemed institutions like the University of Central Punjab and conducted impactful sessions at schools including Al Khidmat foundation, City School and Punjab University. Her passion for engaging with youth and her role as a social activist enrich her perspective on mental well-being. Join us for a transformative session where Miss Maha will share invaluable strategies and insights to empower individuals facing silent struggles. Don't miss this opportunity to gain expert guidance on overcoming challenges and seeking help. So join us for an enlightening session on: 🗓️ Date: 23rd October 🕒 Time: 8pm-9pm 📍 Venue: Google Meet",
      avatar: Logo9,
      image: Image9,
    },
    {
      id: 10,
      name: "sameer",
      role: "Front-End Web Developer | HTML | CSS | Bootstrap | javascript | React JS | Next JS | Redux",
      content: "Are you dreaming of a career switch but held back by fear of the unknown? We've got a story that will inspire and motivate you. Our latest article charts the journey of a Madrassa Teacher who retrained as a Frontend Developer - a testament to what resiliency, passion, and continuous learning can achieve in the face of adversity. This individual turned challenges into opportunities, using them as stepping stones on his path to a rewarding tech career. Why not take the leap? Embrace change. Seek growth. You could very well be the next success story we share. Interested in learning more about this remarkable journey? Click the link below for the full article.  For information on how IEC can help facilitate your career transformation, reach out to us at 0333-8800947 or ask@iec.org.pk. Your future is just a call or email away!",
      avatar: Logo10,
      image: Image10,
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
            },
          }}
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

export default PostSection