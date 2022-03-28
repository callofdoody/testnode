const express = require('express');
const fs = require('fs')
const macro = require('./macros/macromainEVE')
const emailer = require('./emailutils')
const file = require('./fileutils')
const dates = require('./dateutils')
const numdates = require('./numdatelabels')
const outqs = require('./outqs')
const scdbatches = require('./scdbatches')



const MACROSERIES = "RUN02"

const GVY_SHIFT = "gvy"
const EVE_SHIFT = "eve"
const DAY_SHIFT = "day"
const WKND_SHIFT = "wknd"

var DIR = "."