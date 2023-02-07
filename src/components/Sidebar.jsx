import { SocialNetwork } from './SocialNetwork'
import { InformationContainer } from './InformationContainer'

import Avatar from '../img/Myself.jpg'

import '../styles/components/sidebar.sass'

export const Sidebar = () => {
  return <aside id="sidebar">
    <img src={Avatar} alt="Fernando Baladei" />
    <p className="title">Desenvolvedor</p>
    <SocialNetwork />
    <InformationContainer />
    <a href="" className="btn">Download currículo</a>

  </aside>
}
