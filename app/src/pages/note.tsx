import React from "react";
import { Textarea } from "@/components/ui/textarea";
export const Note = () => {
	return (
		<div className="w-full h-full p-2">
			<Textarea
				id="note"
				className="bg-neutral-700 text-white border-none focus-visible:ring-0 focus-visible:ring-offset-0"
				rows={30}
			/>
		</div>
	);
};
