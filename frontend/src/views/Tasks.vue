<template>
    <div class="tasks h-full">
        <div class="w-10/12 mx-auto pb-12">
            <div class="flex flex-row flex-wrap items-center justify-between mt-12">
                <!-- VIEW TASKS SECTION -->
                <div class="w-full md:w-1/2">
                    <p class="text-gray-700 text-left text-lg py-8">View All Tasks</p>
                    <div class="h-72 overflow-y-scroll w-full md:w-11/12" v-if="GetTasks.data.length">
                        <div v-for="task in GetTasks.data" :key="task.id">
                            <div class="my-4 bg-white shadow rounded-md border-t-4 w-11/12" 
                            :class="task.completed ? 'border-green-400' : 'border-red-400' ">
                                <div class="border-b-2 border-gray-300 p-2 items-center w-full flex justify-between">
                                    <p class="ml-2 text-gray-700">{{ task.title }}</p>
                                    <i class="fa fa-trash-o cursor-pointer fill-current hover:text-red-600" @click="deleteTask(task)" :class="task.completed ? 'text-green-400' : 'text-red-400' "></i>
                                </div>
                                <div class="py-4 px-3 flex justify-start items-center">
                                    <input type="checkbox" v-model="task.completed" class="p-2 ml-2" @change="markProgress(task)">
                                    <p class="text-gray-700 font-semibold ml-6" :class="task.completed ? 'line-through opacity-25' : '' ">{{ task.task }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mx-auto text-center" v-else>
                        <img src="/img/box.png" alt="" class="mx-auto mt-6">
                        <p class="text-gray-600 text-lg text-center  mt-6">You Have No Tasks...</p>
                    </div>
                </div>
                <!-- VIEW TASKS SECTION -->
                <!-- CREATE TASKS -->
                <div class="w-full md:w-1/2">
                    <form @submit.prevent="createTask" class="bg-white rounded px-8 py-4 shadow hover:shadow-md">
                        <p class="text-left font-semibold text-gray-700 text-xl">Create New Task </p>
                        <div class="bg-red-200 shadow rounded w-64 mx-auto p-3 text-red-500 mt-3" v-show="error">
                            <p class="text-center">{{ error }}</p>
                        </div>
                        <div class="mt-12">
                            <input type="text" v-model="form.title" class="shadow border rounded w-full py-3 px-3 text-gray-700 focus:outline-none" placeholder="Enter Title">
                        </div>
                        <div class="mt-12">
                            <input type="text" class="shadow border rounded w-full py-3 px-3 text-gray-700 focus:outline-none" placeholder="Enter Task" v-model="form.task">
                        </div>
                        <div class="mt-6 text-center">
                            <button class="bg-purple-500 block w-full px-8 py-2 text-white focus:outline-none hover:bg-purple-600 transition ease-in-out duration-500 rounded-md">Create Task</button>
                        </div>
                    </form>
                </div>
                <!-- CREATE TASKS -->
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
            form: {
                title: '',
                task: ''
            },
            error: null
        }
    },
    computed: {
        ...mapGetters('tasks', ["GetTasks"])
    },
    methods: {
        ...mapActions('tasks', ["FetchTasks", "MarkTaskProgress", "DeleteTask", "CreateTask"]),
        createTask() {
            if (this.form.title && this.form.task) {
                const { title, task } = this.form
                const payload = { title, task }
                this.CreateTask(payload)
                this.clearForm()
            } else {
                this.error = 'Please fill all required fields'
            }
        },
        clearForm() {
            this.form.title = '',
                this.form.task = ''
        },
        markProgress(task) {
            const payload = {
                id: task.id,
                data: {
                    status: task.completed
                }
            }
            this.MarkTaskProgress(payload);
        },
        deleteTask(task) {
            this.DeleteTask(task);
        }
    },
    watch: {
        error: {
            handler: function() {
                let as = this;
                setTimeout(function() { as.error = null }, 3000)
            }
        }
    },
    created() {
        this.FetchTasks()
    }
}
</script>