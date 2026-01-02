// import { Box } from "@mui/material";
// import {Typography} from "@mui/material";

// function Hero(){
//     return(

//         <Box sx={{display:'flex'}}>
//             <Box sx={{paddingTop:'30px',ml:5}}>
//                 <Box>
//                 <Typography sx={{fontSize:'90px',lineHeight:'100px',fontWeight:'700',fontFamily:'inherit',color:'#0096c7'}}>
//                     Frosty Drinks
//                 </Typography>
//                 <Typography sx={{fontSize:'90px',lineHeight:'110px',fontWeight:'700',fontFamily:'cursive',color:'#353535'}}>
//                     Stay Fresh
//                 </Typography>
//                 </Box>
//                 <Typography sx={{paddingTop:'40px',fontFamily:'inherit',fontWeight:'600',color:'#353535'}}>
//                     For a natural energy drink a stewbarry smoothie,juicer then <br /> your taste smoothie,juicer then your tatse.
//                 </Typography>
//                 <Box sx={{paddingTop:'40px'}}>
//                 <Typography sx={{border:'1px solid',padding:'12px',width:'120px',fontFamily:'inherit',fontWeight:'500',textAlign:'center',color:'white',bgcolor:'#353535'}}>
//                     Order Now
//                 </Typography>
//                 <Box sx={{ml:55}}>
//                     <Typography sx={{fontFamily:'cursive',fontSize:'22px',fontWeight:'600',color:'#353535'}}>
//                         Extra Juicy Flavour
//                     </Typography>
//                     <Typography>
//                         <img style={{width:'220px'}} src="https://rosepng.com/wp-content/uploads/2025/01/real-fruit-juice-2.png" alt="" />
//                     </Typography>
//                 </Box>
//                 </Box>
//             </Box>

//             <Box sx={{padding:'40px',paddingTop:'30px'}}>
//                 <Typography>
//                     <img style={{width:'500px'}} src="https://i.pinimg.com/736x/4f/2d/7f/4f2d7fa947f9d9d1743e8f5ef7159327.jpg" alt="" />
//                 </Typography>
//             </Box>

//         </Box>
        
//     )
// }

// export default Hero;



// import { Box, Typography } from "@mui/material";

// function Hero() {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: { xs: "column", md: "row" },
//         alignItems: "center",
//       }}
//     >
//       {/* Left Content */}
//       <Box sx={{ paddingTop: { xs: "20px", md: "30px" }, ml: { xs: 0, md: 5 } }}>
//         <Box>
//           <Typography
//             sx={{
//               fontSize: { xs: "42px", md: "90px" },
//               lineHeight: { xs: "48px", md: "100px" },
//               fontWeight: "700",
//               fontFamily: "inherit",
//               color: "#0096c7",
//               transition: "0.4s ease",
//               "&:hover": { transform: "translateX(5px)" },
//             }}
//           >
//             Frosty Drinks
//           </Typography>

//           <Typography
//             sx={{
//               fontSize: { xs: "42px", md: "90px" },
//               lineHeight: { xs: "52px", md: "110px" },
//               fontWeight: "700",
//               fontFamily: "cursive",
//               color: "#353535",
//               transition: "0.4s ease",
//               "&:hover": { transform: "translateX(5px)" },
//             }}
//           >
//             Stay Fresh
//           </Typography>
//         </Box>

//         <Typography
//           sx={{
//             paddingTop: "40px",
//             fontFamily: "inherit",
//             fontWeight: "600",
//             color: "#353535",
//             fontSize: { xs: "13px", md: "16px" },
//           }}
//         >
//           For a natural energy drink a stewbarry smoothie,juicer then <br />
//           your taste smoothie,juicer then your tatse.
//         </Typography>

//         <Box sx={{ paddingTop: "40px" }}>
//           <Typography
//             sx={{
//               border: "1px solid",
//               padding: "12px",
//               width: "120px",
//               fontFamily: "inherit",
//               fontWeight: "500",
//               textAlign: "center",
//               color: "white",
//               bgcolor: "#353535",
//               cursor: "pointer",
//               transition: "0.4s ease",
//               "&:hover": {
//                 transform: "translateY(-5px)",
//                 boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
//               },
//             }}
//           >
//             Order Now
//           </Typography>

//           <Box
//             sx={{
//               ml: { xs: 0, md: 55 },
//               mt: { xs: 4, md: 0 },
//               textAlign: { xs: "center", md: "left" },
//             }}
//           >
//             <Typography
//               sx={{
//                 fontFamily: "cursive",
//                 fontSize: "20px",
//                 fontWeight: "600",
//                 color: "#353535",
//               }}
//             >
//               Extra Juicy Flavour
//             </Typography>

//             <Typography
//               sx={{
//                 transition: "0.4s ease",
//                 "&:hover img": { transform: "scale(1.05)" },
//               }}
//             >
//               <img
//                 style={{
//                   width: "220px",
//                   maxWidth: "100%",
//                   transition: "0.4s ease",
//                 }}
//                 src="https://rosepng.com/wp-content/uploads/2025/01/real-fruit-juice-2.png"
//                 alt=""
//               />
//             </Typography>
//           </Box>
//         </Box>
//       </Box>

//       {/* Right Image */}
//       <Box
//         sx={{
//           padding: "40px",
//           paddingTop: "30px",
//           transition: "0.4s ease",
//           "&:hover img": { transform: "scale(1.05)" },
//         }}
//       >
//         <Typography>
//           <img
//             style={{
//               width: "500px",
//               maxWidth: "100%",
//               transition: "0.4s ease",
//             }}
//             src="https://html.imjol.com/khadyo/khadyo/assets/images/img/h32.png"
//             alt=""
//           />
//         </Typography>
//       </Box>
//     </Box>
//   );
// }

// export default Hero;



import { Box, Typography } from "@mui/material";

function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, md: 6 },
        py: { xs: 4, md: 6 },
      }}
    >
      {/* LEFT CONTENT */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* HEADINGS */}
        <Typography
          sx={{
            fontSize: { xs: "36px", sm: "48px", md: "90px" },
            lineHeight: { xs: "42px", md: "95px" },
            fontWeight: 700,
            color: "#0096c7",
            transition: "0.4s",
            "&:hover": {
              transform: "translateX(6px)",
            },
          }}
        >
          Frosty Drinks
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "36px", sm: "48px", md: "90px" },
            lineHeight: { xs: "42px", md: "100px" },
            fontWeight: 700,
            fontFamily: "cursive",
            color: "#353535",
            transition: "0.4s",
            "&:hover": {
              transform: "translateX(6px)",
            },
          }}
        >
          Stay Fresh
        </Typography>

        {/* DESCRIPTION */}
        <Typography
          sx={{
            mt: 3,
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: 600,
            color: "#555",
          }}
        >
          For a natural energy drink a strawberry smoothie,
          <br />
          juicer then your taste.
        </Typography>

        {/* BUTTON + EXTRA */}
        <Box
          sx={{
            mt: 4,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 4,
          }}
        >
          {/* BUTTON */}
          <Box
            sx={{
              px: 4,
              py: 1.5,
              bgcolor: "#353535",
              color: "#fff",
              fontWeight: 600,
              borderRadius: "6px",
              cursor: "pointer",
              transition: "0.4s",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 14px 35px rgba(0,0,0,0.3)",
              },
            }}
          >
            Order Now
          </Box>

          {/* EXTRA FLAVOUR */}
          <Box
            sx={{
              marginLeft:'200px',
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "cursive",
                fontSize: "18px",
                fontWeight: 600,
                mb: 1,
              }}
            >
              Extra Juicy Flavour
            </Typography>

            <Box
              sx={{
                transition: "0.4s",
                "&:hover img": {
                  transform: "scale(1.08)",
                },
              }}
            >
              <img
                src="https://rosepng.com/wp-content/uploads/2025/01/real-fruit-juice-2.png"
                alt=""
                style={{
                  width: "200px",
                  maxWidth: "100%",
                  transition: "0.4s",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* RIGHT IMAGE */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          mb: { xs: 4, md: 0 },
          display: "flex",
          justifyContent: "center",
          transition: "0.4s",
          "&:hover img": {
            transform: "scale(1.07)",
          },
        }}
      >
        <img
          src="https://html.imjol.com/khadyo/khadyo/assets/images/img/h32.png"
          alt=""
          style={{
            width: "420px",
            maxWidth: "100%",
            transition: "0.4s",
          }}
        />
      </Box>
    </Box>
  );
}

export default Hero;
