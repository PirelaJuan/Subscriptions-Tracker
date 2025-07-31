
import Subscription from "../models/subscription.model.js";



export const createSubscription = async (req, res, next) => {
  // Controller logic for creating a subscription
  try {
    const subscription = await Subscription.create({
      ...req.body,
      user: req.user._id
    });

    res.status(201).json({
      success: true,
      data: subscription
    });

  } catch (error) {
    next(error);
  }
};

export const getUserSubscriptions = async (req, res, next) => {
try {
  // if the user is not the owner of the subscription, return an error
  if(req.user.id !== req.params.id) {
    const error = new Error("You can only access your own subscriptions");
    error.statusCode = 403;
    throw error;
  }

  const subscriptions = await Subscription.find({ user: req.params.id });
  
  res.status(200).json({
    success: true,
    data: subscriptions
  });
  
} catch (error) {
  next(error);
}
}
