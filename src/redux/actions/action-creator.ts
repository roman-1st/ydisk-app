import * as authActions from './authActions'
import * as dataActions from  './dataActions'
import * as asyncActions from './async-actions'

export default {
    ...authActions,
    ...dataActions,
    ...asyncActions
}