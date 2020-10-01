// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Task from 'App/Models/Task'

export default class TasksController {

    public async index({ response }) {
        // fetch tasks from db
        try {
            const tasks = await Task.query().paginate(1, 10);
            // return a json response
            return response.status(200).json({
                messages: ['Successfully fetched your latest tasks.'],
                data: tasks
            })
        } catch (error) {
            return response.status(200).json({
                messages: ['Network Error'],
                data: {}
            })
        }

    }

    public async create({ request, response }) {
        // grab our request
        const taskData = request.post()
        // create a tasks
        try {
            const newTask = await Task.create({ title: taskData.title, task: taskData.task })
            // return response
            response.status(201).json({
                messages: ['Successfully created task'],
                data: newTask
            })
        } catch (error) {
            response.status(422).json({
                messages: ['Please fill out all required fields'],
                data: {}
            })
        }
    }

    public async updateProgress({ request, response, params }) {
        try {
            // check if task exists
            const dbTask = await Task.findOrFail(params.id)
            // grab our request
            const taskData = request.post()
            // update a tasks
            dbTask.completed = JSON.parse(taskData.status)
            await dbTask.save()
            // return response
            response.status(201).json({
                messages: ['Successfully updated task'],
                data: dbTask
            })
        } catch (error) {
            response.status(422).json({
                messages: ['please check your details and try again.'],
                data: {}
            })
        }
    }
    public async fetchTask({ params, response }) {
        // check if task exists in db
        try {
            const dbTask = await Task.findOrFail(params.id)
            response.status(200).json({ messages: ['Successfully deleted your task.'], data: dbTask })
        } catch (error) {
            response.status(404).json({ messages: ['Task does not exist.'] })
        }
    }

    public async deleteTask({ params, response }) {
        // check if task exists in db
        try {
            const dbTask = await Task.findOrFail(params.id)
            await dbTask.delete()
            response.status(200).json({ messages: ['Successfully deleted your task.'] })
        } catch (error) {
            response.status(404).json({ messages: ['Task does not exist.'] })
        }
        // delete the task
        // return a response
    }
}
