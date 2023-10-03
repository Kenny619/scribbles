
const express = require('express');
const router = express.Router();


//Path error detection


//Get a memo by id
router.get('/notes/get/:notesId', (req, res) => {
    if(req.params.notesId === undefined){
        res.json({error: 'missing memoId parameter'});
    }else{
        res.json({id: req.params.notesId });
    }
    //db action

    

});


//Get multiple memos by id

//Get all the child memos by their parentID

//Search - Get all the memo that match the search condition

//Search - Get all the memo that contain searched text

//Search - Get all the memo that match the timeframe of date-based search

//Search - Get all the memo that have the searched tag
router.post('/notes/search', (req, res)=>{
    // console.log(req.body);
    res.json(req.body);

    //res.send("done!");
});

//Download - Export the view in requested format.
router.get('/notes/download/', (req, res) =>{

    res.download('../api/files/' + 'index.html');

});

module.exports = router;
