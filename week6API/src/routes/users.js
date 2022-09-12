import express from 'express';
import {returnAll, returnAllSortedByName, playersByGroupName, playersByweight, playersExists} from '../controllers/users'

const router = express.Router();

router.get('/',returnAll);
router.get('/sorted_by_name',returnAllSortedByName);
router.post('/get_players_by_group_name',playersByGroupName);
router.post('/get_players_by_weight_range',(req,res)=>{playersByweight});
router.post('/is_exists',(req,res)=>{playersExists});



export default router;