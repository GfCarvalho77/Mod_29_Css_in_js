import { FormEvent, useState } from 'react'
import { Formulario, InputCampo, BotaoPesquisa } from './styles'
// import styles from './FormVagas.module.css'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Formulario onSubmit={aoEnviarForm}>
      <InputCampo
        // className={styles.campo}
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BotaoPesquisa type="submit">Pesquisar</BotaoPesquisa>
    </Formulario>
  )
}
export default FormVagas
