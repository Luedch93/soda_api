import { Request, Response } from 'express';
import { SodaModel } from "./model";

export async function getAll(req: Request, res: Response) {
    try {
        const results = await SodaModel.find();
        return res.send(results);
    } catch (err) {
        return res.status(500).send({message: 'Internal server error'});
    }
}

export async function getById(req: Request, res: Response) {
    try {
        const {id} = req.params;
        const result = await SodaModel.findById(id);
        if (!result) { return res.status(404).send() }
        return res.send(result);
    } catch (err) {
        return res.status(500).send({message: 'Internal server error'});
    }
}

export async function patch(req: Request, res: Response) {
    try {
        const {id} = req.params;
        const result = await SodaModel.findOneAndUpdate({_id: id}, req.body, {new: true});
        return res.send(result);
    } catch (err) {
        return res.status(500).send({message: 'Internal server error'});
    }
}

export async function put(req: Request, res: Response) {
    try {
        const {id} = req.params;
        const result = await SodaModel.findOneAndUpdate({_id: id}, {$unset: {...req.body}}, {new: true, upsert: true, runValidators: true, strict: true});
        return res.send(result);
    } catch (err) {
        if(err.name === 'ValidationError') {
            return res.status(400).send({message: err.message})
        }
        console.error(err);
        return res.status(500).send({message: 'Internal server error'});
    }
}

export async function post(req: Request, res: Response) {
    try {
        const model = new SodaModel(req.body);
        const error = model.validateSync();
        if (error) { return res.status(400).send({message: error.message})}
        const response = await model.save();
        return res.status(201).send(response);
    } catch (err) {
        return res.status(500).send({message: 'Internal server error'});        
    }
}

export async function deleteOne(req: Request, res: Response) {
    try {
        const {id} = req.params;
        const result = await SodaModel.findByIdAndDelete(id);
        return res.send();
    } catch (err) {
        return res.status(500).send({message: 'Internal server error'});        
    }
}