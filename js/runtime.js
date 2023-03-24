function delayExecution(delay, kappa){
    window.setTimeout(function(){return _$K.yield(kappa, _$Constants.UNIT);}, delay);
    return _$Constants.UNIT;
}

const SystemQueue = (function(){

    let queue = _$List.nil;

    function enqueue(fiber){
        queue = _$List.cons(fiber, queue);
        return _$Constants.UNIT;
    }

    function dequeue(){
        let temp = queue;
        queue = _$List.nil;
        return temp;
    }

    function length(){
        return _$List.length(queue);
    }

    return { "enqueue": enqueue
           , "dequeue": dequeue
           , "length" : length }

}());

const sysEnqueue = _$Links.kify(SystemQueue.enqueue);
const sysDequeue = _$Links.kify(SystemQueue.dequeue);
const sysQueueLength = _$Links.kify(SystemQueue.length);