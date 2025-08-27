import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./main.css";
import { Context } from "../../context/Context";
const Main = () => {
	const {
		onSent,
		recentPrompt,
		showResults,
		loading,
		resultData,
		setInput,
		input,
	} = useContext(Context);

    const handleCardClick = (promptText) => {
			setInput(promptText);
		};
	return (
		<div className="main">
			<div className="nav">
				<p>Excuse Generator</p>
				<img src={assets.user} alt="" />
			</div>
			<div className="main-container">
				{!showResults ? (
					<>
						<div className="greet">
							<p>
								<span>Hello!</span>
							</p>
							<p>How Can I Help You Today?</p>
						</div>
						<div className="cards">
							<div
								className="card"
								onClick={() =>
									handleCardClick("Make an excuse for my boss for needing to take a sick day unexpectedly")
								}
							>
								<p>Make an excuse for my boss for needing to take a sick day unexpectedly</p>
								<img src={assets.plus_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() =>
									handleCardClick(
										"Make an excuse to my teacher for not being prepared for the presentation"
									)
								}
							>
								<p>Make an excuse to my teacher for not being prepared for the presentation </p>
								<img src={assets.plus_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() =>
									handleCardClick("Make an excuse for my friend for forgetting their birthday")
								}
							>
								<p>Make an excuse for my friend for forgetting their birthday</p>
								<img src={assets.plus_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() => {
									handleCardClick(
										"Make an excuse to my trainer for missing the gym all week"
									);
								}}
							>
								<p>Make an excuse to my trainer for missing the gym all week</p>
								<img src={assets.plus_icon} alt="" />
							</div>
						</div>
					</>
				) : (
					<div className="result">
						<div className="result-title">
							<img src={assets.user} alt="" />
							<p>{recentPrompt}</p>
						</div>
						<div className="result-data">
							<img src={assets.gemini_icon} alt="" />
							{loading ? (
								<div className="loader">
									<hr />
									<hr />
									<hr />
								</div>
							) : (
								<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
							)}
						</div>
					</div>
				)}

				<div className="main-bottom">
					<div className="search-box">
						<input
							onChange={(e) => {
								setInput(e.target.value);
							}}
							value={input}
							type="text"
							placeholder="Enter the Prompt Here"
						/>
						<div>
							<img
								src={assets.send_icon}
								alt=""
								onClick={() => {
									onSent();
								}}
							/>
						</div>
					</div>
					<div className="bottom-info">
						<p>
							Made by Divyansh Kumawat. This is only for education purpose and not intended for
							commercial use.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
