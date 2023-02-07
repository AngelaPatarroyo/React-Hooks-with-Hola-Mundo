

const MiComponente = ({miProp}) => {
  return(
  <div>
    Nombre: {miProp}
  </div>
  )
}

const Intro = () => {
  return (
    <MiComponente miProp={'chanchito feliz'}/>
  )
}






export default Intro;
