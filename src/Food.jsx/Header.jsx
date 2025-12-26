import { Box } from "@mui/material";
import {Typography} from "@mui/material";
import logo from './img/ChatGPT Image Dec 23, 2025, 07_04_39 PM.png'

function Header(){
    return(
        <Box sx={{display:'flex',paddingTop:'10px',padding:'10px'}}>
            <Box>
                <Typography>
                    <img style={{width:'150px'}} src={logo} alt="" />
                    {/* <img style={{width:'100px'}} src="https://t3.ftcdn.net/jpg/02/71/87/46/360_F_271874627_dHmQaKzmsnNjueIQEfbSoGaBBSiCKFYo.jpg" alt="" /> */}
                </Typography>
                </Box>
                <Box sx={{display:'flex',gap:'40px',paddingTop:'40px',ml:16}}>
                <Typography sx={{fontWeight:'700',fontFamily:'inherit'}}>
                    HOME <i class="fa-solid fa-angle-down"></i>
                </Typography>
                  <Typography sx={{fontWeight:'700',fontFamily:'inherit'}}>
                    ABOUT
                </Typography>
                 <Typography sx={{fontWeight:'700',fontFamily:'inherit'}}>
                    MENU
                </Typography>
                 <Typography sx={{fontWeight:'700',fontFamily:'inherit'}}>
                    BLOG <i class="fa-solid fa-angle-down"></i>
                </Typography>
                 <Typography sx={{fontWeight:'700',fontFamily:'inherit'}}>
                    PAGES <i class="fa-solid fa-angle-down"></i>
                </Typography>
                 <Typography sx={{fontWeight:'700',fontFamily:'inherit'}}>
                    CONTACT
                </Typography>
                </Box>

                <Box sx={{ml:16,display:'flex',paddingTop:'20px'}}>
                    <Typography sx={{paddingTop:'8px',fontSize:'30px',color:'#063'}}>
                       <i class="fa-brands fa-shopify"></i>
                    </Typography>
                    <Box sx={{ml:6,paddingTop:'8px'}}>
                        <Typography sx={{border:'1px solid',padding:'12px',borderRadius:'10px',bgcolor:'#063',color:'white',fontFamily:'inherit',fontWeight:'600'}}>
                            Membership
                        </Typography>
                    </Box>
                </Box>

            </Box>

    );
}

export default Header;




