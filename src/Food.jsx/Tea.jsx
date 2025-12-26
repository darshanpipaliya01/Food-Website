import { Box } from "@mui/material";
import { Typography } from "@mui/material";


function Tea(){
    return(

        <Box sx={{display:'flex'}}>
        <Box sx={{padding:'100px',paddingTop:'80px'}}>
            <Typography sx={{color:'#2a435d',fontWeight:'900',fontFamily:'inherit',fontSize:'40px'}}>
                Brand Iced Green
            </Typography>
            <Box sx={{display:'flex'}}>
            <Typography sx={{color:'#2a435d',fontWeight:'900',lineHeight:'50px',fontFamily:'inherit',fontSize:'40px'}}>
                Tea Lemon
            </Typography>
            <Typography sx={{marginLeft:'10px',lineHeight:'50px',color:'#006633',fontWeight:'900',fontFamily:'inherit',fontSize:'40px'}}>
                Juice
            </Typography>
            </Box>
            <Typography sx={{color:'#006633',fontWeight:'900',fontFamily:'inherit',fontSize:'40px'}}>
                Food Included
            </Typography>
            <Typography sx={{paddingTop:'10px',fontFamily:'inherit',fontSize:'14px',fontWeight:'500',color:'#2a435d'}}>
               Christmas is coming! Get your gifts sorted early, then you can <br /> sit back and enjoy some
                                festive beers for yourself!
            </Typography>

            <Box sx={{display:'flex',paddingTop:'20px'}}>
                <Box>
                    <Typography sx={{fontSize:'18px',color:'#2a435d',fontFamily:'inherit',fontWeight:'700'}}>
                        Extra Juice
                    </Typography>
                    <Typography sx={{fontSize:'32px',fontFamily:'inherit',fontWeight:'900',color:'#006633'}}>
                        15%
                    </Typography>
                </Box>
                 <Box sx={{marginLeft:'30px'}}>
                    <Typography sx={{fontSize:'18px',color:'#2a435d',fontFamily:'inherit',fontWeight:'700'}}>
                        Alcohol
                    </Typography>
                    <Typography sx={{fontSize:'32px',fontFamily:'inherit',fontWeight:'900',color:'#006633'}}>
                        0%
                    </Typography>
                </Box>
                 <Box sx={{marginLeft:'30px'}}>
                    <Typography sx={{fontSize:'18px',color:'#2a435d',fontFamily:'inherit',fontWeight:'700'}}>
                        Vitamin A-Z
                    </Typography>
                    <Typography sx={{fontSize:'32px',fontFamily:'inherit',fontWeight:'900',color:'#006633'}}>
                        90%
                    </Typography>
                </Box>
            </Box>

            <Box sx={{paddingTop:'20px'}}>
                <Typography sx={{fontFamily:'inherit',fontWeight:'600',borderRadius:'10px',bgcolor:'#006633',padding:'10px',width:'100px',border:'1px solid',textAlign:'center',color:'white'}}>
                    Shop Now
                </Typography>
                </Box>
            </Box>


            <Box>
                <Typography>
                    
                </Typography>
            </Box>

            </Box>

    );
}


export default Tea;