import Api from './Api'

export default {
    tasks() {
        return Api().get('tasks');
    },
    create(payload) {
        return Api().post('tasks/new', payload)
    },
    update(payload) {
        return Api().patch(`tasks/progress/${payload.id}`, payload.data)
    },
    delete(payload) {
        return Api().delete(`tasks/delete/${payload.id}`)
    }
}