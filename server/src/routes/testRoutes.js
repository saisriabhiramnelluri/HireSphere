import express from 'express';
import {
    createTest,
    updateTest,
    deleteTest,
    getTestById,
    getRecruiterTests,
    scheduleTest,
    getTestSubmissions,
    publishTest,
    assignTestToApplicants,
} from '../controllers/testController.js';
import { protect } from '../middleware/authMiddleware.js';
import { authorizeRoles } from '../middleware/roleMiddleware.js';

const router = express.Router();

router.use(protect);

// Recruiter routes
router.post('/', authorizeRoles('recruiter'), createTest);
router.get('/recruiter', authorizeRoles('recruiter'), getRecruiterTests);
router.get('/:id', getTestById);
router.put('/:id', authorizeRoles('recruiter'), updateTest);
router.delete('/:id', authorizeRoles('recruiter'), deleteTest);
router.post('/:id/publish', authorizeRoles('recruiter'), publishTest);
router.post('/schedule', authorizeRoles('recruiter'), scheduleTest);
router.post('/assign', authorizeRoles('recruiter'), assignTestToApplicants);
router.get('/:testId/submissions', authorizeRoles('recruiter'), getTestSubmissions);

export default router;
