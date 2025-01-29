import React from "react";
import { Card, Typography, List, ListItem, Link, Box } from "@mui/material";
import { List as ListIcon, Bookmark, Article, Edit } from "@mui/icons-material";

const JobDetailsLeftPage = () => {
  return (
   <>
    <Card className="rounded shadow" style={{ maxWidth: 300 }}>
      <List>
        <ListItem button className="mt-2">
          <ListIcon fontSize="small" />
          <Typography className="ms-3">Preferences</Typography>
        </ListItem>
        <ListItem button className="my-2">
          <Bookmark fontSize="small" />
          <Typography className="ms-3">My jobs</Typography>
        </ListItem>
        <ListItem button>
          <Article fontSize="small" />
          <Typography className="ms-3">Interview prep</Typography>
        </ListItem>
      </List>
      <hr />
      <ListItem button>
        <Edit fontSize="small" />
        <Typography className="ms-3">Post a free job</Typography>
      </ListItem>      
    </Card>
    <Box className="text-center px-2 my-4">
    <Typography
      variant="body2"
      color="text.secondary"
      className="d-flex flex-wrap justify-content-center gap-2"
    >
      <Link underline="hover">About</Link>
      <Link underline="hover">Accessibility</Link>
      <Link underline="hover">Help Center</Link>
      <Link underline="hover">Privacy & Terms</Link>
      <Link underline="hover">Ad Choices</Link>
      <Link underline="hover">Advertising</Link>
      <Link underline="hover">Business Services</Link>
      <Link underline="hover">Get the LinkedIn app</Link>
      <Link underline="hover">More</Link>
    </Typography>
    <Typography variant="body2" className="mt-4 text-secondary">
      LinkedIn Corporation © 2025
    </Typography>
  </Box>
   </>
  );
};

export default JobDetailsLeftPage;
