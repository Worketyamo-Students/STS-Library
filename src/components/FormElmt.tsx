import { Input } from "./ui/input";
// import Style from "./FormElmt.module.css";
import "./FormElmt.css";
import PasswordInput from "./PasswordInput";
interface Props {
  label: string;
  placeholder: string;
  Elname: string;
  Type: string;
  Val: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormElmt = ({
  label,
  placeholder,
  Elname,
  Type,
  Val,
  onChange,
}: Props) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div>
        <label htmlFor={Elname}>{label}</label>{" "}
        <b className="text-red-500">*</b>
      </div>
      {Type === "password" ? (
        <PasswordInput value={Val} onChange={onChange} name={Elname} />
      ) : (
        <Input
          id={Elname} // pour associer le label à l'input
          placeholder={placeholder}
          className="info"
          onChange={onChange}
          value={Val}
          name={Elname}
          type={Type}
        />
      )}
    </div>
  );
};

export default FormElmt;
