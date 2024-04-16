import Button from "../Inputs/Button";
import { useNavigate } from "react-router";

function Button404() {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col items-center">
			<div className="h-24 mt-12">
				<Button
					onClick={() => {
						navigate("/");
					}}>
					Powrót do strony głównej
				</Button>
			</div>
		</div>
	);
}

export default Button404;
