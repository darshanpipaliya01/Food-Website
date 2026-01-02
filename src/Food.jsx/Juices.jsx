// import { Typography } from "@mui/material";
// import { Box } from "@mui/material";

// function Juices(){
//     return(

//         <Box sx={{display:'flex'}}>
//             <Box sx={{paddingTop:'100px',padding:'50px'}}>
//             <Typography>
//                 <img style={{width:'500px'}} src="https://img.freepik.com/premium-photo/plastic-fruit-juice-bottle-with-tropic-fruits-juice-splash-isolated-white-background_144356-8385.jpg" alt="" />
//             </Typography>
//             </Box>

//         <Box sx={{paddingTop:'100px',marginLeft:'50px'}}>
//             <Box>
//             <Typography sx={{color:'#2a435d',fontWeight:'900',fontFamily:'inherit',fontSize:'40px'}}>
//                 Best Ingredients Food
//             </Typography>
//             <Box sx={{display:'flex'}}>
//             <Typography sx={{color:'#2a435d',fontWeight:'900',lineHeight:'50px',fontFamily:'inherit',fontSize:'40px'}}>
//                 Juices
//             </Typography>
//             <Typography sx={{marginLeft:'10px',lineHeight:'50px',color:'#006633',fontWeight:'900',fontFamily:'inherit',fontSize:'40px'}}>
//                 On Right
//             </Typography>
//             </Box>
//             <Typography sx={{color:'#006633',fontWeight:'900',fontFamily:'inherit',fontSize:'40px'}}>
//                 Handmade
//             </Typography>
//             </Box>

//             <Box sx={{paddingTop:'40px',display:'flex'}}> 
//              <Box sx={{paddingTop:'50px',border:'1px solid #a1a0a0ff',padding:'12px',width:'180px'}}>
//             <Typography>
//                 <img src="https://html.imjol.com/khadyo/khadyo/assets/images/img/htshape3.png" alt="" />
//             </Typography>
//             <Typography sx={{color:'#2a435d',fontSize:'22px',fontFamily:'inherit',fontWeight:'700',paddingTop:'14px'}}>
//                 Quality Hops
//             </Typography>
//             <Typography sx={{color:'#2a435d',fontSize:'14px',fontWeight:'400',fontFamily:'inherit',paddingTop:'10px'}}>
//                  Lorem ipsum dolor sit amet <br />
//                  consectetur adipisicing elit.
//             </Typography>
//         </Box>

//          <Box sx={{paddingTop:'50px',border:'1px solid #a1a0a0ff',padding:'10px',width:'180px',marginLeft:'20px'}}>
//             <Typography>
//                 <img src="https://html.imjol.com/khadyo/khadyo/assets/images/img/htshape3.png" alt="" />
//             </Typography>
//             <Typography sx={{color:'#2a435d',fontSize:'22px',fontFamily:'inherit',fontWeight:'700',paddingTop:'14px'}}>
//                 Premium Malts
//             </Typography>
//             <Typography sx={{color:'#2a435d',fontSize:'14px',fontWeight:'400',fontFamily:'inherit',paddingTop:'10px'}}>
//                 Lorem ipsum dolor sit amet <br />
//                  consectetur adipisicing elit.
//             </Typography>
//         </Box>

//         </Box>
//         </Box>

//         </Box>

//     );
// }


// export default Juices; 


import { Box, Typography, Grid } from "@mui/material";

function Juices() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          paddingTop: { xs: "40px", md: "100px" },
          padding: { xs: "20px", md: "50px" },
          transition: "0.4s ease",
          "&:hover img": {
            transform: "scale(1.05)",
          },
        }}
      >
        <Typography>
          <img
            style={{
              width: "100%",
              maxWidth: "500px",
              transition: "0.4s ease",
            }}
            src="https://img.freepik.com/premium-photo/plastic-fruit-juice-bottle-with-tropic-fruits-juice-splash-isolated-white-background_144356-8385.jpg"
            alt=""
          />
        </Typography>
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          paddingTop: { xs: "20px", md: "100px" },
          marginLeft: { xs: "0px", md: "50px" },
        }}
      >
        {/* Headings */}
        <Box>
          <Typography
            sx={{
              color: "#2a435d",
              fontWeight: "900",
              fontFamily: "inherit",
              fontSize: { xs: "28px", md: "40px" },
            }}
          >
            Best Ingredients Food
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Typography
              sx={{
                color: "#2a435d",
                fontWeight: "900",
                lineHeight: "50px",
                fontFamily: "inherit",
                fontSize: { xs: "28px", md: "40px" },
              }}
            >
              Juices
            </Typography>
            <Typography
              sx={{
                marginLeft: "10px",
                lineHeight: "50px",
                color: "#006633",
                fontWeight: "900",
                fontFamily: "inherit",
                fontSize: { xs: "28px", md: "40px" },
              }}
            >
              On Right
            </Typography>
          </Box>

          <Typography
            sx={{
              color: "#006633",
              fontWeight: "900",
              fontFamily: "inherit",
              fontSize: { xs: "28px", md: "40px" },
            }}
          >
            Handmade
          </Typography>
        </Box>

        {/* Feature Boxes */}
        <Grid
          container
          spacing={2}
          sx={{ paddingTop: "40px" }}
        >
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                paddingTop: "50px",
                border: "1px solid #a1a0a0ff",
                padding: "12px",
                width: "180px",
                transition: "0.4s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 25px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Typography>
                <img
                  src="https://html.imjol.com/khadyo/khadyo/assets/images/img/htshape3.png"
                  alt=""
                />
              </Typography>
              <Typography
                sx={{
                  color: "#2a435d",
                  fontSize: "22px",
                  fontFamily: "inherit",
                  fontWeight: "700",
                  paddingTop: "14px",
                }}
              >
                Quality Hops
              </Typography>
              <Typography
                sx={{
                  color: "#2a435d",
                  fontSize: "14px",
                  fontWeight: "400",
                  fontFamily: "inherit",
                  paddingTop: "10px",
                }}
              >
                Lorem ipsum dolor sit amet <br />
                consectetur adipisicing elit.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                paddingTop: "50px",
                border: "1px solid #a1a0a0ff",
                padding: "10px",
                width: "180px",
                transition: "0.4s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 25px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Typography>
                <img
                  src="https://html.imjol.com/khadyo/khadyo/assets/images/img/htshape3.png"
                  alt=""
                />
              </Typography>
              <Typography
                sx={{
                  color: "#2a435d",
                  fontSize: "22px",
                  fontFamily: "inherit",
                  fontWeight: "700",
                  paddingTop: "14px",
                }}
              >
                Premium Malts
              </Typography>
              <Typography
                sx={{
                  color: "#2a435d",
                  fontSize: "14px",
                  fontWeight: "400",
                  fontFamily: "inherit",
                  paddingTop: "10px",
                }}
              >
                Lorem ipsum dolor sit amet <br />
                consectetur adipisicing elit.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Juices;
