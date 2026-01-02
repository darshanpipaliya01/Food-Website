// import { Box } from "@mui/material";
// import {Typography} from "@mui/material";

// function Softdrink(){
//     return(

//         <Box sx={{display:'flex',paddingTop:'100px'}}>
//         <Box sx={{display:'flex',padding:'20px'}}>
//           <Box sx={{paddingLeft:'50px'}}>
//           <Typography>
//             <img src="https://html.imjol.com/khadyo/khadyo/assets/images/img/hticon1.png" alt="" />
//           </Typography>
//           <Box sx={{display:'flex',paddingTop:'10px',color:'orange'}}>
//             <Typography>
//                 <i class="fa-solid fa-star"></i>
//                 <i class="fa-solid fa-star"></i>
//                 <i class="fa-solid fa-star"></i>
//                 <i class="fa-solid fa-star"></i>
//                 <i class="fa-solid fa-star"></i>
//             </Typography>
//             </Box>
//           <Typography sx={{fontSize:"24px",fontFamily:'inherit',paddingTop:'10px',fontWeight:'700'}}>
//             5 Star Rating
//           </Typography>
//           <Typography sx={{fontFamily:'inherit',fontSize:'16px',paddingTop:'10px',fontWeight:'500'}}>
//           Our All Drink Prodcut <br /> Kegs of
//           the moment!
//           </Typography>
//            <Box sx={{paddingTop:'40px'}}> 
//           <Typography>
//             <img style={{width:'200px'}} src="https://html.imjol.com/khadyo/khadyo/assets/images/img/htimg2.jpg" alt="" />
//           </Typography>
//           </Box>
//           </Box>
//           <Box>
//             <Typography>
//               <img style={{width:'200px',marginLeft:'20px'}} src="https://html.imjol.com/khadyo/khadyo/assets/images/img/htimg1.jpg" alt="" />
//             </Typography>
//             <Box sx={{padding:'50px'}}>
//             <Typography sx={{fontSize:'32px',color:'#006633',fontFamily:'inherit',fontWeight:'700'}}>
//               25 Years+
//             </Typography>
//             <Typography sx={{fontSize:'16px',color:'#2a435d',fontFamily:'inherit',fontWeight:'700'}}>
//               experience skills
//             </Typography>
//             </Box>
//             </Box>
//         </Box>
       
//                  <Box sx={{paddingTop:'50px',marginLeft:'50px'}}>
//                     <Typography sx={{fontSize:'40px',fontWeight:'900',fontFamily:'inherit',color:'#2a435d'}}>
//                         Softdrink Help Your <br />
//                             Harmoneuous & Relation
//                     </Typography>
//                    <Typography sx={{fontSize:'40px',fontWeight:'900',fontFamily:'inherit',color:'#006633'}}>
//                         Health
//                    </Typography>
//                    <Typography sx={{fontSize:'13px',paddingTop:'10px',color:'#2a435d',fontFamily:'inherit',fontWeight:'500'}}>
//                     Christmas is coming! Get your gifts sorted early, then you can sit back and enjoy some <br />
//                             festive beers for yourself!
//                    </Typography>


                    
//                    <Box sx={{display:'flex',paddingTop:'40px'}}>
//                     <Typography>
//                         <img style={{width:'80px'}} src="https://img.freepik.com/premium-photo/smiley-face-with-sunglasses-straw-front-glass-beer_1046684-41171.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
//                     </Typography>
//                     <Typography sx={{marginLeft:'20px',fontSize:'22px',paddingTop:'8px',fontWeight:'800',fontFamily:'inherit',color:'#2a435d'}}>
//                         They Who Drink Soft
//                                     Will think <br /> Batter
//                     </Typography>
//                    </Box>
//                    <Typography sx={{paddingTop:'20px',marginLeft:'100px',fontFamily:'inherit',fontWeight:'500',color:'#2a435d'}}>
//                          <i style={{marginRight:'10px'}} class="fa-solid fa-microphone"></i>Washington Lrving
//                     </Typography>
//                      <Box sx={{paddingTop:'40px',marginLeft:'20px'}}>
//                     <Typography sx={{border:'1px solid',borderRadius:'10px',color:'white',bgcolor:'#006633',padding:'10px',width:'130px',textAlign:'center',fontFamily:'inherit',fontWeight:'500'}}>
//                         Shop Now
//                     </Typography>
//                 </Box> 
//                     </Box>
//                  </Box>  
                
        
//     )
// }


// export default Softdrink;



import { Box, Typography } from "@mui/material";

function Softdrink() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },
        py: { xs: 6, md: 10 },
        alignItems: "center",
      }}
    >
      {/* LEFT IMAGE CONTENT */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 4,
          alignItems: "center",
        }}
      >
        {/* LEFT CARD */}
        <Box
          sx={{
            p: 3,
            textAlign: "center",
            transition: "0.4s",
            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            },
          }}
        >
          <img
            src="https://html.imjol.com/khadyo/khadyo/assets/images/img/hticon1.png"
            alt=""
          />

          {/* STARS */}
          <Box
            sx={{
              mt: 1,
              color: "orange",
              transition: "0.3s",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <i className="fa-solid fa-star"></i>{" "}
            <i className="fa-solid fa-star"></i>{" "}
            <i className="fa-solid fa-star"></i>{" "}
            <i className="fa-solid fa-star"></i>{" "}
            <i className="fa-solid fa-star"></i>
          </Box>

          <Typography sx={{ fontSize: 22, fontWeight: 700, mt: 1 }}>
            5 Star Rating
          </Typography>

          <Typography sx={{ fontSize: 15, fontWeight: 500, mt: 1 }}>
            Our All Drink Product <br /> Kegs of the moment!
          </Typography>

          <Box
            sx={{
              mt: 4,
              "&:hover img": { transform: "scale(1.08)" },
            }}
          >
            <img
              src="https://html.imjol.com/khadyo/khadyo/assets/images/img/htimg2.jpg"
              alt=""
              style={{ width: "180px", transition: "0.4s" }}
            />
          </Box>
        </Box>

        {/* EXPERIENCE CARD */}
        <Box sx={{ textAlign: "center" }}>
          <Box
            sx={{
              "&:hover img": { transform: "scale(1.08)" },
            }}
          >
            <img
              src="https://html.imjol.com/khadyo/khadyo/assets/images/img/htimg1.jpg"
              alt=""
              style={{
                width: "180px",
                transition: "0.4s",
              }}
            />
          </Box>

          <Box sx={{ mt: 3 }}>
            <Typography
              sx={{
                fontSize: 30,
                fontWeight: 800,
                color: "#006633",
              }}
            >
              25 Years+
            </Typography>
            <Typography
              sx={{
                fontSize: 15,
                fontWeight: 700,
                color: "#2a435d",
              }}
            >
              experience skills
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* RIGHT CONTENT */}
      <Box sx={{ maxWidth: "520px" }}>
        <Typography
          sx={{
            fontSize: { xs: 28, md: 40 },
            fontWeight: 900,
            color: "#2a435d",
            transition: "0.4s",
            "&:hover": { transform: "translateX(6px)" },
          }}
        >
          Softdrink Help Your <br /> Harmoneuous & Relation
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 28, md: 40 },
            fontWeight: 900,
            color: "#006633",
          }}
        >
          Health
        </Typography>

        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 500,
            mt: 1,
            color: "#2a435d",
          }}
        >
          Christmas is coming! Get your gifts sorted early, then you can sit back
          and enjoy some festive beers for yourself!
        </Typography>

        {/* QUOTE */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 4,
            gap: 2,
          }}
        >
          <img
            src="https://img.freepik.com/premium-photo/smiley-face-with-sunglasses-straw-front-glass-beer_1046684-41171.jpg"
            alt=""
            style={{ width: "70px", borderRadius: "50%" }}
          />

          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 800,
              color: "#2a435d",
            }}
          >
            They Who Drink Soft <br /> Will think Better
          </Typography>
        </Box>

        <Typography
          sx={{
            mt: 2,
            ml: { xs: 0, md: 10 },
            fontWeight: 500,
            color: "#2a435d",
          }}
        >
          <i className="fa-solid fa-microphone"></i> Washington Irving
        </Typography>

        {/* BUTTON */}
        <Box
          sx={{
            mt: 4,
            width: "140px",
            bgcolor: "#006633",
            color: "#fff",
            py: 1.2,
            textAlign: "center",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: 600,
            transition: "0.4s",
            "&:hover": {
              transform: "translateY(-6px)",
              boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
            },
          }}
        >
          Shop Now
        </Box>
      </Box>
    </Box>
  );
}

export default Softdrink;
