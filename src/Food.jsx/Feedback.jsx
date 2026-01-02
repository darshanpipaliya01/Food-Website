// import { Typography } from "@mui/material";
// import { Box } from "@mui/material";

// function Feedback(){
//     return(

//         <Box>
//             <Box sx={{display:'flex',paddingTop:'150px',marginLeft:'500px'}}>
//                 <Typography sx={{fontSize:'40px',fontWeight:'800',fontFamily:'inherit',color:'#2a435d'}}>
//                     Happy
//                 </Typography>
//                 <Typography sx={{fontSize:'40px',fontWeight:'800',fontFamily:'inherit',color:'#006633',marginLeft:'10px'}}>
//                     Feedback
//                 </Typography>
//             </Box>
//         </Box>

//     );
// }


// export default Feedback;



import React from "react";
import { Box, Grid, Typography, Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const TestimonialCard = () => {
  return (
    <Box sx={{display:'flex'}}>
    <Box
      sx={{
        position: "relative",
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: 6,
        },
        maxWidth: 500,
        mx: "auto",
        my: 2,
      }}
    >
      {/* Quote Icon */}
      <Box
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          fontSize: 32,
          color: "primary.main",
        }}
      >
        <i className="fas fa-quote-right"></i>
      </Box>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={10}>
          <Box>
            {/* Top Section: Image + Meta */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Avatar
                src="https://html.imjol.com/khadyo/khadyo/assets/images/img/htshape27.png"
                sx={{ width: 56, height: 56, mr: 2 }}
              />
              <Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography variant="h6">Robina Deo</Typography>
                  <Typography variant="body2" color="text.secondary">
                    CEO A4Tech Ltd.
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", mt: 0.5 }}>
                  {[...Array(5)].map((_, index) => (
                    <StarIcon
                      key={index}
                      sx={{ color: "#FFD700", fontSize: 18, mr: 0.5 }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>

            {/* Testimonial Text */}
            <Typography variant="body1" color="text.primary">
              Food Khan is a great Restaurant from the University of Texas at
              Austin. Has been researching the benefits of frequent testing and
              the feedback.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={2} sx={{ display: { xs: "none", md: "block" } }}>
        </Grid>
      </Grid>
    </Box>

         <Box
      sx={{
        position: "relative",
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: 6,
        },
        maxWidth: 500,
        mx: "auto",
        my: 2,
      }}
    >
      {/* Quote Icon */}
      <Box
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          fontSize: 32,
          color: "primary.main",
        }}
      >
        <i className="fas fa-quote-right"></i>
      </Box>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={10}>
          <Box>
            {/* Top Section: Image + Meta */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Avatar
                src="https://html.imjol.com/khadyo/khadyo/assets/images/img/htshape29.png"
                alt="Robina Deo"
                sx={{ width: 56, height: 56, mr: 2 }}
              />
              <Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography variant="h6">Robina Deo</Typography>
                  <Typography variant="body2" color="text.secondary">
                    CEO A4Tech Ltd.
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", mt: 0.5 }}>
                  {[...Array(5)].map((_, index) => (
                    <StarIcon
                      key={index}
                      sx={{ color: "#FFD700", fontSize: 18, mr: 0.5 }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>

            {/* Testimonial Text */}
            <Typography variant="body1" color="text.primary">
              Food Khan is a great Restaurant from the University of Texas at
              Austin. Has been researching the benefits of frequent testing and
              the feedback.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={2} sx={{ display: { xs: "none", md: "block" } }}>
        </Grid>
      </Grid>
    </Box>
    </Box>
    
  );
};

export default TestimonialCard;

