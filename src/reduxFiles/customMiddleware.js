const customMiddleware = store => next=> action=> {
    console.log('dispatched action', action);
    next(action);
};

export default customMiddleware;