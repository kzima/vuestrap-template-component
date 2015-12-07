// import dependencies
import './hello-world.scss'
import template from './hello-world.html'

// export component object
export default {
  template: template,
    replace: true,
    props: {
      bold: {
        type: Boolean,
        default: false,
      },
      message: {
        type: String
      },
      size: {
        type: String,
        default: 'ccc'
      },
    },
}
