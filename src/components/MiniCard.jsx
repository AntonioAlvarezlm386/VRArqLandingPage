

const MiniCard = ({title}) => {
  return (
    <div className="flex flex-col items-center my-3">
        <img src="src/assets/img/creat.png" alt="icon" width={50}/>
        <p className="font-raleway font-medium text-base my-2">{title}</p>
    </div>
  )
}

export default MiniCard