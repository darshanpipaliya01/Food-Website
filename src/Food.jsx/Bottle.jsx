// import { Typography } from "@mui/material";
// import { Box } from "@mui/material";

// function Bottle(){
//     return(

//         <Box>
//             <Box sx={{paddingTop:'100px'}}>
//             <Box sx={{display:'flex',marginLeft:'350px'}}>
//                 <Typography sx={{color:'#2a435d',fontSize:'38px',fontFamily:'inherit',fontWeight:'800'}}>
//                     Explore Our
//                 </Typography>
//                 <Typography sx={{color:'#063',marginLeft:'10px',fontSize:'38px',fontFamily:'inherit',fontWeight:'800'}}> 
//                     Bottles & Cans
//                 </Typography>
//             </Box>
            
//             <Box sx={{display:'flex',marginLeft:'50px'}}>
//             <Box sx={{paddingTop:'100px',marginLeft:'80px'}}>
//                  <Typography>
//                     <img style={{width:'200px'}} src="https://goodtimepizza.com.au/wp-content/uploads/2023/10/can_1.png" alt="" />
//                 </Typography>
//                 <Typography sx={{marginLeft:'40px',color:'#2a435d',fontSize:'24px',fontWeight:'800',fontFamily:'inherit'}}>
//                     Gunna Can
//                 </Typography>
//                 <Typography sx={{marginLeft:'40px',fontSize:'12px',paddingTop:'18px',fontFamily:'inherit',color:'#2a435d',fontWeight:'500'}}>
//                     It is a long established fact <br /> that a reader BBQ Chicken.
//                 </Typography>
//                 <Typography sx={{paddingTop:'12px',fontSize:'18px',color:'#2a435d',fontWeight:'700',fontFamily:'inherit',marginLeft:'30px'}}>
//                     price :$50.00
//                 </Typography>
//             </Box>


//             <Box sx={{paddingTop:'100px',marginLeft:'100px'}}>
//                 <Typography sx={{marginLeft:'20px'}}>
//                     <img style={{width:'220px'}} src="https://wallpapers.com/images/hd/assorted-soft-drink-cans-lineup-0fryp3gqusymp7nm.png" alt="" />
//                 </Typography>
//                 <Typography sx={{marginLeft:'6px',color:'#2a435d',fontSize:'24px',fontWeight:'800',fontFamily:'inherit'}}>
//                     Dr Pepper Can     
//                 </Typography>
//                 <Typography sx={{fontSize:'14px',paddingTop:'18px',fontFamily:'inherit',color:'#2a435d',fontWeight:'500'}}>
//                     It is a long established fact <br /> that a reader BBQ Chicken.
//                 </Typography>
//                 <Typography sx={{paddingTop:'12px',fontSize:'18px',color:'#2a435d',fontWeight:'700',fontFamily:'inherit',marginLeft:'30px'}}>
//                     price :$50.00
//                 </Typography>
//             </Box>


//             <Box sx={{paddingTop:'100px',marginLeft:'100px'}}>
//                 <Typography>
//                     <img style={{width:'300px'}} src="https://www.shutterstock.com/image-photo/los-angeles-usa-november-12-600nw-230138068.jpg" alt="" />
//                 </Typography>
//                 <Typography sx={{marginLeft:'20px',color:'#2a435d',fontSize:'24px',fontWeight:'800',fontFamily:'inherit'}}>
//                   Ocem Blue
//                 </Typography>
//                 <Typography sx={{fontSize:'14px',paddingTop:'18px',fontFamily:'inherit',color:'#2a435d',fontWeight:'500'}}>
//                     It is a long established fact <br /> that a reader BBQ Chicken.
//                 </Typography>
//                 <Typography sx={{paddingTop:'12px',fontSize:'18px',color:'#2a435d',fontWeight:'700',fontFamily:'inherit',marginLeft:'30px'}}>
//                     price :$50.00
//                 </Typography>
//             </Box>


//             <Box sx={{paddingTop:'80px',marginLeft:'100px'}}>
//                 <Typography>
//                     <img style={{width:'170px'}} src="https://d1j8usc275ufjv.cloudfront.net/flex-cheese/media/images/medium/66bd0b30b5735_46f2ea8428b039c601fb637b43b6b2bb.png?cache=2023-02-16-1-11" alt="" />
//                 </Typography>
//                 <Typography sx={{marginLeft:'10px',color:'#2a435d',fontSize:'24px',fontWeight:'800',fontFamily:'inherit'}}>
//                     Calyps Ocem
//                 </Typography>
//                 <Typography sx={{fontSize:'14px',paddingTop:'18px',fontFamily:'inherit',color:'#2a435d',fontWeight:'500'}}>
//                     It is a long established fact <br /> that a reader BBQ Chicken.
//                 </Typography>
//                 <Typography sx={{paddingTop:'12px',fontSize:'18px',color:'#2a435d',fontWeight:'700',fontFamily:'inherit',marginLeft:'30px'}}>
//                     price :$50.00
//                 </Typography>
//             </Box>
//             </Box>
//             </Box>

//         <Box sx={{paddingTop:'50px',marginLeft:'130px'}}>
//             <Typography sx={{borderRadius:'10px',textAlign:'center',bgcolor:'#006633',color:'white',border:'1px solid',fontFamily:'inherit',fontWeight:'600',width:'100px',padding:'10px'}}>
//                 See All Cans
//             </Typography>
//         </Box>


//         </Box>

//     )
// }

// export default Bottle;


import { Box, Grid, Typography, Card, CardContent, CardMedia, Button } from "@mui/material";

const bottles = [
  {
    title: "Gunna Can",
    img: "https://goodtimepizza.com.au/wp-content/uploads/2023/10/can_1.png",
  },
  {
    title: "Dr Pepper Can",
    img: "https://wallpapers.com/images/hd/assorted-soft-drink-cans-lineup-0fryp3gqusymp7nm.png",
  },
  {
    title: "Ocem Blue",
    img: "https://www.shutterstock.com/image-photo/los-angeles-usa-november-12-600nw-230138068.jpg",
  },
  {
    title: "Calyps Ocem",
    img: "https://d1j8usc275ufjv.cloudfront.net/flex-cheese/media/images/medium/66bd0b30b5735_46f2ea8428b039c601fb637b43b6b2bb.png",
  },
];

function Bottle() {
  return (
    <Box sx={{ py: { xs: 6, md: 12 }, px: { xs: 2, md: 10 } }}>
      {/* Heading */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 1,
          mb: 6,
        }}
      >
        <Typography
          sx={{
            color: "#2a435d",
            fontSize: { xs: 22, sm: 26, md: 38 },
            fontWeight: 800,
          }}
        >
          Explore Our
        </Typography>
        <Typography
          sx={{
            color: "#063",
            fontSize: { xs: 22, sm: 26, md: 38 },
            fontWeight: 800,
          }}
        >
          Bottles & Cans
        </Typography>
      </Box>

      {/* Cards */}
      <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
        {bottles.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                height: { xs: "auto", md: "400px" },
                width: { xs: "100%", sm: 220, md: 250 },
                textAlign: "center",
                borderRadius: 3,
                transition: "0.4s ease",
                "&:hover": {
                  transform: "translateY(-12px)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                },
                "&:hover img": {
                  transform: "scale(1.12)",
                },
              }}
            >
              <Box sx={{ pt: 4, overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  image={item.img}
                  alt={item.title}
                  sx={{
                    width: { xs: 140, sm: 160, md: 200 },
                    height: { xs: 140, sm: 180, md: 200 },
                    objectFit: "contain",
                    mx: "auto",
                    transition: "0.4s",
                  }}
                />
              </Box>

              <CardContent>
                <Typography
                  sx={{
                    color: "#2a435d",
                    fontSize: { xs: 20, md: 24 },
                    fontWeight: 800,
                    mt: 1,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: 12, md: 13 },
                    color: "#2a435d",
                    fontWeight: 500,
                    py: 2,
                  }}
                >
                  It is a long established fact <br />
                  that a reader BBQ Chicken.
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: 16, md: 18 },
                    color: "#2a435d",
                    fontWeight: 700,
                  }}
                >
                  price : $50.00
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Button */}
      <Box textAlign="center" mt={6}>
        <Button
          sx={{
            bgcolor: "#006633",
            color: "#fff",
            px: { xs: 3, md: 4 },
            py: 1.2,
            borderRadius: 2,
            fontWeight: 600,
            "&:hover": {
              bgcolor: "#004d26",
            },
          }}
        >
          See All Cans
        </Button>
      </Box>
    </Box>
  );
}

export default Bottle;
