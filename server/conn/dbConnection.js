const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://hariprasadv369:pFmznWp7YYGWP7EV@cluster0.jtuqpah.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster0',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).
then(() => {
    console.log('Backend is connected to mongo db...');
}).catch((err) => {
    console.log(err)
})
