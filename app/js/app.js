var PlayMusic = require('playmusic'),
  pm = new PlayMusic(),
  api = require("./js/api.js"),
  notifier = require('node-notifier'),
  recursive = require('recursive-readdir'),
  fs = require('fs'),
  mm = require('musicmetadata');

var client_ids = null, soundcloud_access_token, spotify_access_token, lastfm_session_key,
  api_creds_url = "https://dl.dropboxusercontent.com/u/39260904/swing30.json";

var dialog = require('remote').require('dialog');
var BrowserWindow = require('electron').remote.BrowserWindow;
var Configstore = require('configstore');
var conf = new Configstore("harmony");
 
angular.module('harmony',['cfp.hotkeys']);