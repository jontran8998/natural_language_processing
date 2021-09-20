import { checkUrl} from './js/urlChecker'
import { handleSubmit } from './js/formHandler'
import { dataRender } from './js/dataRender'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/heading.scss'
import './styles/nav.scss'
import './styles/table.scss'

// export js files for using from Client library which is set up in webpack config.
export {
  checkUrl,
  handleSubmit,
  dataRender
 }
