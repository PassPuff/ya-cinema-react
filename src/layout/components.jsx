import Logo from '../assets/react.svg';

export const LayoutPage = ({children}) => {
  return (
    <>
      <header style={{textAlign: "center"}}>
        <img src={Logo} alt="logo"/>
        <span>Header Page</span>
      </header>

      <main>{children}</main>

      <footer style={{textAlign: "center"}}>
        <img src={Logo} alt="logo"/>
        <span>Footer Page</span></footer>
    </>
  )
}