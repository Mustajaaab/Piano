
const Sidebar = () => {
    return (
      <div className=" w-[25%]">
        <div className="bg-[#3AB24A] py-3 rounded-tl-sm rounded-tr-sm">
            <h1 className="pl-4 text-xl font-semibold">Lessons</h1>
        </div>
        <div className="bg-[#f5f5f5] p-4">
            <h2 className="text-black font-semibold">Pitch</h2>
            <p className="text-black text-sm pt-2">Notes</p>
            <p className="text-black text-sm pt-2">The Staffs</p>
            <p className="text-black text-sm pt-2">Claffs</p>
            <p className="text-black text-sm pt-2">Accidentals</p>
        </div>
        <div className="h-px w-[85%] mx-auto bg-gray-300"></div>
        <div className="bg-[#f5f5f5] p-4">
            <h2 className="text-black font-semibold">Structure</h2>
            <p className="text-black text-sm pt-2">Intervals</p>
            <p className="text-black text-sm pt-2">Chords</p>
            <p className="text-black text-sm pt-2">Scales</p>
            <p className="text-black text-sm pt-2">Keys</p>
        </div>
      </div>
    );
  };
  
  export default Sidebar;