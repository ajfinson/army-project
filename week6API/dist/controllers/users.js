"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playersExists = exports.playersByweight = exports.playersByGroupName = exports.returnAllSortedByName = exports.returnAll = void 0;
const players_info_1 = require("../players_info");
// Method: GET
// Path: “/”
// Description: Return all the players in the “players_info.ts” file
// Params: None
// Returns: Array of player info objects
// @ts-ignore
const returnAll = (req, res) => {
    res.send(players_info_1.playersData);
};
exports.returnAll = returnAll;
// Method: GET
// Path: “/sorted_by_name”
// Description: Return all the players, but the array is sorted by players’ “first_name” field.
// Params: None
// Returns: Array of player info objects
const returnAllSortedByName = (req, res) => {
    let data = players_info_1.playersData;
    data.sort((a, b) => {
        let fa = a.first_name.toLowerCase(), fb = b.first_name.toLowerCase();
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
    res.send(data);
};
exports.returnAllSortedByName = returnAllSortedByName;
// Method: Post
// Path: “/get_players_by_group_name”
// Description: Return all the players that have the same team’s name as in the request.
// Body: name(String)
// Returns: Array of player info objects
const playersByGroupName = (req, res) => {
    let query = req.body.name;
    let data = players_info_1.playersData.filter((el) => el.team.full_name.includes(query));
    res.send(data);
};
exports.playersByGroupName = playersByGroupName;
// Method: Post
// Path: “/get_players_by_weight_range”
// Description: Return all the players that are between “lowVal” and “highVal” pounds
// Body: lowVal(Number), highVal(Number)
// Returns: Array of player info objects
const playersByweight = (req, res) => {
    let query = [req.body.LowVal, req.body.HighVal];
    let data = players_info_1.playersData.filter(function (el) { return el >= query[0] && el <= query[1]; });
    res.send(data);
};
exports.playersByweight = playersByweight;
// Method: Post
// Path: “/is_exists”
// Body: firstName (String), lastName (String)
// Description: Return if player with this first and last name exists in our list
// Returns: True/False
const playersExists = (req, res) => {
    let query = [req.body.firstName, req.body.lastName];
    let data = players_info_1.playersData.filter(function (el) { return el.first_name === query[0] && el.last_name === query[1]; });
    let returnValue = true;
    if (data != null) {
        returnValue = false;
    }
    console.log('pupic');
    res.send(returnValue);
};
exports.playersExists = playersExists;
