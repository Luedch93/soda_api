import express, {Router} from 'express';

import { getAll, post, getById, patch, put, deleteOne } from "./controller";

const router: Router = express.Router()

router.get('/', getAll);
router.post('/', post);
router.get('/:id', getById);
router.patch('/:id', patch);
router.put('/:id', put);
router.delete('/:id', deleteOne);

export default router;