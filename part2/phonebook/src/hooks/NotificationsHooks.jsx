import { useState } from "react";

export const useNotifications = () => {
	const [notification, setNotification] = useState({ message: null, type: "success" });
	return {
		notification, setNotification
	}
}
