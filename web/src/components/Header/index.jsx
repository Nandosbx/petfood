import Logo from '../../assets/logo.png'
import LogoWhite from '../../assets/logo-white.png'

export default function Header({ whiteVersion, hideCart }){
  return (
    <div className="col-12">
      <header className="py-4 px-4 text-center">
      {whiteVersion ? (
                    <img
                        src={LogoWhite}
                        className="img-fluid"
                        alt="Logo"
                    />
                ) : (
                    <img
                        src={Logo}
                        className="img-fluid"
                        alt="Logo"
                    />
                )}
      </header>


      {!hideCart && (
                <button
                    onClick={() => openDrawer()}
                    className="btn btn-secondary cart-button"
                >
                    <span className="mdi mdi-cart"></span>Item
                </button>
            )}
    </div>
  )
}