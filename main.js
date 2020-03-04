/*Some basics
JavaScript is a single threaded lenguage that can be non-blocking.

Single threaded simple means that JS uses a one CALL STACK.

JS ENGINE - such as V8 is a browser engine that use MEMORY HEAP and CALLSTACK to run JS code and translate it to machine code readable for machines.

NON-BLOCKING means that we can run some big task ASYNCHRONISLY by useing API

*/
//EXEMPLE FOR NONBLOCING

console.log("1");

setTimeout(() => {
  console.log("2");
}, 30);

console.log("3");

/* RESULT:
The result for this is:
1
3
undefined
2

The reson is that by useing build in setTimeout() we send the console log "2" to API, 
so the console log "3" is now on stack on top of console log "1" --> end of reading and UNDEFIND

on the next step API sends the task to CALLBACK QUEUE and EVENT LOOP checks if CALL STACK is empty, 
once it is task is send to CALL STACK and eventualy console log "3" is out.

THAT IS JAVASCRIPT RUN-TIME ENVIRONMENT!!!!!

So one again we start with JS ENGINE e.g. V8 (call stack, memory heap) --> Web API( DOM, AJAX, setTimeout) --> callback queue --> event loop --> JS engine --> machine code --> byte code

*/
