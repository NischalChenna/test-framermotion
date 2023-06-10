import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Grid, Typography, Box } from "@mui/material";
import ExperienceCard from "./ExperienceCard";
import CategoryExperiencesData from "../Home/constants/category_experiences.json";
// import { height } from "@mui/system";

const Model = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const y = useMotionValue(0);
  const opacity = useTransform(y, [-window.innerHeight, 0], [0, 1]);
  const translateY = useTransform(
    y,
    [0, window.innerHeight],
    [0, window.innerHeight]
  );

  const modelDivRef = useRef<HTMLDivElement>(null);

  // const containerRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isDragging && isOpen && modelDivRef.current) {
      modelDivRef.current.style.height = "auto";
    } else if (!isDragging && isOpen && modelDivRef.current) {
      modelDivRef.current.style.height = "100%";
    }
    // else if (isDragging && !isOpen && modelDivRef.current) {
    //   modelDivRef.current.style.height = "auto";
    // }
  }, [isDragging, isOpen]);

  const handleDrag = (
    _: any,
    info: { velocity: { y: any }; offset: { y: number } }
  ) => {
    const velocity = info.velocity.y;
    const isSwipeUp = velocity < 0; // Check if the swipe is upward
    if (!isDragging && velocity > 500 && !isSwipeUp) {
      setIsDragging(true);
    }
    y.set(info.offset.y);
  };

  const handleDragEnd = (_: any, info: { offset: { y: number } }) => {
    setIsDragging(false);
    if (info.offset.y > 250) {
      handleClose();
    } else {
      y.set(0);
      if (!isOpen && modelDivRef.current) {
        modelDivRef.current.style.height = "12vh"; // Set the initial height here
      }
    }
  };

  const handleDragUp = (_: any, info: { velocity: { y: any } }) => {
    const velocity = info.velocity.y;
    const isSwipeUp = velocity < 0;

    if (!isDragging && velocity < 300 && isSwipeUp) {
      setIsDragging(true);
      const interval = setInterval(() => {
        if (!isDragging && modelDivRef.current) {
          const height = parseFloat(modelDivRef.current.style.height) || 12;
          const newHeight = height + 1;
          const translateYValue = translateY.get();
          modelDivRef.current.style.height = `${newHeight}vh`;
          y.set(translateYValue + 1);
        }
      }, 10);

      const stopIncreasingHeight = () => {
        clearInterval(interval);
      };

      window.addEventListener("mouseup", stopIncreasingHeight);
      window.addEventListener("touchend", stopIncreasingHeight);
    }
  };

  // Rest of the code...

  const handleDragEndToOpen = (_: any, info: { offset: { y: number } }) => {
    setIsDragging(false);
    console.log(info.offset.y);
    if (info.offset.y < -50) {
      handleOpen();
      y.set(0);
    }
  };

  return (
    <>
      <motion.div
        className="background"
        style={{
          opacity: opacity,
          backgroundColor: "#47A992",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: isOpen ? "none" : "initial",
          zIndex: isOpen ? 0 : 1,
        }}
      >
        <h1 style={{ color: "#333", textAlign: "center", padding: "20px" }}>
          Background Content
        </h1>
      </motion.div>
      <motion.div
        className="model motion-draggable"
        ref={modelDivRef}
        style={{
          transform: `translateY(${translateY}px)`,
          backgroundColor: "#fff",
          position: "fixed",
          top: isOpen ? 0 : "auto",
          bottom: isOpen ? "auto" : 0,
          left: 0,
          width: "100%",
          height: isOpen ? "100%" : "12vh", // Adjust the initial height value here
          pointerEvents: isOpen ? "initial" : "auto",
          zIndex: 2,
          // overflowY: "scroll",
          // display: !isOpen ? "flex" : "",
          justifyContent: !isOpen ? "center" : "",
        }}
        drag={"y"}
        dragConstraints={{ top: 0, bottom: 0 }}
        // dragElastic={0.8}
        onDrag={isOpen ? handleDrag : handleDragUp}
        onDragEnd={isOpen ? handleDragEnd : handleDragEndToOpen}
      >
        <>
          {!isOpen ? (
            <Box
              sx={{
                width: "50px",
                height: "4px",
                backgroundColor: "black",
                margin: "10px auto",
                cursor: "pointer",
                zIndex: 3,
              }}
            ></Box>
          ) : (
            <></>
          )}
          <Box
            sx={
              !isOpen
                ? {
                    display: "flex",
                    gap: 1,
                    justifyContent: "center",
                  }
                : {
                    display: "flex",
                    gap: 1,
                    mt: 5,
                    ml: 6,
                    mr: 5,
                    // justifyContent: "center",
                  }
            }
          >
            <Typography variant="h6">Showing</Typography>
            <Typography
              variant="h6"
              color={"secondary"}
              sx={{ fontWeight: "bold" }}
            >
              {CategoryExperiencesData.length}
            </Typography>
            <Typography variant="h6">Results</Typography>
          </Box>
          <div style={{ height: "100%", overflowY: "scroll" }}>
            <Grid container spacing={4} sx={{ padding: 5, marginBottom: 10 }}>
              {CategoryExperiencesData.map((card) => (
                <Grid item lg={4} md={6} xs={12} key={card.id}>
                  <ExperienceCard {...card} />
                </Grid>
              ))}
            </Grid>
          </div>
        </>
      </motion.div>
      {/* )} */}
    </>
  );
};

export default Model;
