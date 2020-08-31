let timerId = setInterval(() => console.log('tick'), 1000);


setTimeout(()=>{ clearInterval(timerId);
                 console.log('-- stop --');
                },5000);