// buttons and counter text

const counter = document.querySelector('#counter')
const btns = document.querySelectorAll('.btn')

console.log(btns)

// initilize the count variable
var count = 0

btns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
  const styles = e.currentTarget.classList
  
  if(styles.contains('increase')){
  	count++
  } else if (styles.contains('decrease')){
  	count--
    }  else {
    	count = 0
    }
        if (count > 0) {
    counter.style.color = 'red'
    }
            if (count >= 6) {
    counter.style.color = 'orange'
    }
            if (count >= 10) {
    counter.style.color = 'green'
    }
   
        if (count === 0) {
    counter.style.color = 'grey'
    }
    
  			counter.textContent = count
  })
})


