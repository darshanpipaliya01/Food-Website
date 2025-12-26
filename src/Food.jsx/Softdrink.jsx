import { Box } from "@mui/material";
import {Typography} from "@mui/material";

function Softdrink(){
    return(

        <Box sx={{display:'flex',paddingTop:'100px'}}>
        <Box sx={{display:'flex'}}>
            <Box sx={{paddingTop:'10px'}}>
                <Typography sx={{marginLeft:'10px'}}>
                    <img style={{width:'250px'}} src="https://img.freepik.com/premium-vector/smiling-beer-mug-with-smiley-face-beer-mug_1023984-25455.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                </Typography>
                </Box>
                <Box sx={{paddingTop:'120px'}}>
                <Typography>
                    <img style={{width:'420px'}} src="https://png.pngtree.com/png-clipart/20250125/original/pngtree-man-holding-juice-glass-drinking-clipart-illustration-png-image_20199650.png" alt="" />
                </Typography>
                </Box>
                </Box>

            <Box>
                <Box sx={{paddingTop:'50px',marginLeft:'10px'}}>
                    <Typography sx={{fontSize:'40px',fontWeight:'900',fontFamily:'inherit',color:'#2a435d'}}>
                        Softdrink Help Your <br />
                            Harmoneuous & Relation
                    </Typography>
                   <Typography sx={{fontSize:'40px',fontWeight:'900',fontFamily:'inherit',color:'#006633'}}>
                        Health
                   </Typography>
                   <Typography sx={{fontSize:'13px',paddingTop:'10px',color:'#2a435d',fontFamily:'inherit',fontWeight:'500'}}>
                    Christmas is coming! Get your gifts sorted early, then you can sit back and enjoy some <br />
                            festive beers for yourself!
                   </Typography>


                    
                   <Box sx={{display:'flex',paddingTop:'40px'}}>
                    <Typography>
                        <img style={{width:'80px'}} src="https://img.freepik.com/premium-photo/smiley-face-with-sunglasses-straw-front-glass-beer_1046684-41171.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                    </Typography>
                    <Typography sx={{marginLeft:'20px',fontSize:'22px',paddingTop:'8px',fontWeight:'800',fontFamily:'inherit',color:'#2a435d'}}>
                        They Who Drink Soft
                                    Will think <br /> Batter
                    </Typography>
                   </Box>
                   <Typography sx={{paddingTop:'20px',marginLeft:'100px',fontFamily:'inherit',fontWeight:'500',color:'#2a435d'}}>
                         <i style={{marginRight:'10px'}} class="fa-solid fa-microphone"></i>Washington Lrving
                    </Typography>
                    </Box>

                     <Box sx={{paddingTop:'40px',marginLeft:'20px'}}>
                    <Typography sx={{border:'1px solid',borderRadius:'10px',color:'white',bgcolor:'#006633',padding:'10px',width:'130px',textAlign:'center',fontFamily:'inherit',fontWeight:'500'}}>
                        Shop Now
                    </Typography>
                </Box>

                 </Box>  
                </Box>
        
    )
}


export default Softdrink;