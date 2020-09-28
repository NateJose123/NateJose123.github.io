// The checker
const gambitGalleryIsInView = el => {
	const scroll = window.scrollY || window.pageYOffset
	const boundsTop = el.getBoundingClientRect().top + scroll
	
	const viewport = {
		top: scroll,
		bottom: scroll + window.innerHeight,
	}
	
    const bounds = {
		top: boundsTop,
		bottom: boundsTop + el.clientHeight,
	}
	
	return ( bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom ) 
		|| ( bounds.top <= viewport.bottom && bounds.top >= viewport.top );
}


// Usage.
document.addEventListener( 'DOMContentLoaded', () => {
  const tester = document.querySelector( '#introname' )
  const tester1 = document.querySelector( '#intronameline')
  const tester2 = document.querySelector( '#roles')
  const tester3 = document.querySelector( '#introp1')
	
	const handler = () => raf( () => {
		if(gambitGalleryIsInView( tester )) {
      tester.classList.toggle("active");
      tester1.classList.toggle("active");
      tester2.classList.toggle("active");
      tester3.classList.toggle("active");
      window.removeEventListener( 'scroll', handler )
      console.log("true")
    }
    else {
      console.log("false")
    }
	} )
	
	handler()
	window.addEventListener( 'scroll', handler )
} )


// Usage #2.
document.addEventListener( 'DOMContentLoaded', () => {
  const tester = document.querySelector( '#resume' )
	
	const handler = () => raf( () => {
		if(gambitGalleryIsInView( tester )) {
      tester.classList.toggle("active");
      window.removeEventListener( 'scroll', handler )
      console.log("true")
    }
    else {
      console.log("false")
    }
	} )
	
	handler()
	window.addEventListener( 'scroll', handler )
} )

// requestAnimationFrame
const raf = 
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function( callback ) {
        window.setTimeout( callback, 1000 )
    }
