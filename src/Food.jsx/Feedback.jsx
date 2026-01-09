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


import { Box, Typography } from "@mui/material";

function Feedback() {
  return (
    <Box sx={{ml:60,paddingTop:'50px'}}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "flex-start" },
          alignItems: "center",
          gap: { xs: 2, md: 2 },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "32px", md: "40px" },
            fontWeight: 800,
            fontFamily: "inherit",
            color: "#2a435d",
            transition: "0.4s",
            "&:hover": { color: "#0096c7", transform: "translateY(-4px)" },
          }}
        >
          Happy
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "32px", md: "40px" },
            fontWeight: 800,
            fontFamily: "inherit",
            color: "#006633",
            transition: "0.4s",
            "&:hover": { color: "#ff6f00", transform: "translateY(-4px)" },
          }}
        >
          Feedback
        </Typography>
      </Box>
    </Box>
  );
}

export default Feedback;
