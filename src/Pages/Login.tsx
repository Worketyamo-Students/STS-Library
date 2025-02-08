import { ModeToggle } from "@/components/StyleToggler";
import Style from './login.module.css';
import Logo from "@/components/Logo";
import Title from "@/components/Title";
import FormElmt from "@/components/FormElmt";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  // Fonction de mise à jour centralisée
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Optionnel : gestion de la soumission du formulaire
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Données soumises :", formData);
    // Vous pouvez ici envoyer les données au serveur
  };

  return (
    <div className="flex h-svh w-full overflow-x-hidden">
      <div className="flex-1 hidden lg:block w-full">
        <img src="/Login-img.png" className="h-full" alt="Login" />
      </div>
      <div className="flex-1 w-1/2 flex flex-col items-center relative">
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
          <form className="w-[90%] flex flex-col gap-6" onSubmit={handleSubmit}>
            <FormElmt
              label="Name"
              placeholder="SnowDev"
              Elname="name"
              Type="text"
              Val={formData.name}
              onChange={handleChange}
            />
            <FormElmt
              label="Email"
              placeholder="snowdevexample@gmail.com"
              Elname="email"
              Type="email"
              Val={formData.email}
              onChange={handleChange}
            />
            <FormElmt
              label="Password"
              placeholder="********"
              Elname="password"
              Type="password"
              Val={formData.password}
              onChange={handleChange}
            />
            <div className={Style.ombre}></div>
            <button 
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
