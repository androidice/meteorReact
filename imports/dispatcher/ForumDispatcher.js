export  default  ForumDispatcher =  dispatcher;

ForumDispatcher.register((action)=>{
    console.log('action recieved', action);
});
