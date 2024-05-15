import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views-react-18-fix";

const images = [
	{
		label: "San Francisco – Oakland Bay Bridge, United States",
		imgPath:
			"https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
	},
	{
		label: "Bird",
		imgPath:
			"https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
	},
	{
		label: "Bali, Indonesia",
		imgPath:
			"https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
	},
	{
		label: "Goč, Serbia",
		imgPath:
			"https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
	},
];

function Carous() {
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = images.length;

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStepChange = (step) => {
		setActiveStep(step);
	};

	setTimeout(() => {
		setActiveStep(activeStep === images.length - 1 ? 0 : activeStep + 1);
	}, 10000);

	return (
		<div className="flex flex-col justify-center items-center bg-mainPurple rounded-xl m-10		h-[200px] ">
			<Box sx={{ maxWidth: 300, flexGrow: 1 }}>
				{/* <p>text</p>
				<Paper
					square
					elevation={0}
					sx={{
						display: "flex",
						alignItems: "center",
						height: 50,
						pl: 2,
						bgcolor: "background.default",
					}}> */}
				{/* <Typography>{images[activeStep].label}</Typography> */}
				{/* </Paper> */}
				<SwipeableViews
					axis={theme.direction === "rtl" ? "x-reverse" : "x"}
					index={activeStep}
					onChangeIndex={handleStepChange}
					enableMouseEvents>
					{images.map((step, index) => (
						<div key={step.label}>
							{Math.abs(activeStep - index) <= 2 ? (
								<Box
									// component="img"
									sx={{
										height: 200,
										display: "block",
										maxWidth: 400,
										overflow: "hidden",
										width: "100%",
									}}
									src={step.imgPath}
									alt={step.label}
								/>
							) : null}
						</div>
					))}
				</SwipeableViews>
				<MobileStepper
					steps={maxSteps}
					position="static"
					activeStep={activeStep}
					nextButton={
						<Button
							size="small"
							onClick={handleNext}
							disabled={activeStep === maxSteps - 1}>
							{theme.direction === "rtl" ? (
								<KeyboardArrowLeft />
							) : (
								<KeyboardArrowRight />
							)}
						</Button>
					}
					backButton={
						<Button
							size="small"
							onClick={handleBack}
							disabled={activeStep === 0}>
							{theme.direction === "rtl" ? (
								<KeyboardArrowRight />
							) : (
								<KeyboardArrowLeft />
							)}
						</Button>
					}
				/>
			</Box>
		</div>
	);
}

export default Carous;
