import { useState } from "react";

export const useNotifications = () => {
	const [message, setMessage] = useState(null);
	return {
		message, setMessage
	}
}