import React from "react";
import { propertyReferralsInfo } from "constants/index";
import { Box, Stack, Typography } from "@pankod/refine-mui";

interface ProgressBarProps {
  title: string;
  percentage: number;
  color: string;
}
const ProgressBar = ({ title, percentage, color }: ProgressBarProps) => (
  <Box width="100%">
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography
        fontSize={15}
        fontWeight={500}
        color="#11142d"
        fontFamily="Manrope"
      >
        {title}
      </Typography>
      <Typography
        fontSize={15}
        fontWeight={500}
        color="#11142d"
        fontFamily="Manrope"
      >
        {percentage}%
      </Typography>
    </Stack>
    <Box
      mt={2}
      position="relative"
      width="100%"
      height="8px"
      borderRadius={1}
      bgcolor="#e4e8ef"
    >
      <Box
        width={`${percentage}%`}
        bgcolor={color}
        position="absolute"
        height="100%"
        borderRadius={1}
      />
    </Box>
  </Box>
);
const PropertyReferrals = () => {
  return (
    <Box
      p={4}
      bgcolor="#fcfcfc"
      id="chart"
      minWidth={490}
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography
        fontSize={18}
        fontWeight={600}
        color="#11142d"
        fontFamily="Manrope"
      >
        Property Referrals
      </Typography>
      <Stack my="20px" gap={4}>
        {propertyReferralsInfo.map((bar) => (
          <ProgressBar key={bar.title} {...bar} />
        ))}
      </Stack>
    </Box>
  );
};

export default PropertyReferrals;
