



onmessage = function(e) {
  if(navigator.onLine) {
    console.log('Browser is online.')

    let isRateLimited = false;
    let reset = null
    let remaining = null
    let limit = null
    
    function handleResponse(response) {
      if(response.status === 403) return undefined //rate limit reached
      if(!response.ok) return null //api error
      reset = new Date(Number(response.headers.get('X-RateLimit-Reset')) * 1000)
      remaining =  Number(response.headers.get('X-RateLimit-Remaining'))
      limit =  Number(response.headers.get('X-RateLimit-Limit'))
      return response.json();
    }

    console.log('fetching rate limits...')
    fetch(`https://api.github.com/users/robsmitha`)
    .then(handleResponse)
    .then(data => {
      if(data === undefined) console.log('rate limited while fetching rate limit info')
      else if(data === null) console.log('could not fetch rate limits')
      else {
        let time =  e.data.cached_at  
        console.log('polling started... last cached at ' + new Date(time).toLocaleTimeString())
        let looper = setInterval(() => {
          let now = new Date()
          let startDelay = 0;  
          if(isRateLimited){
            startDelay = (reset.getTime() - now.getTime()) / 1000
            console.log('rate limit reached, looper will start again at ' + reset.toLocaleTimeString())
          }
          else{
            let ms = (reset.getTime() - now.getTime()) / 1000
            if(ms >= 0 && remaining > 0){
              //TODO: adjust delay based on elapsed time

              //set start delay
              startDelay = (ms / remaining) * 1000;
              console.log('delay = ', delay)
            }
          }

          let consecutiveFailures = 0;
          setTimeout(() => {
            console.log('polling... last cached at ' + new Date(time).toLocaleTimeString())
            fetch(`https://api.github.com/users/robsmitha/repos?sort=pushed&direction=desc`)
              .then(handleResponse)
              .then(data => {
                if(data === undefined){
                  console.log('polling stopped... rate limited')
                  isRateLimited = true;
                }
                else if(data === null){
                  console.log('polling request was not successful')
                  //stop looper if we get consecutive failed requests
                  if(++consecutiveFailures == 2){
                    console.log('stopping looper after consecutive failures')
                    clearInterval(looper) 
                  }
                }
                else {
                  consecutiveFailures = 0; //reset fail count
                  let repos = data.filter(repo => repo.description !== null && repo.description.length > 0)
                  if(repos.length > 0){
                    let max = 0;
                    repos.forEach(repo => max = Math.max(max, new Date(repo.updated_at).getTime())) //get most recent update time
                    if(max > time) {
                      time = max; //update cache time
                      postMessage({
                        updated_at: max 
                      })
                    }
                  }
                }
              })
          }, startDelay) //end timeout
        }, 5000) //poll every 5 seconds
      }
    })
    .catch(ex => {
      console.log('caught ' + ex)
    })
  }
  else {
    console.log('Browser is offline.')
  }
}