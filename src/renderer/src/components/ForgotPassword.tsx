import { Input } from './input/input'
import logo from '../assets/logo.png'

interface ForgotPasswordProps {
  onBackToLogin: () => void
}

function ForgotPassword({ onBackToLogin }: ForgotPasswordProps): JSX.Element {
  return (
    <div className="form-container">
      <div className="form">
        <img className="logo" src={logo} alt="Logo" />

        <form className="form-group">
          <h2 className="form-title">Recuperação de Senha</h2>
          <p className="form-description">
            Digite seu e-mail para receber um link de recuperação de senha.
          </p>

          <div className="input-group">
            <label htmlFor="email">E-mail:</label>
            <Input type="email" id="email" placeholder="Digite seu e-mail" />
          </div>

          <button type="submit" className="login-button">
            Enviar link
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

export default ForgotPassword
