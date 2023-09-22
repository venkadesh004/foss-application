const express = require('express');

const fileUrl = "./application/PlanetsAR.apk";

const downloadApp = (req, res) => {
    return res.download(fileUrl);
}

module.exports.downloadApp = downloadApp;