import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Typography, Grid, Box } from "@mui/material";
import ExperienceCard from "../ExperienceCard";
import CategoryExperiencesData from "../constants/category_experiences.json";

const BottomSheet: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const y = useMotionValue(0);
  const extraHeight = 200; // Adjust the extra height value as per your requirement
  const opacity = useTransform(y, [-window.innerHeight, 0], [0, 1]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDragEnd = (_: any, info: { offset: { y: number } }) => {
    setIsDragging(false);
    if (info.offset.y > 100) {
      handleClose();
    } else {
      y.set(0);
    }
  };

  const handleDrag = (
    _: any,
    info: { velocity: { y: any }; offset: { y: number } }
  ) => {
    const velocity = info.velocity.y;
    if (!isDragging && velocity > 500) {
      setIsDragging(true);
    }
    y.set(info.offset.y);
  };

  return (
    <div>
      <button onClick={handleOpen}>Open Bottom Sheet</button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: window.innerHeight }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: window.innerHeight }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "white",
              zIndex: 999,
              opacity: opacity,
              y: y,
              overflowY: "auto",
            }}
            drag={isOpen ? "y" : false}
            dragConstraints={{
              top: -extraHeight,
              bottom: 0,
            }}
            dragElastic={0.1}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
          >
            {/* Content of the bottom sheet */}
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
            <div style={{ height: "100%", overflowY: "scroll" }}>
              <Grid container spacing={4} sx={{ padding: 5 }}>
                {CategoryExperiencesData.map((card) => (
                  <Grid item lg={4} md={6} xs={12} key={card.id}>
                    <ExperienceCard {...card} />
                  </Grid>
                ))}
              </Grid>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BottomSheet;
