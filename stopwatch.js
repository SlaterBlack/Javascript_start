function Stopwatch(){
    let startTime, endTime, running, duration = 0;

    this.start = function(){
        if (running)
            new Error ('The Clock is already stopped');
        running = true;
        startTime = new Date();
    };

    this.stop = function(){
        if (!running )
            new Error ('The Clock is already stopped');
        running = false;
        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime())/1000;
        duration += seconds;
    };

    this.reset = function(){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };
};