let burger = document.getElementById('burger'),
	 nav    = document.getElementById('main-nav');
   nav2 = document.getElementById('nav-head');

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
  nav2.classList.toggle('is-open');
});

const hideValues = {
    hide: "hidden",
    show: "showme",
    double: "dblclick"
  };

  function toggleEventHandler(event) {
    const targetSelector = event.target.dataset.target;
    const target = document.querySelector(targetSelector);
    const showHide = target.dataset.hideme == hideValues.hide ? hideValues.show : hideValues.hide;
    const toggleTargets = document.querySelectorAll('.toggle-target');
    toggleTargets.forEach(el => {
      el.dataset.hideme = hideValues.hide;
    });
    target.dataset.hideme = showHide;
  }
  
  /* set up event handlers on the buttons */
  const options = {
    capture: true
  };
  /* we do this first to prevent the click from happening */
  const toggleButtons = document.querySelectorAll('.toggle-button');
  toggleButtons.forEach(el => {
    el.addEventListener('click', toggleEventHandler, options)
  });

  addDietBadges();


const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('menuitem-anim');
        }
		else{
			entry.target.classList.remove('menuitem-anim');
		}
    });
});

const hidenElements = document.querySelectorAll('.menuitem');
hidenElements.forEach((el) => observer.observe(el))

    function toggleDiv() {
        const selectElement = document.getElementById('Question8');
        const additionalDiv = document.getElementById('additionalDiv');

        if (selectElement.value === 'Yes') {
            additionalDiv.style.display = 'block'; // Show the div
        } else {
            additionalDiv.style.display = 'none'; // Hide the div
        }
    }

  function addDietBadges() {
    const dietItems = document.querySelectorAll('.menuitem.vegan, .menuitem.vegetarian');

    dietItems.forEach(item => {
      const textBox = item.querySelector('.menuitemtext');
      if (!textBox) return;

      const existingBadge = textBox.querySelector('.menuitem-vegan-badge, .menuitem-vegetarian-badge');
      if (existingBadge) return;

      const badge = document.createElement('span');
      badge.className = item.classList.contains('vegan') ? 'menuitem-vegan-badge' : 'menuitem-vegetarian-badge';
      badge.textContent = item.classList.contains('vegan') ? 'VG' : 'V';
      textBox.appendChild(badge);
    });
  }