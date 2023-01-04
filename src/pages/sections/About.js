import { Box, Grid, Divider, Typography, Paper, Stack } from "@mui/material";

import React from "react";
import user from "../../assets/images/paris_crop.jpg";
import Highlight from "../../components/cards/Highlight";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SavingsIcon from '@mui/icons-material/Savings';
import WorkIcon from '@mui/icons-material/Work';
import { AnimatedHeader } from "../../components/headers/AnimatedHeader";
import { Window } from "../../components/cards/AnimatedPopCard";

export default function About() {


  return (
    <>
      <Box
      >
        <AnimatedHeader title={'ABOUT ME'} color={'#66FCF1'}></AnimatedHeader>    
        
        <Grid
          container
          alignItems="top"
          spacing={4}
          style={{ justifyContent: "center", marginTop:'1%' }}
        >
          <Grid  item xs={12} sm={12} md={12} lg={4} xl={3.5}>
            
          
            <Box
              component="img"
              src={user}
              style={{ borderRadius: 8 }}
              sx={{
                marginBottom:'30%',
                width: {
                  xs: "80%",
                  sm: "100%",
                  md: "70%",
                  lg: "10%",
                  xl: "100%",
                },
              }}
            />
           







          </Grid>
          
          
          
          <Grid container direction="column" item xs={12} sm={12} md={12} lg={8} xl={8.5}>
            <Grid item>
            <Grid container spacing={4} columns={15}>
              <Grid item xs={5} >
                
                <Highlight
                  title={"Data Scientist"}
                  duration={"3+ years"}
                  icon={<AnalyticsIcon style={{fontSize:40, color:'#9faebf'}}/>}
                />
              </Grid>

              <Grid item xs={5} >
                <Highlight
                  title={"Work Experience"}
                  duration={"6+ years"}
                  icon={<WorkIcon  style={{fontSize:40, color:'#9faebf'}}/>}
                />
              </Grid>
              <Grid item xs={5} >
                <Highlight
                  title={"Project Impact (Work)"}
                  duration={"300K USD"}
                  icon={<SavingsIcon  style={{fontSize:40,color:'#9faebf'}}/>}
                />
              </Grid>
            </Grid>
            </Grid>
            

            <Grid item>
            <Paper elevation={5} sx={{padding:5, background:'#2f3f52'}}>
              <p
                className="lead"
                style={{
                  color: "#FFFFFE",
                  textAlign: "justify",
                  fontSize:'1.5rem'
                  
                }}
              >
                Hi there! I have had
                the opportunity to work on a variety of data-driven projects
                across a range of industries, including operations, supply chain,
                all of which has created actionable insights, cost saving and
                increase in profit.
                <br></br>
                <br></br>
                In my current role as a data scientist at <strong >Moog</strong>, I have been
                responsible for developing and implementing machine learning
                models as well as building data products, pipelines and
                infrastructures. I am skilled in both the front-end and back-end
                aspects of data science.
                <br></br>
                <br></br>
                Outside of work, I love to travelling, do landscape photography,
                play video games, badminton or watch NBA.
              </p>
              </Paper>
              </Grid>

            
          </Grid>
          
          
        </Grid>

      </Box>
    </>
  );
}
