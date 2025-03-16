import { Input } from './input/input'
import logo from '../assets/logo.png'

interface LoginProps {
  onRegisterClick: () => void
  onForgotPasswordClick: () => void
}

function Login({ onRegisterClick, onForgotPasswordClick }: LoginProps): JSX.Element {
  return (
    <div className="form-container">
      <div className="form">
        <img className="logo" src={logo} alt="Logo" />

        <form className="form-group">
          <div className="input-group">
            <label htmlFor="username">Usuário:</label>
            <Input type="text" id="username" placeholder="Digite seu usuário" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha:</label>
            <Input type="password" id="password" placeholder="Digite sua senha" />
          </div>
          <button type="submit" className="login-button">
            Entrar
          </button>

          <div className="form-links">
            <a
              href="#"
              className="form-link"
              onClick={(e) => {
                e.preventDefault()
                onForgotPasswordClick()
              }}
            >
              Esqueci minha senha
            </a>
            <a
              href="#"
              className="form-link register-link"
              onClick={(e) => {
                e.preventDefault()
                onRegisterClick()
              }}
            >
              Criar uma conta
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
