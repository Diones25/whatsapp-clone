import { BiConversation } from "react-icons/bi"
import { DiAptana } from "react-icons/di"
import { IoChatboxEllipsesOutline, IoPersonSharp } from "react-icons/io5"
import { LuCircleDotDashed } from "react-icons/lu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Sidebar = () => {
  return (
    <div className="w-[3.8rem] min-h-[95vh] border-r-2 border-gray-600 bg-[#202C33]">
      <div className="text-[#AEBAC1]">
        <div className="flex flex-col items-center justify-between min-h-[95vh]">

          <div className="mt-3">
            <div className="py-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <BiConversation className="text-2xl" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <span>Conversas</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="py-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <LuCircleDotDashed className="text-2xl" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <span>Status</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="py-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <IoChatboxEllipsesOutline className="text-2xl" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <span>Canais</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="py-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <IoPersonSharp className="text-2xl" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <span>Comunidades</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          <div className="flex flex-col items-center mb-3">
            <div className="mb-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <DiAptana className="text-2xl" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <span>Configurações</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div> 
            
            <div className="py-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    <span>Perfil</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Sidebar
