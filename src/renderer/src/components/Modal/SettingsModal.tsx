import './settingsModal.css'
import { X } from 'lucide-react'

interface SettingsModalProps {
  isOpen: boolean
  onClose: () => void
}

function SettingsModal({ isOpen, onClose }: SettingsModalProps): JSX.Element | null {
  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Configurações</h2>
          <button className="close-button" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="modal-body">
          <div className="settings-group">
            <h3>Versão do Minecraft</h3>
            <div className="settings-option">
              <label>Selecione a versão do Minecraft</label>
              <select className="settings-select">
                <option value="forge_optifine_1.12.2">ForgeOptifine 1.12.2</option>
                <option value="optifine_1.12.2">Optifine 1.12.2</option>
                <option value="forge_1.12.2">Forge 1.12.2</option>
                <option value="vanilla_1.12.2">Minecraft 1.12.2</option>
                <option disabled>──────────</option>
                <option value="forge_optifine_1.16.5">ForgeOptifine 1.16.5</option>
                <option value="optifine_1.16.5">Optifine 1.16.5</option>
                <option value="forge_1.16.5">Forge 1.16.5</option>
                <option value="vanilla_1.16.5">Minecraft 1.16.5</option>
                <option disabled>──────────</option>
                <option value="forge_optifine_1.18.2">ForgeOptifine 1.18.2</option>
                <option value="optifine_1.18.2">Optifine 1.18.2</option>
                <option value="forge_1.18.2">Forge 1.18.2</option>
                <option value="vanilla_1.18.2">Minecraft 1.18.2</option>
                <option disabled>──────────</option>
                <option value="forge_optifine_1.20.1">ForgeOptifine 1.20.1</option>
                <option value="optifine_1.20.1">Optifine 1.20.1</option>
                <option value="forge_1.20.1">Forge 1.20.1</option>
                <option value="vanilla_1.20.1">Minecraft 1.20.1</option>
              </select>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="settings-button cancel" onClick={onClose}>
            Cancelar
          </button>
          <button className="settings-button save">Salvar</button>
        </div>
      </div>
    </div>
  )
}

export default SettingsModal
