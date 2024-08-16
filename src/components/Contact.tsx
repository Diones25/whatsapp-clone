import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "./ui/separator";
import { TiPinOutline } from "react-icons/ti";

const Contact = () => {
  return (
    <div className="flex items-center">
      <div>
        <Avatar className="w-14 h-14">
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
      </div>

      <div className="flex-1 pl-4">
        <Separator />
        <div className="flex justify-between items-center py-3">
          <div>
            <p className="text-white">Luciana Amor</p>
            <span>Ah tá certo</span>
          </div>
          <div>
            <p>09:01</p>
            <span>
              <TiPinOutline />
            </span>
          </div>
        </div>
        <Separator />
      </div>
    </div>
  )
}

export default Contact
