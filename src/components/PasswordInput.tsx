import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import { Eye,EyeOff } from "lucide-react"
import { useState } from "react";
import "./FormElmt.css";

interface Props{
    value: string,
    onChange : (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
}
const PasswordInput = ({value,onChange,name}: Props) => {
    const [showPassword, setPassword] = useState(false);

  return (
    <div className="relative w-full">
        <Input type={showPassword ? "text" : "password"} placeholder={showPassword ? "Enter your password" : "********"} value={value} onChange={onChange} name={name} className="info"/>
        <Button type="button" variant="ghost" size="icon" onClick={()=> setPassword(!showPassword)} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
            {showPassword ? <Eye className="w-5 h-5"/> : <EyeOff className="w-5 h-5" />}
        </Button>
    </div>
  )
}

export default PasswordInput;