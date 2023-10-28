import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "@mui/material/styles";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import ReportGmailerrorredRoundedIcon from "@mui/icons-material/ReportGmailerrorredRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export const CustomToast = () => {
  const theme = useTheme();

  const notification = (text: string, type: string) => {
    let icon = null;
    let color = null;

    switch (type) {
      case "success":
        icon = <CheckCircleOutlineOutlinedIcon color="error" />;
        color = theme.palette.success.main;
        break;
      case "warning":
        icon = <WarningAmberRoundedIcon />;
        color = theme.palette.warning.main;
        break;
      case "error":
        icon = <ReportGmailerrorredRoundedIcon />;
        color = theme.palette.error.main;
        break;
      case "info":
        icon = <InfoRoundedIcon />;
        color = theme.palette.info.main;
        break;
      default:
        break;
    }

    toast(<ToastContent text={text} icon={icon} color={color ? color : ""} />, {
      position: toast.POSITION.TOP_RIGHT,
      closeButton: <CloseButton />,
      style: {
        background: color ? color : "",
      },
    });
  };

  const ToastContent = ({
    text,
    icon,
    color,
  }: {
    text: string;
    icon: React.ReactNode;
    color: string;
  }) => {
    return (
      <div style={{ display: "flex", alignItems: "center", color }}>
        {icon}
        <span style={{ marginLeft: "10px" }}>{text}</span>
      </div>
    );
  };

  const CloseButton = () => {
    return <CloseOutlinedIcon style={{ color: "white" }} />;
  };

  return { notification };
};

export default CustomToast;
