// import { Box } from "@mui/material";
// import {Typography} from "@mui/material";
// import logo from './img/ChatGPT Image Dec 23, 2025, 07_04_39 PM.png'


// function Footer(){
//     return(

//         <Box sx={{display:'flex'}}> 
//             <Box sx={{paddingTop:'50px'}}>
//                 <Typography>
//                       <img style={{width:'200px'}} src={logo} alt="" />
//                 </Typography>
//                 <Typography sx={{marginLeft:'50px',fontFamily:'inherit',fontSize:'14px',fontWeight:'600'}}>
//                     570 8th Ave,New York, NY 10018 <br />
//                                     United States
//                 </Typography>
//                 <Typography sx={{marginLeft:'50px',color:'#006633',paddingTop:'10px',fontFamily:'inherit',fontSize:'16px',fontWeight:'500'}}>
//                     Google map
//                 </Typography>
//             </Box>
//             <Box sx={{marginLeft:'100px',paddingTop:'100px'}}>
//                 <Typography sx={{fontSize:'20px',fontFamily:'inherit',fontWeight:'700',color:'#2a435d'}}>
//                     Delivery Support
//                 </Typography>
//                 <Typography sx={{paddingTop:'10px',fontSize:'22px',fontFamily:'inherit',fontWeight:'700',color:'#006633'}}>
//                     <i style={{marginRight:'10px'}} class="fa-solid fa-phone"></i>123-59794069
//                 </Typography>
//                 <Typography sx={{paddingTop:'10px',fontFamily:'inherit',color:'#2a435d'}}>
//                     Monday – Friday: 9:00-20:00
//                 </Typography>
//                 <Typography sx={{paddingTop:'10px',fontFamily:'inherit',color:'#2a435d'}} >
//                     Saturday: 11:00 – 15:00
//                 </Typography>
//                 <Typography sx={{paddingTop:'10px',fontFamily:'inherit',color:'#006633',fontWeight:'600'}}>
//                     Email Address
//                 </Typography>
//                 <Typography sx={{paddingTop:'10px',fontFamily:'inherit',color:'#2a435d',fontWeight:'600'}}>
//                       <i style={{marginRight:'10px'}} class="fa-solid fa-envelope"></i>infofoodkahn@gmail.com
//                 </Typography>
//             </Box>
//             <Box sx={{marginLeft:'100px',paddingTop:'100px'}}>
//                 <Typography sx={{fontSize:'20px',fontWeight:'700',fontFamily:'inherit',color:'#2a435d'}}>
//                     Information
//                 </Typography>
//                 <Typography sx={{fontFamily:'inherit',color:'#2a435d',fontWeight:'500',paddingTop:'10px'}}>
//                     About Us
//                 </Typography>
//                   <Typography sx={{fontFamily:'inherit',color:'#2a435d',fontWeight:'500',paddingTop:'6px'}}>
//                  Delivery Information 
//                 </Typography>
//                   <Typography sx={{fontFamily:'inherit',color:'#2a435d',fontWeight:'500',paddingTop:'6px'}}>
//                   Privacy Policy 
//                 </Typography>
//                   <Typography sx={{fontFamily:'inherit',color:'#2a435d',fontWeight:'500',paddingTop:'6px'}}>
//                     Sales
//                 </Typography>
//                   <Typography sx={{fontFamily:'inherit',color:'#2a435d',fontWeight:'500',paddingTop:'6px'}}>
//                     Terms & Conditions
//                 </Typography>
//             </Box>

//             <Box sx={{marginLeft:'100px',paddingTop:'100px'}}>
//                 <Typography sx={{fontSize:'20px',fontWeight:'700',fontFamily:'inherit',color:'#2a435d'}}>
//                     Newsletter
//                 </Typography>
//                 <Box sx={{paddingTop:'20px'}}>
//                 <form onSubmit={(e) => e.preventDefault()}>
//   <input
//     type="email"
//     placeholder="Enter your email"
//     required
//   />
//   <button type="submit">
//     <i className="fas fa-paper-plane"></i>
//   </button>
// </form>
// </Box>

//                     <Box sx={{paddingTop:'20px'}}>
//                         <Typography sx={{textAlign:'center',fontWeight:'600',borderRadius:'10px',color:'white',fontFamily:'inherit',border:'1px solid',padding:'10px',width:'120px',bgcolor:'#006633'}}>
//                             Subscribe
//                         </Typography>
//                     </Box>
//             </Box>
//         </Box>

//     );
// }


// export default Footer;



import { Box, Typography } from "@mui/material";
import logo from "./img/ChatGPT Image Dec 23, 2025, 07_04_39 PM.png";

function Footer() {

  const socialIcon = {
    width: 48,
    height: 48,
    borderRadius: "50%", 
    border: "2px solid #006633",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#006633",
    fontSize: "18px",
    cursor: "pointer",
    transition: "all 0.45s ease",
    flexShrink: 0, 
    "&:hover": {
      backgroundColor: "#006633",
      color: "#fff",
      transform: "rotate(360deg) scale(1.2)",
      boxShadow: "0 0 20px rgba(0,102,51,0.7)",
    },
  };

  return (
    <Box>
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        px: { xs: 2, md: 8 },
        py: 6,
      }}
    >
      {/* LEFT SECTION */}
      <Box sx={{ width: { xs: "100%", md: "22%" } }}>
        <img style={{ width: "200px" }} src={logo} alt="" />

        <Typography sx={{ ml: "50px", mt: 1, fontSize: "12px", fontWeight: 600 }}>
          570 8th Ave, New York, NY 10018 <br /> United States
        </Typography>

        <Typography sx={{ ml: "50px", mt: 1, color: "#006633" }}>
          Google map
        </Typography>

        {/* 🔥 SOCIAL ICONS — ALWAYS ONE LINE */}
        <Box
          sx={{
            display: "flex",
            gap: 1.5,
            mt: 3,
            ml: "50px",
            flexWrap: "nowrap", // ✅ ek j line
            overflow: "hidden",
          }}
        >
          <Box sx={socialIcon}><i className="fa-brands fa-facebook-f" /></Box>
          <Box sx={socialIcon}><i className="fa-brands fa-instagram" /></Box>
          <Box sx={socialIcon}><i className="fa-brands fa-twitter" /></Box>
        </Box>
      </Box>

      {/* DELIVERY */}
      <Box sx={{paddingTop:'50px', width: { xs: "100%", md: "22%" }, mt: { xs: 4, md: 0 } }}>
        <Typography sx={{ fontSize: 20, fontWeight: 700, color: "#2a435d" }}>
          Delivery Support
        </Typography>

        <Typography sx={{paddingTop:'30px', mt: 1, fontSize: 22, fontWeight: 700, color: "#006633" }}>
          <i className="fa-solid fa-phone" /> 123-59794069
        </Typography>

        <Typography sx={{ mt: 1 }}>Monday – Friday: 9:00-20:00</Typography>
        <Typography sx={{ mt: 1 }}>Saturday: 11:00 – 15:00</Typography>

        <Typography sx={{ mt: 1, color: "#006633", fontWeight: 600 }}>
          Email Address
        </Typography>

        <Typography sx={{ mt: 1, fontWeight: 600 }}>
          <i className="fa-solid fa-envelope" /> infofoodkahn@gmail.com
        </Typography>
      </Box>

      {/* INFO */}
      <Box sx={{paddingTop:'50px', width: { xs: "100%", md: "18%" }, mt: { xs: 4, md: 0 } }}>
        <Typography sx={{ fontSize: 20, fontWeight: 700 }}>
          Information
        </Typography>

        {["About Us", "Delivery Information", "Privacy Policy", "Sales", "Terms & Conditions"].map((item) => (
          <Typography
            key={item}
            sx={{
              mt: 1,
              cursor: "pointer",
              transition: "0.3s",
              "&:hover": { color: "#006633", pl: 1 },
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>

      {/* NEWSLETTER */}
      <Box sx={{ width: { xs: "100%", md: "22%" }, mt: { xs: 4, md: 0 } }}>
        <Typography sx={{ fontSize: 20, fontWeight: 700 ,paddingTop:'50px'}}>
          Newsletter
        </Typography>

        <form onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>

        <Typography
          sx={{
            mt: 2,
            width: 120,
            textAlign: "center",
            bgcolor: "#006633",
            color: "#fff",
            py: 1,
            borderRadius: 2,
            cursor: "pointer",
            transition: "0.3s",
            "&:hover": { transform: "scale(1.08)" },
          }}
        >
          Subscribe
        </Typography>
      </Box>
    </Box>

    <Box
      sx={{
        px: { xs: 2, md: 6 },
        py: 3,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: { xs: 2, md: 0 },
      }}
    >
      {/* LEFT TEXT */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "center", md: "flex-start" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "inherit",
            fontSize: { xs: "14px", md: "18px" },
            fontWeight: 700,
          }}
        >
          Copyright © 2021
        </Typography>

        <Typography
          sx={{
            ml: 1,
            fontSize: { xs: "14px", md: "18px" },
            fontFamily: "inherit",
            fontWeight: 700,
            color: "#006633",
          }}
        >
          Frosty Drinks
        </Typography>
      </Box>

      {/* RIGHT IMAGE */}
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" },
        }}
      >
        <img
          src="https://html.imjol.com/khadyo/khadyo/assets/images/img/payment2.png"
          alt="payment"
          style={{
            width: "380px",
            maxWidth: "100%",
          }}
        />
      </Box>
    </Box>
          </Box>

  );
}

export default Footer;
