//Immediately invoke function Expression (IIFE)

(function chai(){
    //named iife
    console.log(`DB Connections`);
})();
//samicolone has to define end


(()=>{
    //unnamed iife
    console.log(`DB Connected Two`);
}) ();

((name)=>{
    //parameter
    console.log(`DB Connected three ${name}`);
}) ('hitesh')































