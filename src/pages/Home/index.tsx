import React, { useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Grid, Typography, Box } from "@mui/material";
import ExperienceCard from "./ExperienceCard";
import CategoryExperiencesData from "../Home/constants/category_experiences.json";

const Model = () => {
  const [isOpen, setIsOpen] = useState(true);
  const y = useMotionValue(0);
  const opacity = useTransform(y, [-window.innerHeight, 0], [0, 1]);
  const translateY = useTransform(
    y,
    [0, window.innerHeight],
    [0, window.innerHeight]
  );

  const containerRef = useRef(null);
  const scrollY = useRef(0);

  const handleDrag = (event, info) => {
    const currentScrollY = containerRef.current?.scrollTop || 0;
    const isDraggingFromTop = currentScrollY === 0 && info.delta.y > 0;

    if (
      !containerRef.current ||
      !containerRef.current.contains(event.target) ||
      !isDraggingFromTop
    ) {
      // Check if the drag event is not within the container or not dragging from the top
      return;
    }

    y.set(info.point.y);
  };

  const handleDragEnd = (event, info) => {
    const dragThreshold = window.innerHeight / 3;

    if (info.point.y > dragThreshold || info.velocity.y > 500) {
      setIsOpen(false);
      y.set(window.innerHeight);
    } else {
      setIsOpen(true);
      y.set(0);
    }
  };

  const handleExpand = () => {
    setIsOpen(true);
    y.set(-window.innerHeight);
  };

  const handleScroll = () => {
    scrollY.current = containerRef.current?.scrollTop || 0;
  };

  const handleClick = () => {
    if (isOpen) {
      return;
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="backdrop"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 2,
          pointerEvents: isOpen ? "none" : "initial",
        }}
        onClick={handleExpand}
      />

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
          zIndex: 1,
        }}
      >
        <h1 style={{ color: "#333", textAlign: "center", padding: "20px" }}>
          Background Content
        </h1>
      </motion.div>

      <motion.div
        className="model"
        style={{
          transform: `translateY(${translateY}px)`,
          backgroundColor: "#fff",
          position: "fixed",
          top: isOpen ? 0 : "auto",
          bottom: isOpen ? "auto" : 0,
          left: 0,
          width: "100%",
          height: isOpen ? "100%" : "10vh",
          pointerEvents: isOpen ? "initial" : "none",
          zIndex: 2,
          overflowY: "scroll",
          display: !isOpen ? "flex" : "",
          justifyContent: !isOpen ? "center" : "",
        }}
        drag={isOpen ? "y" : false}
        dragConstraints={{ top: isOpen ? 0 : -window.innerHeight, bottom: 0 }}
        dragElastic={0.9}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        onClick={handleClick}
      >
        {!isOpen ? (
          <motion.div
            className="small-div"
            drag="y"
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
          >
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
            <Box sx={{ display: "flex", gap: 1 }}>
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
          </motion.div>
        ) : (
          <div
            ref={containerRef}
            style={{
              height: "100%",
              padding: "5px",
              boxSizing: "border-box",
            }}
            onScroll={handleScroll}
          >
            <Box sx={{ display: "flex", gap: 1, mt: 5, ml: 6, mr: 5 }}>
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
            <Grid container spacing={4} sx={{ padding: 5 }}>
              {CategoryExperiencesData.map((card) => (
                <Grid item lg={4} md={6} xs={12} key={card.id}>
                  <ExperienceCard {...card} />
                </Grid>
              ))}
            </Grid>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default Model;
