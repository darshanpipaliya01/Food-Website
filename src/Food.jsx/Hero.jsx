import { Box } from "@mui/material";
import {Typography} from "@mui/material";

function Hero(){
    return(

        <Box sx={{display:'flex'}}>
            <Box sx={{paddingTop:'30px',ml:5}}>
                <Box>
                <Typography sx={{fontSize:'90px',lineHeight:'100px',fontWeight:'700',fontFamily:'inherit',color:'#0096c7'}}>
                    Frosty Drinks
                </Typography>
                <Typography sx={{fontSize:'90px',lineHeight:'110px',fontWeight:'700',fontFamily:'cursive',color:'#353535'}}>
                    Stay Fresh
                </Typography>
                </Box>
                <Typography sx={{paddingTop:'40px',fontFamily:'inherit',fontWeight:'600',color:'#353535'}}>
                    For a natural energy drink a stewbarry smoothie,juicer then <br /> your taste smoothie,juicer then your tatse.
                </Typography>
                <Box sx={{paddingTop:'40px'}}>
                <Typography sx={{border:'1px solid',padding:'12px',width:'120px',fontFamily:'inherit',fontWeight:'500',textAlign:'center',color:'white',bgcolor:'#353535'}}>
                    Order Now
                </Typography>
                <Box sx={{ml:55}}>
                    <Typography sx={{fontFamily:'cursive',fontSize:'22px',fontWeight:'600',color:'#353535'}}>
                        Extra Juicy Flavour
                    </Typography>
                    <Typography>
                        <img style={{width:'220px'}} src="https://rosepng.com/wp-content/uploads/2025/01/real-fruit-juice-2.png" alt="" />
                    </Typography>
                </Box>
                </Box>
            </Box>

            <Box sx={{padding:'40px',paddingTop:'30px'}}>
                <Typography>
                    <img style={{width:'500px'}} src="https://png.pngtree.com/png-clipart/20250224/original/pngtree-a-vibrant--cold-drink-glasses-png-image_20509166.png" alt="" />
                </Typography>
            </Box>

        </Box>
        
    )
}

export default Hero;