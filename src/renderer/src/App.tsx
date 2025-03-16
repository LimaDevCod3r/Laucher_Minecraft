import './app.css'
import { useState } from 'react'
import img from './assets/wallpaper_minecraft_pc_bundle_1920x1080.png'
import Login from './components/Login'
import Register from './components/Register'
import ForgotPassword from './components/ForgotPassword'
import { Settings } from 'lucide-react'
import SettingsModal from './components/Modal/SettingsModal'

function App(): JSX.Element {
  const [currentPage, setCurrentPage] = useState<'login' | 'register' | 'forgotPassword'>('login')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)

  // Função para alternar o dropdown
  const toggleDropdown = (): void => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  // Função para fechar o Laucher
  const closeWindow = (): void => {
    window.close()
  }

  // Função Para Abrir o modal
  const openModal = (): void => {
    setIsOpenModal(!isOpenModal)
  }

  return (
    <>
      <div className="screen">
        {/* Formulário De login, registro ou recuperação de senha */}
        {currentPage === 'login' ? (
          <Login
            onRegisterClick={() => setCurrentPage('register')}
            onForgotPasswordClick={() => setCurrentPage('forgotPassword')}
          />
        ) : currentPage === 'register' ? (
          <Register onBackToLogin={() => setCurrentPage('login')} />
        ) : (
          <ForgotPassword onBackToLogin={() => setCurrentPage('login')} />
        )}

        {/* Imagem do Minecraft */}
        <div className="image-container">
          <div className="settings">
            <Settings size={45} className="settings-icon" onClick={toggleDropdown} />
            {/* Dropdown  menu */}
            {isDropdownOpen && (
              <div className="settings-dropdown">
                <button className="dropdown-item" onClick={openModal}>
                  SETTINGS
                </button>
                <button className="dropdown-item" onClick={closeWindow}>
                  EXIT
                </button>
              </div>
            )}
          </div>

          {/* Modal de Configurações */}
          <SettingsModal isOpen={isOpenModal} onClose={openModal} />

          <img src={img} alt="Minecraft" />
        </div>
      </div>
    </>
  )
}

export default App
