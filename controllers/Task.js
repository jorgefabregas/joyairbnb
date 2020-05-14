/*********************Task ROUTES***************************/
const express = require('express')
const router = express.Router();
const taskModel = require("../models/task");


//Route to direct use to Add Task form
router.get("/add",(req,res)=>
{
    res.render("task/taskAddForm");
});

//Route to process user's request and data when the user submits the add task form
router.post("/add",(req,res)=>
{

    const newUser = {
        title: req.body.title,
        description: req.body.description,
        dueDate: req.body.dueDate,
        priority: req.body.priority
    }

    const task = new taskModel(newUser);
    task.save()
    .then(()=>{
        res.redirect("/task/list")
    })
    .catch(err=>console.log(`Error happened when inserting in the database:${err}`));
   
});

////Route to fetch all tasks
router.get("/list",(req,res)=>

    //pull from the database, get the results that were returned and them inject the results into the taskDashboard
{
    taskModel.find()
    .then((tasks)=>{

        const filteredTask = tasks.map(task=>{
            return {
                id: task._id,
                title: task.title,
                description: task.description,
                dueDate: task.dueDate,
                status: task.status,
                priority: task.priority
            }
        });


        res.render("task/taskDashboard",{
            data: filteredTask
        });

    })
    .catch(err=>console.log(`Error happened when pulling from database:${err}`));

    
  
});

//Route to direct user to the task profile page
router.get("/description",(req,res)=>{

    

})

router.get("/edit/:id",(req,res)=>{

    taskModel.findById(req.params.id)
    .then((task)=>{

        const {_id, title, description, dueDate, priority, status} = task;
        res.render ("task/taskEditForm", {
            _id,
            title,
            description,
            dueDate,
            priority,
            status
        })        
    })
    .catch(err=>console.log(`Error happened when pulling from database:${err}`));

})


router.put("/update/:id",(req,res)=>{

    const task =
    {
        title:req.body.title,
        description:req.body.description,
        dueDate:req.body.dueDate,
        status:req.body.status,
        priority:req.body.priority
   }

   taskModel.updateOne({_id:req.params.id},task)
   .then(()=>{
       res.redirect("/task/list");
   })
   .catch(err=>console.log(`Error happened when updating from database:${err}`));

});

router.delete("/delete/:id",(req,res)=>{

    taskModel.deleteOne({_id:req.params.id})
    .then(()=>{
        res.redirect("/task/list");
    })
    .catch(err=>console.log(`Error happened when deleting from database:${err}`));

});

//Route to direct user to edit task form



//Route to update user data after they submit the form


//router to delete user


module.exports=router;