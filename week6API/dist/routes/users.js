"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = require("../controllers/users");
const router = express_1.default.Router();
router.get('/', users_1.returnAll);
router.get('/sorted_by_name', users_1.returnAllSortedByName);
router.post('/get_players_by_group_name', users_1.playersByGroupName);
router.post('/get_players_by_weight_range', (req, res) => { users_1.playersByweight; });
router.post('/is_exists', (req, res) => { users_1.playersExists; });
exports.default = router;
