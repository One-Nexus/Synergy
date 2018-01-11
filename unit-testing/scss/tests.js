///****************************************************************
/// Synergy - https://github.com/esr360/Synergy
///
/// @author [@esr360](http://twitter.com/esr360)
///****************************************************************

var path = require('path');
var sassTrue = require('sass-true');
var sassFile = path.join(__dirname, 'tests.scss');

sassTrue.runSass({file: sassFile}, describe, it);