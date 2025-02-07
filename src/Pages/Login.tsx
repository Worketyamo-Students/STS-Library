import { ModeToggle } from "@/components/StyleToggler";
import Style from "./login.module.css";
import Logo from "@/components/Logo";
import Title from "@/components/Title";
const Login = () => {
  return (
    <div className="text-xl flex h-svh w-full overflow-x-hidden">
      <div className="flex-1 hidden lg:block">
        <img src="/Login-img.png" className="h-full" />
      </div>
      <div className="flex-1 flex flex-col items-center relative">
        <div className="w-full flex place-content-end px-4 lg:px-10">
          <ModeToggle />
          <div className={Style.ombre}></div>
        </div>
        <div className="pt-5 flex flex-col gap-8 items-center w-full ">
          <Logo />
          <Title
            principal="Create an account"
            sub="Sign up now and unlock exclusive access!"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
