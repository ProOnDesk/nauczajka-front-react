function MessageComponent({ userData, message }) {
	return (
		<div>
			<p>{message?.body}</p>
		</div>
	);
}

export default MessageComponent;
