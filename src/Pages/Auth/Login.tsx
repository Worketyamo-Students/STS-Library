import { ModeToggle } from "@/components/StyleToggler"

const Login = () => {
  return (
    <div className="text-xl flex h-svh w-full">
      <div className="flex-1 hidden"><img src="/Login-img.png" className="h-full"/></div>
      <div className="flex-1">
        <div className="w-full flex place-content-end px-4 lg:px-10">
          <ModeToggle/>
        </div>
      </div>
    </div>
  )
}

export default Login