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


import { Box, Typography, Button, Stack } from "@mui/material";

function Tea() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" }, // mobile stacked, desktop row
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 3, md: 10 },
        py: { xs: 6, md: 12 },
        gap: { xs: 4, md: 0 },
      }}
    >
      {/* LEFT TEXT CONTENT */}
      <Box sx={{ width: { xs: "100%", md: "50%" } }}>
        <Typography
          sx={{
            fontSize: { xs: "28px", sm: "32px", md: "40px" },
            fontWeight: 900,
            fontFamily: "inherit",
            color: "#2a435d",
          }}
        >
          Brand Iced Green
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          sx={{ mt: 1, flexWrap: "wrap" }}
        >
          <Typography
            sx={{
              fontSize: { xs: "28px", sm: "32px", md: "40px" },
              fontWeight: 900,
              lineHeight: 1.2,
              fontFamily: "inherit",
              color: "#2a435d",
            }}
          >
            Tea Lemon
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "28px", sm: "32px", md: "40px" },
              fontWeight: 900,
              lineHeight: 1.2,
              fontFamily: "inherit",
              color: "#006633",
            }}
          >
            Juice
          </Typography>
        </Stack>

        <Typography
          sx={{
            fontSize: { xs: "28px", sm: "32px", md: "40px" },
            fontWeight: 900,
            fontFamily: "inherit",
            color: "#006633",
            mt: 1,
          }}
        >
          Food Included
        </Typography>

        <Typography
          sx={{
            mt: 2,
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: 500,
            fontFamily: "inherit",
            color: "#2a435d",
          }}
        >
          Christmas is coming! Get your gifts sorted early, then you can <br />
          sit back and enjoy some festive beers for yourself!
        </Typography>

        {/* STATS */}
        <Stack
          direction="row"
          spacing={{ xs: 2, md: 4 }}
          sx={{ mt: 3, flexWrap: "wrap" }}
        >
          {[
            { label: "Extra Juice", value: "15%" },
            { label: "Alcohol", value: "0%" },
            { label: "Vitamin A-Z", value: "90%" },
          ].map((item, idx) => (
            <Box key={idx}>
              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "18px" },
                  fontWeight: 700,
                  fontFamily: "inherit",
                  color: "#2a435d",
                }}
              >
                {item.label}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "24px", md: "32px" },
                  fontWeight: 900,
                  fontFamily: "inherit",
                  color: "#006633",
                }}
              >
                {item.value}
              </Typography>
            </Box>
          ))}
        </Stack>

        {/* BUTTON */}
        <Button
          sx={{
            mt: 3,
            bgcolor: "#006633",
            color: "#fff",
            fontWeight: 600,
            px: 4,
            py: 1.5,
            borderRadius: 2,
            "&:hover": { bgcolor: "#0096c7" },
          }}
        >
          Shop Now
        </Button>
      </Box>

      {/* RIGHT IMAGE */}
      <Box sx={{ width: { xs: "100%", md: "50%" }, textAlign: "center" }}>
        <img
          src="https://png.pngtree.com/png-clipart/20250111/original/pngtree-tropical-fruit-juice-with-splash-and-fresh-fruits-png-image_19080900.png"
          alt="Tea Juice"
          style={{
            width: "100%",
            maxWidth: "500px",
            transition: "0.4s",
          }}
        />
      </Box>
    </Box>
  );
}

export default Tea;
