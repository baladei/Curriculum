import Avatar from '../img/Myself.jpg'

import '../styles/components/sidebar.sass'

export const Sidebar = () => {
  return <aside id="sidebar">
    <img src={Avatar} alt="Fernando Baladei" />
    <p className="title">Desenvolvedor</p>
    <p>Redes Sociais</p>
    <p>Informações de Contato</p>
    <a href="" className="btn">Download currículo</a>

  </aside>
}
