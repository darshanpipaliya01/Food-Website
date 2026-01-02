// import { Box } from "@mui/material";
// import { Typography } from "@mui/material";


// function Tea(){
//     return(

//         <Box sx={{display:'flex'}}>
//         <Box sx={{padding:'100px',paddingTop:'80px'}}>
//             <Typography sx={{color:'#2a435d',fontWeight:'900',fontFamily:'inherit',fontSize:'40px'}}>
//                 Brand Iced Green
//             </Typography>
//             <Box sx={{display:'flex'}}>
//             <Typography sx={{color:'#2a435d',fontWeight:'900',lineHeight:'50px',fontFamily:'inherit',fontSize:'40px'}}>
//                 Tea Lemon
//             </Typography>
//             <Typography sx={{marginLeft:'10px',lineHeight:'50px',color:'#006633',fontWeight:'900',fontFamily:'inherit',fontSize:'40px'}}>
//                 Juice
//             </Typography>
//             </Box>
//             <Typography sx={{color:'#006633',fontWeight:'900',fontFamily:'inherit',fontSize:'40px'}}>
//                 Food Included
//             </Typography>
//             <Typography sx={{paddingTop:'10px',fontFamily:'inherit',fontSize:'14px',fontWeight:'500',color:'#2a435d'}}>
//                Christmas is coming! Get your gifts sorted early, then you can <br /> sit back and enjoy some
//                                 festive beers for yourself!
//             </Typography>

//             <Box sx={{display:'flex',paddingTop:'20px'}}>
//                 <Box>
//                     <Typography sx={{fontSize:'18px',color:'#2a435d',fontFamily:'inherit',fontWeight:'700'}}>
//                         Extra Juice
//                     </Typography>
//                     <Typography sx={{fontSize:'32px',fontFamily:'inherit',fontWeight:'900',color:'#006633'}}>
//                         15%
//                     </Typography>
//                 </Box>
//                  <Box sx={{marginLeft:'30px'}}>
//                     <Typography sx={{fontSize:'18px',color:'#2a435d',fontFamily:'inherit',fontWeight:'700'}}>
//                         Alcohol
//                     </Typography>
//                     <Typography sx={{fontSize:'32px',fontFamily:'inherit',fontWeight:'900',color:'#006633'}}>
//                         0%
//                     </Typography>
//                 </Box>
//                  <Box sx={{marginLeft:'30px'}}>
//                     <Typography sx={{fontSize:'18px',color:'#2a435d',fontFamily:'inherit',fontWeight:'700'}}>
//                         Vitamin A-Z
//                     </Typography>
//                     <Typography sx={{fontSize:'32px',fontFamily:'inherit',fontWeight:'900',color:'#006633'}}>
//                         90%
//                     </Typography>
//                 </Box>
//             </Box>

//             <Box sx={{paddingTop:'20px'}}>
//                 <Typography sx={{fontFamily:'inherit',fontWeight:'600',borderRadius:'10px',bgcolor:'#006633',padding:'10px',width:'100px',border:'1px solid',textAlign:'center',color:'white'}}>
//                     Shop Now
//                 </Typography>
//                 </Box>
//             </Box>


//             <Box sx={{paddingTop:'50px',marginLeft:'100px'}}>
//                 <Typography>
//                     <img style={{width:'500px'}} src="https://png.pngtree.com/png-clipart/20250111/original/pngtree-tropical-fruit-juice-with-splash-and-fresh-fruits-png-image_19080900.png" alt="" />
//                 </Typography>
//             </Box>

//             </Box>

//     );
// }


// export default Tea;


import { Box, Typography } from "@mui/material";

function Tea() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        px: { xs: 2, md: 10 },
        py: { xs: 6, md: 10 },
        gap: { xs: 6, md: 10 },
      }}
    >
      {/* LEFT CONTENT */}
      <Box sx={{ flex: 1 }}>
        <Typography
          sx={{
            color: "#2a435d",
            fontWeight: 900,
            fontSize: { xs: "28px", md: "40px" },
          }}
        >
          Brand Iced Green
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <Typography
            sx={{
              color: "#2a435d",
              fontWeight: 900,
              fontSize: { xs: "28px", md: "40px" },
            }}
          >
            Tea Lemon
          </Typography>
          <Typography
            sx={{
              ml: 1,
              color: "#006633",
              fontWeight: 900,
              fontSize: { xs: "28px", md: "40px" },
            }}
          >
            Juice
          </Typography>
        </Box>

        <Typography
          sx={{
            color: "#006633",
            fontWeight: 900,
            fontSize: { xs: "28px", md: "40px" },
          }}
        >
          Food Included
        </Typography>

        <Typography
          sx={{
            mt: 2,
            fontSize: "14px",
            color: "#2a435d",
            maxWidth: 420,
          }}
        >
          Christmas is coming! Get your gifts sorted early, then you can sit back
          and enjoy some festive beers for yourself!
        </Typography>

        {/* STATS */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: 3, md: 4 },
            mt: 3,
            flexWrap: "wrap",
          }}
        >
          {[
            { title: "Extra Juice", value: "15%" },
            { title: "Alcohol", value: "0%" },
            { title: "Vitamin A-Z", value: "90%" },
          ].map((item, i) => (
            <Box key={i}>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#2a435d",
                  fontWeight: 700,
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "32px",
                  color: "#006633",
                  fontWeight: 900,
                }}
              >
                {item.value}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* BUTTON */}
        <Box sx={{ mt: 4 }}>
          <Typography
            sx={{
              width: 120,
              textAlign: "center",
              bgcolor: "#006633",
              color: "#fff",
              py: 1.2,
              borderRadius: "10px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#004d26",
                transform: "translateY(-4px)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              },
            }}
          >
            Shop Now
          </Typography>
        </Box>
      </Box>

      {/* RIGHT IMAGE */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 500,
            width: "100%",
            transition: "all 0.6s ease",
            "&:hover img": {
              transform: "scale(1.08) rotate(-2deg)",
            },
          }}
        >
          <img
            src="https://png.pngtree.com/png-clipart/20250111/original/pngtree-tropical-fruit-juice-with-splash-and-fresh-fruits-png-image_19080900.png"
            alt="Juice"
            style={{
              width: "100%",
              transition: "all 0.6s ease",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Tea;
