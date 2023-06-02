import { Box, CardMedia } from "@mui/material";
import { useRef } from "react";
import Slider from "react-slick";
import { CategoryExperiencesSliderSettings } from "../constants/experienceCardSliderSettings";

interface ExperienceCardSliderProps {
  umegoAppImages: string[];
}

const ExperienceCardSlider = (props: ExperienceCardSliderProps) => {
  const sliderRef = useRef<Slider>({} as Slider);

  return (
    <>
      <Slider {...CategoryExperiencesSliderSettings} ref={sliderRef}>
        {props.umegoAppImages.map((data) => {
          return (
            <Box key={`TopModelImage-${12}`}>
              <CardMedia
                component="img"
                height="300"
                width="100%"
                image={data}
                alt="Paella dish"
              />
            </Box>
          );
        })}
      </Slider>
    </>
  );
};

export default ExperienceCardSlider;
