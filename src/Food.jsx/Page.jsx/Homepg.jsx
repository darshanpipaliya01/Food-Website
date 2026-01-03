import { Box, Typography, Button, Divider, Link, Stack } from "@mui/material";
 

const marqueeItems = [
  { type: "text", label: "RICH IN NUTRITION" },
  {
    type: "image",
    src: "https://faryita.wpengine.com/wp-content/uploads/2024/03/scroll-juice-img-01.png",
  },
  { type: "text", label: "NATURAL FLAVOR" },
  {
    type: "image",
    src: "https://faryita.wpengine.com/wp-content/uploads/2024/03/scroll-juice-img-02.png",
  },
  { type: "text", label: "FRESH FRUITS" },
  {
    type: "image",
    src: "https://faryita.wpengine.com/wp-content/uploads/2024/03/scroll-juice-img-03.png",
  },
  { type: "text", label: "THIRST SATISFIER" },
  {
    type: "image",
    src: "https://faryita.wpengine.com/wp-content/uploads/2024/03/scroll-juice-img-04.png",
  },
];

function Homepg(){
    return(

        <Box sx={{paddingTop:'100px'}}>
            <Box>
                <Typography sx={{fontSize:'26px',fontFamily:'fantasy',ml:62,paddingTop:'60px',color:'#ffc935'}}>
                    Perfect Party Partner
                </Typography>
                <Typography sx={{fontSize:'60px',fontFamily:'fantasy',ml:40,paddingTop:"20px",color:'#1E3234'}}>
                    Tastiest Fresh Fruit Juice
                </Typography>
                <Typography sx={{fontSize:'18px',textAlign:'center',paddingTop:'10px',color:'#1E3234'}}>
                    Aenean et turpis ipsum. Quisque consequat orci augue, at aliquam urna tempus a. <br /> Nulla luctus consequat odio, eget pulvinar libero elementumnec.
                </Typography>
                <Box sx={{paddingTop:'20px',ml:70}}>
                <Typography sx={{padding:'12px',width:'100px',textAlign:'center',borderRadius:'30px',fontFamily:'inherit',fontWeight:'500',bgcolor:'#ffc935'}}>
                    Know More
                </Typography>
                </Box>
                <Typography sx={{paddingTop:'100px'}}>
                    <img style={{width:'100%'}} src="https://www.clipartmax.com/png/full/252-2528383_fruits-hd-wallpapers-fruits-images-hd-png.png" alt="" />
                </Typography>
           
                <Box sx={{display:'flex'}}>
                <Box sx={{paddingTop:'60px',padding:'30px'}}>
                <Typography>
                    <img style={{width:'150px'}} src="https://faryita.wpengine.com/wp-content/uploads/2024/03/Mint-leaves-Img.png" alt="" />
                </Typography>
                <Typography sx={{paddingTop:'14px',fontSize:'42px',fontFamily:'fantasy'}}>
                    Juice Café with Smoothies <br /> and Fresh Fruits
                </Typography>
                <Typography sx={{paddingTop:'10px',fontFamily:'inherit',fontWeight:'400'}}>
                    Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. <br />  Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Congue eu <br /> consequat ac felis donec. Ante in nibh mauris cursus.
                </Typography>
                <Box sx={{display:'flex',paddingTop:'20px'}}>
                    <Box>
                    <Typography sx={{color:'#1e3234',fontSize:'20px',fontWeight:'600'}}>
                        Calories
                    </Typography>
                    <Typography sx={{fontSize:'32px',fontWeight:'600'}}>
                        20%
                    </Typography>
                    </Box>

                    <Box sx={{ml:4}}>
                    <Typography sx={{color:'#1e3234',fontSize:'20px',fontWeight:'600'}}>
                       Alcohol
                    </Typography>
                    <Typography sx={{fontSize:'32px',fontWeight:'600'}}>
                        0%
                    </Typography>
                    </Box>

                    <Box sx={{ml:4}}>
                    <Typography sx={{color:'#1e3234',fontSize:'20px',fontWeight:'600'}}>
                        Vitomines
                    </Typography>
                    <Typography sx={{fontSize:'32px',fontWeight:'600'}}>
                        99%
                    </Typography>
                    </Box>
                </Box>
                <Box sx={{paddingTop:'30px'}}>
                    <Typography sx={{padding:'10px',width:'100px',textAlign:'center',bgcolor:'#ffc935',borderRadius:'30px',fontFamily:'inherit',fontWeight:'500'}}>
                        Know More
                    </Typography>
                </Box>
                </Box>
                    
            <Box>
                <Typography>
                    <img style={{width:'600px'}} src="https://faryita.wpengine.com/wp-content/uploads/2024/03/juice-h1-filler-img-1.png" alt="" />
                </Typography>
            </Box>
            </Box>


             <Box
      sx={{
        overflow: "hidden",
        width: "100%",
        paddingTop:'100px',
        py: { xs: 4, md: 6 },
        bgcolor: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "max-content",
          animation: "marquee 18s linear infinite",
          "&:hover": {
            animationPlayState: "paused",
          },
        }}
      >
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              mx: { xs: 2, md: 4 },
            }}
          >
            {item.type === "text" ? (
              <Typography
                sx={{
                  fontSize: { xs: "22px", md: "18px" },
                  fontWeight: 700,
                  letterSpacing: "2px",
                  whiteSpace: "nowrap",
                }}
              >
                {item.label}
              </Typography>
            ) : (
              <Box
                component="img"
                src={item.src}
                alt=""
                sx={{
                  height: { xs: 120, md: 100 },
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            )}
          </Box>
        ))}
      </Box>

      {/* Keyframes */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </Box>       


    {/* ============= */}


    
            


        </Box>
        </Box>


    )
}

export default Homepg;