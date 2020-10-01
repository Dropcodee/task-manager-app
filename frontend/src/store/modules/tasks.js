import TaskService from '@/services/TaskService'

const state = () => {
    return {
        tasks: null
    }
};

const getters = {
    GetTasks(state) {
        if (state.tasks !== null && state.tasks !== undefined) {
            return state.tasks.data
        }
        return null
    }
};

const mutations = {
    SET_TASKS_STATE(state, payload) {
        state.tasks = payload
    }
};

const actions = {
    async FetchTasks(context) {
        try {
            const response = await TaskService.tasks()
            context.commit('SET_TASKS_STATE', response.data);
        } catch (error) {
            console.log(error.response.data);
        }
    },

    async MarkTaskProgress(context, payload) {
        try {
            await TaskService.update(payload)
            context.dispatch('FetchTasks')
        } catch (error) {
            console.log(error.response.data);
        }
    },

    async DeleteTask(context, payload) {
        try {
            await TaskService.delete(payload)
            context.dispatch('FetchTasks')
        } catch (error) {
            console.log(error.response.data);
        }
    },

    async CreateTask(context, payload) {
        try {
            await TaskService.create(payload)
            context.dispatch('FetchTasks')
        } catch (error) {
            console.log(error.response.data);
        }
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}