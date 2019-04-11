import { landingPageStrings } from '../../localization/landingPageStrings'
import NavButton from '../../library/button/NavButton'
import theme from '../../theme'

export const NavBar = ({ logoUrl, menuItems }) => (
  <>
    <div className="nav-bar">
      <div className="brand">
        <img src={logoUrl} />
        <span>{landingPageStrings.vietnamtours}</span>
        <span>{landingPageStrings.forbooks}</span>
      </div>
      <div className="nav-menu">
        {menuItems.map(item => (
          <NavButton key={item} name={item} onClick={() => null} />
        ))}
      </div>
    </div>
    <style jsx>{`
      .nav-bar {
        background-color: ${theme.palette.shade[100]};
        display: flex;
        justify-content: space-between;
        aligns-items: center;
        position: fixed;
        width: 100%;
        padding: ${theme.spacing}px ${theme.spacing * 3}px;
      }
      .brand {
        display: flex;
        align-items: center;
      }
      .brand img {
        width: 50px;
        height: 50px;
      }
      .brand span {
        text-transform: capitalize;
        font-family: ${theme.font.family.title};
        color: ${theme.palette.blue[100]};
        font-size: ${theme.font.size.large};
      }
      .brand span:last-child {
        color: ${theme.palette.shade[0]};
        margin-left: ${theme.spacing}px;
      }
      .nav-menu {
        display: flex;
        align-items: center;
      }
    `}</style>
  </>
)
