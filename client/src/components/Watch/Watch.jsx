
import MiniDrawer from "../Home/Minidrawer";

function Watch() {
    return (
        <div className='bg-background w-full h-full flex flex-row'>
            <MiniDrawer />
            <div className="flex flex-col items-start justify-start w-full px-20 py-28 gap-4">
                <span className="text-3xl font-semibold">Watch</span>

            </div>
        </div>
    )
}

export default Watch