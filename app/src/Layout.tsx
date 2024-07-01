import { Note } from "./pages/note";
function Layout() {
	return (
		<>
			<div className="flex flex-col m-0 p-0 bg-neutral-900">
				<div className="w-full h-fit m-0 p-2 bg-gray-900 text-white">
					header
				</div>
				<div className="w-full h-lvh m-0 p-0">
					<Note />
				</div>
				<div className=" w-full h-fit">footer</div>
			</div>
		</>
	);
}

export default Layout;
