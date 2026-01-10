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



import { Box, Typography, Button } from "@mui/material";

function Softdrink() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        flexWrap: "wrap",
        alignItems: "flex-start",
        justifyContent: "space-between",
        px: { xs: 2, md: 10 },
        py: { xs: 6, md: 12 },
        gap: { xs: 4, md: 0 },
      }}
    >
      {/* LEFT SIDE */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "flex-start",
          gap: { xs: 4, md: 6 },
          width: { xs: "100%", md: "60%" },
        }}
      >
        {/* FIRST BOX */}
        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <img
            src="https://html.imjol.com/khadyo/khadyo/assets/images/img/hticon1.png"
            alt=""
            style={{ width: "80px", marginBottom: "10px" }}
          />
          <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" }, color: "orange", gap: 0.5 }}>
            {[...Array(5)].map((_, idx) => (
              <i key={idx} className="fa-solid fa-star"></i>
            ))}
          </Box>
          <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, fontWeight: 700, mt: 1 }}>
            5 Star Rating
          </Typography>
          <Typography sx={{ fontSize: { xs: "14px", md: "16px" }, mt: 1 }}>
            Our All Drink Prodcut <br /> Kegs of the moment!
          </Typography>
          <Box sx={{ mt: 3 }}>
            <img
              src="https://html.imjol.com/khadyo/khadyo/assets/images/img/htimg2.jpg"
              alt=""
              style={{ width: "100%", maxWidth: "200px" }}
            />
          </Box>
        </Box>

        {/* SECOND BOX */}
        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <img
            src="https://html.imjol.com/khadyo/khadyo/assets/images/img/htimg1.jpg"
            alt=""
            style={{ width: "100%", maxWidth: "200px", marginBottom: "20px" }}
          />
          <Box>
            <Typography sx={{ fontSize: { xs: "28px", md: "32px" }, fontWeight: 700, color: "#006633" }}>
              25 Years+
            </Typography>
            <Typography sx={{ fontSize: { xs: "14px", md: "16px" }, fontWeight: 700, color: "#2a435d" }}>
              experience skills
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* RIGHT SIDE */}
      <Box sx={{ width: { xs: "100%", md: "38%" }, mt: { xs: 6, md: 0 } }}>
        <Typography sx={{ fontSize: '36px', fontWeight: 900, color: "#2a435d" }}>
          Softdrink Help Your <br /> Harmoneuous & Relation
        </Typography>
        <Typography sx={{ fontSize: { xs: "28px", md: "40px" }, fontWeight: 900, color: "#006633" }}>
          Health
        </Typography>
        <Typography sx={{ fontSize: { xs: "12px", md: "13px" }, mt: 1, color: "#2a435d" }}>
          Christmas is coming! Get your gifts sorted early, then you can sit back and enjoy some <br />
          festive beers for yourself!
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", mt: 4, gap: 2 }}>
          <img
            src="https://img.freepik.com/premium-photo/smiley-face-with-sunglasses-straw-front-glass-beer_1046684-41171.jpg?semt=ais_hybrid&w=740&q=80"
            alt=""
            style={{ width: "60px" }}
          />
          <Typography sx={{ fontSize: { xs: "16px", md: "22px" }, fontWeight: 800, color: "#2a435d" }}>
            They Who Drink Soft <br /> Will think Batter
          </Typography>
        </Box>

        <Typography sx={{ mt: 2, color: "#2a435d", fontWeight: 500, display: "flex", alignItems: "center", gap: 1 }}>
          <i className="fa-solid fa-microphone"></i> Washington Lrving
        </Typography>

        <Button
          sx={{
            mt: 4,
            bgcolor: "#006633",
            color: "white",
            borderRadius: 2,
            px: 4,
            py: 1.5,
            fontWeight: 500,
            "&:hover": { bgcolor: "#0096c7" },
          }}
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  );
}

export default Softdrink;
