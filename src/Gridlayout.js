import React, { useState } from "react";
import {Grid} from '@mui/material';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';

function Gridlayout(){
    
  const [expanded, setExpanded] = useState(false);
    return(
<Grid container spacing={2} style={{padding:'50px'}} >
            <Grid item xs={12} sm={6} lg={3}>
              <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                  <Typography>
                    Accordion
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Item
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <h1>Block</h1>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
            <h1>Block</h1>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
            <h1>Block</h1>
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
            lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
            lobortis eget.
          </Typography>
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
              <img src="https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png" style={{width:"50px"}} alt="Random"/>
              <Typography style={{paddingLeft:'10px'}}>Sachin Narula<br/>Developer</Typography>
              </div>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </div>
            <Grid item xs={12} sm={6} lg={12} style={{height:'50px'}}>
            </Grid>
            <Grid item>
              <Typography style={{textAlign:"center"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
              lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
              lobortis eget.
              </Typography>
            </Grid>
            </Grid>
            <Grid item xs={12} sm={8} lg={4}>
            <h1 style={{border: '2px solid black'}}>Block</h1>
            </Grid>
            <Grid item xs={12} sm={4} lg={2}>
            <h1 style={{border: '2px solid black'}}>Block</h1>
            </Grid>
            <Grid item xs={12} sm={4} lg={2}>
            <h1 style={{border: '2px solid black'}}>Block</h1>
            </Grid>
            <Grid item xs={12} sm={8} lg={4}>
            <h1 style={{border: '2px solid black'}}>Block</h1>
            </Grid>
        </Grid>
    )
}
export default Gridlayout;