export default dispatcher = (()=>{
  class Dispatcher {
    constructor(){
      this._id = 0;
      this._callbacks = [];
    }

    register(callback){
      console.log('register action');
      var id = 'CID_' + this._id++;
      this._callbacks[id] = callback;
    }

    dispatch(action) {
       for(var id in this._callbacks){
         this._callbacks[id](action);
       }
    }
  }

  return new Dispatcher();
})();