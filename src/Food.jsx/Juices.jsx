import { Typography } from "@mui/material";
import { Box } from "@mui/material";

function Juices(){
    return(

        <Box sx={{display:'flex'}}>
            <Box sx={{paddingTop:'100px',padding:'50px'}}>
            <Typography>
                <img style={{width:'500px'}} src="https://img.freepik.com/premium-photo/plastic-fruit-juice-bottle-with-tropic-fruits-juice-splash-isolated-white-background_144356-8385.jpg" alt="" />
            </Typography>
            </Box>

        <Box sx={{paddingTop:'100px',marginLeft:'50px'}}>
            <Box>
            <Typography sx={{color:'#2a435d',fontWeight:'900',fontFamily:'inherit',fontSize:'40px'}}>
                Best Ingredients Food
            </Typography>
            <Box sx={{display:'flex'}}>
            <Typography sx={{color:'#2a435d',fontWeight:'900',lineHeight:'50px',fontFamily:'inherit',fontSize:'40px'}}>
                Juices
            </Typography>
            <Typography sx={{marginLeft:'10px',lineHeight:'50px',color:'#006633',fontWeight:'900',fontFamily:'inherit',fontSize:'40px'}}>
                On Right
            </Typography>
            </Box>
            <Typography sx={{color:'#006633',fontWeight:'900',fontFamily:'inherit',fontSize:'40px'}}>
                Handmade
            </Typography>
            </Box>

            <Box sx={{paddingTop:'40px',display:'flex'}}> 
             <Box sx={{paddingTop:'50px',border:'1px solid #a1a0a0ff',padding:'12px',width:'180px'}}>
            <Typography>
                <img src="https://html.imjol.com/khadyo/khadyo/assets/images/img/htshape3.png" alt="" />
            </Typography>
            <Typography sx={{color:'#2a435d',fontSize:'22px',fontFamily:'inherit',fontWeight:'700',paddingTop:'14px'}}>
                Quality Hops
            </Typography>
            <Typography sx={{color:'#2a435d',fontSize:'14px',fontWeight:'400',fontFamily:'inherit',paddingTop:'10px'}}>
                 Lorem ipsum dolor sit amet <br />
                 consectetur adipisicing elit.
            </Typography>
        </Box>

         <Box sx={{paddingTop:'50px',border:'1px solid #a1a0a0ff',padding:'10px',width:'180px',marginLeft:'20px'}}>
            <Typography>
                <img src="https://html.imjol.com/khadyo/khadyo/assets/images/img/htshape3.png" alt="" />
            </Typography>
            <Typography sx={{color:'#2a435d',fontSize:'22px',fontFamily:'inherit',fontWeight:'700',paddingTop:'14px'}}>
                Premium Malts
            </Typography>
            <Typography sx={{color:'#2a435d',fontSize:'14px',fontWeight:'400',fontFamily:'inherit',paddingTop:'10px'}}>
                Lorem ipsum dolor sit amet <br />
                 consectetur adipisicing elit.
            </Typography>
        </Box>

        </Box>
        </Box>

        </Box>

    );
}


export default Juices; 