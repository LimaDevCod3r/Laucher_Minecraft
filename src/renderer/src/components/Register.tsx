import logo from '../assets/logo.png'
import { Input } from './input/input'

interface RegisterProps {
  onBackToLogin: () => void
}

function Register({ onBackToLogin }: RegisterProps): JSX.Element {
  return (
    <div className="form-container">
      <div className="form">
        <img className="logo" src={logo} alt="Logo" />

        <form className="form-group">
          <div className="input-group">
            <label htmlFor="username">Nome de usuário:</label>
            <Input type="text" id="username" placeholder="Escolha um nome de usuário" />
          </div>
          <div className="input-group">
            <label htmlFor="email">E-mail:</label>
            <Input type="email" id="email" placeholder="Digite seu e-mail" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha:</label>
            <Input type="password" id="password" placeholder="Crie uma senha" />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirmar senha:</label>
            <Input type="password" id="confirmPassword" placeholder="Confirme sua senha" />
          </div>
          <button type="submit" className="login-button">
            Criar conta
          </button>

          <div className="form-links">
            <a
              href="#"
              className="form-link back-link"
              onClick={(e) => {
                e.preventDefault()
                onBackToLogin()
              }}
            >
              Voltar para o login
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
