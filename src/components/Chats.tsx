import { AiOutlineMore } from "react-icons/ai";
import { RiChatNewFill } from "react-icons/ri";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Chats = () => {
  return (
    <div className="w-[28rem] min-h-[95vh] bg-[#111B21]">
      <div className="mx-4 mt-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="ml-3 text-white font-bold text-2xl">Chats</h1>
          </div>

          <div className="flex">
            <RiChatNewFill className="text-white text-2xl" />
            <AiOutlineMore  className="text-white text-2xl ml-5"/>
          </div>
        </div>
      </div>

      <div className="mx-3 mt-5">
        <div>
          <Input
            className="bg-[#202C33] border-0"
            placeholder="Pesquisar"
          />
        </div>
        <div className="mt-3">
          <Button className="bg-[#202C33] hover:bg-[#26353D] h-9 rounded-full">Tudo</Button>
          <Button className="bg-[#202C33] hover:bg-[#26353D] h-9 rounded-full mx-2">Não lidas</Button>
          <Button className="bg-[#202C33] hover:bg-[#26353D] h-9 rounded-full">Grupos</Button>
        </div>
      </div>
    </div>
  )
}

export default Chats
