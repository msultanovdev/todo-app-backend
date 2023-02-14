BASE URL: https://rs-clone-api-m0rq.onrender.com/

API:

USER: 
  POST (LOGIN): https://rs-clone-api-t2y5.onrender.com/api/user/login
  BODY FOR LOGIN REQ:
  {
    email: string,
    password: string
  }
  POST (REGISTER): https://rs-clone-api-t2y5.onrender.com/api/user/register
  BODY FOR REGISTER REQ: 
  {
    email: string,
    name: string,
    password: string
  }
  
  GET: https://rs-clone-api-t2y5.onrender.com/api/user/users

TODOS:
  GET: https://rs-clone-api-t2y5.onrender.com/api/workouts
  
  POST: https://rs-clone-api-t2y5.onrender.com/api/workouts
  BODY FOR POST REQ: 
  {
    title: string,
    details: string,
    isDone: boolean,
    color: string (example: "#000000"),
    time: string,
    overdue: boolean,
    from: string,
    assignTo: string
  }
  
  DELETE: https://rs-clone-api-t2y5.onrender.com/api/workouts/:id
  UPDATE: https://rs-clone-api-t2y5.onrender.com/api/workouts/:id
