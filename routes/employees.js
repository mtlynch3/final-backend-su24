import express from 'express';
import { Employee, Task } from '../database/models/index.js';

//initialize router
const router = express.Router();

//define routes

/** GET ALL EMPLOYEES: */
router.get('/', async (req, res, next) => {
  try {
    let employees = await Employee.findAll({include: [Task]});
    res.status(200).json(employees);
  } catch(err) {
    next(err);
  }
});

export {
    router as employeeRouter,
};