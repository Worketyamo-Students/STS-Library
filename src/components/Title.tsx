interface Props{
    principal:string,
    sub:string,
}
const Title = ({principal,sub}:Props) => {
  return (
    <div className="flex flex-col items-center gap-1">
       <h2>{principal}</h2> 
       <span>{sub}</span>
    </div>
  )
}

export default Title