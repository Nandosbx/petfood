import Logo from '../../assets/logo.png'
import LogoWhite from '../../assets/logo-white.png'

export default function Header({ whiteVersion}){
  return (
    <div className="col-12">
      <header className="py-4 px-4 text-center">
        <img src={whiteVersion ? LogoWhite : Logo} className="img-fluid" alt="Logo" />
      </header>
    </div>
  )
}