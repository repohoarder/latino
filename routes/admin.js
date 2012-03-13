/**
 * GET 404 page.
 *
 * Author: 	justin.maj
 * Date: 	2012-2-13   
 */

var db = require("../database/database.js").db;
var courseList = require("../database/course.js").courseList;


exports.man = function(req, res, next){

	res.render('admin', {
        title: 		'管理员后台',
        courseList: courseList
    });

};
