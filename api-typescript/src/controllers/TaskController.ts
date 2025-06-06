import { Handler, Request, Response } from "express";
import { Task } from "../models/TaskModel";
import { z } from "zod";
import { HttpError } from "../errors/HttpsError";


// req.body { title, description, status, priority }
const StoreRequestSchema = z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(["todo", "doing", "done"]),
    priority: z.enum(["low", "medium", "high"])
  });

const UpdateRequestSchema = z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    status: z.enum(["todo", "doing", "done"]).optional(),
    priority: z.enum(["low", "medium", "high"]).optional()
})

export class TaskController {
    index: Handler = (req, res) => {
        const tasks = Task.findAll()
        res.status(200).json(tasks)
    }

    store = (req: Request, res: Response) => {
        const parsedBody = StoreRequestSchema.parse(req.body);
        const newTask = Task.create(parsedBody);
        res.status(201).json(newTask)
    }

    show: Handler = (req, res) => {
        const { id } = req.params;
        const task = Task.findById(+id);
        if (!task) throw new HttpError(404, 'Task not found!');
        res.json(task);
    }

    update: Handler = (req, res) => {
        const { id } = req.params;
        const parsedBody = UpdateRequestSchema.parse(req.body);
        const updatedTask = Task.update(+id, parsedBody);
        if (!updatedTask) throw new HttpError(404, 'Task not found');
        res.status(200).json(updatedTask)
    }

    delete: Handler = (req, res) => {
        const { id } = req.params;
        const deletedTask = Task.delete(Number(id));
        if (!deletedTask) {
            throw new HttpError(404, 'Task not found');
        }
        res.json(deletedTask);
    }
}