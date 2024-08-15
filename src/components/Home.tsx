import Chats from "./Chats"
import Messenger from "./Messenger"
import Sidebar from "./Sidebar"

const Home = () => {
  return (
    <div className="min-h-[95vh] bg-[#202C33]">
      <div className="flex">
        <Sidebar />
        <Chats />
        <Messenger />
      </div>
    </div>
  )
}

export default Home
