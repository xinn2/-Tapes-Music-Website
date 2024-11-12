const express = require('express');
const app = express();

app.use(express.static('client'));
app.use(express.json());

let info = [];
let infos = [
    'name: Ariana Grande-Butera',
    'DOB: 26 Jun 1993',
    'Nationality: American',
    'debut: 2012'
];

let collab = [];
let collabs = [
    '"The Way"- Mac Miller',
    '"Bang Bang"- Jessie J and Nicki Minaj',
    '"Problem"- Iggy Azalea',
    '"Love Me Harder"- The Weeknd',
    '"Break Free"- ZEDD'
];

let album = [];
let albums = [
    'Positions',
    'Dangerous Woman',
    'thank u, next',
    'Sweetener',
    'The Best',
    'My Everything'
];

let comment = [];
let comments = [
    '"She is really talented!"',
    '"Her range is so broad which is why it fits so many genres."',
    '"I absolutely loved her acting in "Victorious"!"'
];

//2nd
let info2 = [];
let infos2 = [
    'name: Taylor Alison Swift',
    'DOB: 13 December 1989',
    'Nationality: American',
    'debut: 2004'
];

let collab2 = [];
let collabs2 = [
    '"Everything Has Changed"- Ed Sheeran',
    '"Bad Blood"- Kendrick Lamar',
    '"I Dont Wanna Live Forever"- Zayn',
    '"Me!"- Brendon Urie',
    '"Exile"- Bon Iver'
];

let album2 = [];
let albums2 = [
    'Lover',
    'Folklore',
    'reputation',
    '1989',
    'Red',
    'Speak Now',
    'Fearless'
];

let comment2 = [];
let comments2 = [
    '"I am in love with her songs and the lyrics are heartfelt."',
    '"LOVEE her personality, her songs are awesome!!"'
];

//3rd
let info3 = [];
let infos3 = [
    'name: Justin Drew Bieber',
    'DOB: 1 March 1994',
    'Nationality: Canadian',
    'debut: 2007'
];

let collab3 = [];
let collabs3 = [
    '"Eenie Meenie"- Sean Kingston',
    '"Never Say Never"- Jaden Smith',
    '"Beauty and a Beat"- Nicki Minaj',
    '"Despacito"- Luis Fonsi & Daddy Yankee',
    '"Stay"- Kid Laroi',
    '"Intentions"- Quavo'
];

let album3 = [];
let albums3 = [
    'Justice',
    'Purpose',
    'Believe',
    'Changes',
    'Under the Mistletoe'
];

let comment3 = [];
let comments3 = [
    '"He is a nice person and cares about his fans a lot :)"',
    '"He is thoughtful, funny, cute, always being himself!"',
    '"I love his songs but I do not like him"',
    '"He has a large following and believe he is talented!"'
];



app.get('/infos/list', function (req, resp) {
    resp.json(infos);
});

app.get('/collabs/list', function(req, resp) {
    if(collabs == undefined || collabs.length == 0)
    {
    resp.status(404).json("Sorry they have no collabs!");
    }
    else{
    resp.json(collabs);
    }
});

app.get('/album/list', function(req, resp) {    
    resp.json(albums);
});

app.get('/comments/list', function(req, resp) {    
    if(comments == undefined || comments.length == 0)
    {
    resp.status(404).json("No comments added yet!");
    }
    else{
    resp.json(comments);
    }
});

app.post('/comments/add', function(req,resp) {
    console.log(req.body);
    const comm= req.body.comm;
    comments.push(comm)
    resp.json(comments);
});


//2nd
app.get('/infos2/list', function (req, resp) {
    resp.json(infos2);
});

app.get('/collabs2/list', function(req, resp) {
    if(collabs2 == undefined || collabs2.length == 0)
    {
    resp.status(404).json("Sorry they have no collabs!");
    }
    else{
    resp.json(collabs2);
    }
});

app.get('/album2/list', function(req, resp) {    
    resp.json(albums2);
});

app.get('/comments2/list', function(req, resp) {    
    if(comments2 == undefined || comments2.length == 0)
    {
    resp.status(404).json("No comments added yet!");
    }
    else{
    resp.json(comments2);
    }
});

app.post('/comments2/add', function(req,resp) {
    console.log(req.body);
    const tscomm= req.body.tscomm;
    comments2.push(tscomm);
    resp.json(comments2);
});


//3rd
app.get('/infos3/list', function (req, resp) {
    resp.json(infos3);
});

app.get('/collabs3/list', function(req, resp) {
    if(collabs3 == undefined || collabs3.length == 0)
    {
    resp.status(404).json("Sorry they have no collabs!");
    }
    else{
    resp.json(collabs3);
    }
});

app.get('/album3/list', function(req, resp) {    
    resp.json(albums3);
});

app.get('/comments3/list', function(req, resp) {    
    if(comments3 == undefined || comments3.length == 0)
    {
    resp.status(404).json("No comments added yet!");
    }
    else{
    resp.json(comments3);
    }
});

app.post('/comments3/add', function(req,resp) {
    console.log(req.body);
    const jbcomm= req.body.jbcomm;
    comments3.push(jbcomm);
    resp.json(comments3);
});

module.exports = app;