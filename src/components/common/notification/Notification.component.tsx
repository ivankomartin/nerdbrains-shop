import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import ReportGmailerrorredRoundedIcon from "@mui/icons-material/ReportGmailerrorredRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const iconComponents = {
  success: CheckCircleOutlineOutlinedIcon,
  warning: WarningAmberRoundedIcon,
  error: ReportGmailerrorredRoundedIcon,
  info: InfoRoundedIcon,
};

type ENotificationType = "success" | "warning" | "error" | "info";

export const AppNotification = () => {
  const theme = useTheme();

  const notification = (
    text: string,
    type: ENotificationType,
    showIcon = true,
  ) => {
    const IconComponent = iconComponents[type];
    const { light, main, dark } = theme.palette[type];

    const toastOptions = {
      position: toast.POSITION.TOP_RIGHT,
      closeButton: (
        <CloseOutlinedIcon
          sx={{ position: "relative", top: 10, color: dark }}
        />
      ),
      progressStyle: { background: dark },
      style: { background: light },
    };

    toast(
      <Box display="flex" alignItems="center" color={dark}>
        {showIcon && <IconComponent sx={{ color: main }} />}
        <Box ml={2}>{text}</Box>
      </Box>,
      { ...toastOptions },
    );
  };

  return { notification };
};

export default AppNotification;
