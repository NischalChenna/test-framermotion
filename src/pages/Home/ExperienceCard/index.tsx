import { Box, Card, CardContent, Typography } from "@mui/material";
import ExperienceCardSlider from "../ExperienceCardSlider";
import StarIcon from "@mui/icons-material/Star";
import {
  StylesCardTitle,
  StylesDiscountPrice,
  StylesExperienceCard,
  StylesLocationContainer,
  StylesPriceContainer,
  StylesRatingContainer,
  StylesTitleContainer,
} from "../styles/CategoryExperienceStyles";
interface CardItemProps {
  image: string[];
  title: string;
  content: string;
  feature: string;
  currency: string;
  price: string;
  discount_price: string;
  discount: string;
  location?: string;
  startDate: string;
  endDate: string;
}

const ExperienceCard = ({
  image,
  title,
  //   feature,
  currency,
  price,
  //   discount_price,
  //   discount,
  location,
  startDate,
  endDate,
}: CardItemProps) => {
  return (
    <Card elevation={0} sx={StylesExperienceCard}>
      <div style={{ position: "relative" }}>
        <ExperienceCardSlider umegoAppImages={image}></ExperienceCardSlider>
        {/* <Typography component="span" sx={StylesDiscountText}>
          {discount} OFF
        </Typography>
        <Typography component="span" sx={StylesPackageText}>
          {feature}
        </Typography> */}
      </div>
      <CardContent>
        <Box sx={StylesTitleContainer}>
          <Box sx={StylesLocationContainer}>
            <Typography variant="h6" sx={StylesCardTitle}>
              {title},{" "}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
              }}
            >
              {location}
            </Typography>
            {/* <PlaceIcon /> */}
          </Box>
          <Box sx={StylesRatingContainer}>
            <StarIcon />
            <Typography variant="h6" sx={StylesCardTitle}>
              4.87
            </Typography>
          </Box>
        </Box>
        {/* <Box variant="h6" sx={StylesCardTitle}> */}
        <Typography
          variant="h6"
          sx={{ pb: 1, color: "GrayText", textAlign: "left" }}
        >
          Stay with Sagrario Coach - {"Hosting for 7 years"}
        </Typography>
        <Typography
          variant="h6"
          sx={{ pb: 1, color: "GrayText", textAlign: "left" }}
        >
          {startDate} - {endDate}
        </Typography>
        {/* </Box> */}
        <Box sx={StylesPriceContainer}>
          <Typography variant="h6" sx={StylesDiscountPrice}>
            {currency} {price}
          </Typography>
          <Typography variant="h6" sx={{ color: "GrayText" }}>
            night
          </Typography>
          {/* <Typography variant="h6" sx={StylesActualPrice}>
            {currency} {price}
          </Typography> */}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
