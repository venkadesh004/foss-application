const express = require('express');

const fileUrl = "./application/layoutFixed.apk";

const downloadApp = (req, res) => {
    return res.download(fileUrl);
}

module.exports.downloadApp = downloadApp;