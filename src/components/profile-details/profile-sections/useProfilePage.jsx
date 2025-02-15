import  { useEffect, useState } from 'react'

const useProfilePage = () => {

        // Load stored images or use default
        const storedBanner = localStorage.getItem("bannerImage");
        const storedAvatar = localStorage.getItem("avatarImage");
    
        const [banner, setBanner] = useState(storedBanner || "default-banner.jpg");
        const [avatar, setAvatar] = useState(storedAvatar || "default-avatar.jpg");
    
        // Handle Banner Change
        const handleBannerChange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    const imageUrl = reader.result;
                    setBanner(imageUrl); // Update 
                    localStorage.setItem("bannerImage", imageUrl); 
                };
                reader.readAsDataURL(file);
            }
        };
    
        // Handle Avatar Change
        const handleAvatarChange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    const imageUrl = reader.result;
                    setAvatar(imageUrl); // Update 
                    localStorage.setItem("avatarImage", imageUrl); 
                };
                reader.readAsDataURL(file);
            }
        };

    const profileData = {
        name: "Sameer Ahmed",
        role: "Frontend Web Developer",
        skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js"],
        location: "Khairpur District, Sindh, Pakistan",
        portfolio: "My Portfolio",
        connections: "500+ connections",
    };

    const savedAbout = localStorage.getItem("aboutText") || "Write about yourself...";
    const [aboutText, setAboutText] = useState(savedAbout);
    const [isEditing, setIsEditing] = useState(false);

    // Save data whenever `aboutText` changes
    useEffect(() => {
        localStorage.setItem("aboutText", aboutText);
    }, [aboutText]); 


    const [tabValue, setTabValue] = useState(0);

  return (
    {
        profileData, setTabValue, tabValue, banner, avatar, handleBannerChange, handleAvatarChange, setAboutText, isEditing, aboutText, setIsEditing
    }
  )
}

export default useProfilePage
