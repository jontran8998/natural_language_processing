import { checkUrl} from './js/urlCheker'
import { handleSubmit } from './js/formHandler'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

// export js files for using from Client library which is set up in webpack config.
export {
  checkUrl,
  handleSubmit
 }
