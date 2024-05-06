import { body,validationResult } from 'express-validator';

// created custom validation for all different api endpoints

export const validateCreateUser = [
  body('first_name').notEmpty().withMessage('First name is required').isLength({ min: 3 }).withMessage('First name must be at least 3 characters'),
  body('last_name').optional().isLength({ min: 3 }).withMessage('Last name must be at least 3 characters'),
  body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email format').isLength({ min: 10 }).withMessage('Email must be at least 10 characters'),
  body('phone_no').notEmpty().withMessage('Phone number is required').isLength({ min: 10, max: 10 }).withMessage('Phone number must be 10 digits'),
  body('gender').notEmpty().withMessage('Gender is required').isIn(['male', 'female', 'others']).withMessage('Invalid gender'),
  body('address').optional().isLength({ max: 100 }).withMessage('Address cannot exceed 100 characters')
];

export const validateDeleteUser = [
  body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email format').isLength({ min: 10 }).withMessage('Email must be at least 10 characters')
];

export const validateUpdateUser = [
  body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email format').isLength({ min: 10 }).withMessage('Email must be at least 10 characters'),
  body('first_name').optional().isLength({ min: 3 }).withMessage('First name must be at least 3 characters'),
  body('last_name').optional().isLength({ min: 3 }).withMessage('Last name must be at least 3 characters'),
  body('phone_no').optional().isLength({ min: 10, max: 10 }).withMessage('Phone number must be 10 digits'),
  body('gender').optional().isIn(['male', 'female', 'others']).withMessage('Invalid gender'),
  body('address').optional().isLength({ max: 100 }).withMessage('Address cannot exceed 100 characters')
];

export const validateGetUser = [
  body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email format').isLength({ min: 10 }).withMessage('Email must be at least 10 characters')
];

export const validateReadUserData = [
  body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email format').isLength({ min: 10 }).withMessage('Email must be at least 10 characters')
];

export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
   const error=errors.array().map((obj)=>{
      return obj.msg;
   })
  if (!errors.isEmpty()) {
    return res.status(400).json(error);
  }
  next();
};
